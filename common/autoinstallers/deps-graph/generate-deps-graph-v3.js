#!/usr/bin/env node
const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')
const ELK = require('elkjs')

const elk = new ELK()

function getRushProjects() {
    const output = execSync("rush list --json", { encoding: "utf-8" });
    return JSON.parse(output).projects;
}

function buildGraph(packages) {
    const nodes = packages.map(pkg => ({
        id: pkg.name,
        labels: [{ text: pkg.name }],
        width: 180,
        height: 60,
    }));

    const edges = [];

    for (const pkg of packages) {
        const pkgJsonPath = path.join(pkg.fullPath, "package.json");
        if (!fs.existsSync(pkgJsonPath)) continue;

        const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, "utf-8"));
        const deps = {
            ...pkgJson.dependencies,
            ...pkgJson.devDependencies,
            ...pkgJson.peerDependencies,
        };

        for (const depName of Object.keys(deps)) {
            if (packages.some(p => p.name === depName)) {
                edges.push({
                    id: `${pkg.name}->${depName}`,
                    sources: [pkg.name],
                    targets: [depName]
                });
            }
        }
    }

    return {
        id: "root",
        layoutOptions: {
            'elk.algorithm': 'layered',              // layout jerárquico
            'elk.direction': 'DOWN',                 // top → bottom
            'elk.layered.spacing.nodeNodeBetweenLayers': '150',
            'elk.layered.spacing.edgeNodeBetweenLayers': '50',
            "elk.spacing.edgeEdge": "30",
            'elk.spacing.nodeNode': '80',
            //'elk.edgeRouting': 'SPLINES',
            'elk.edgeRouting': 'ORTHOGONAL',         // flechas en ángulo recto
            'elk.layered.mergeEdges': 'false',        // juntar edges paralelos
            'elk.layered.nodePlacement.strategy': 'SIMPLE', // evita rejilla rara
            //'elk.layered.crossingMinimization.semiInteractive': 'true',
        },
        children: nodes,
        edges
    };
}

function graphToSVG(layout) {
    const nodes = layout.children.map(
        node => `<rect x="${node.x}" y="${node.y}" width="${node.width}" height="${node.height}" rx="10" ry="10" fill="#6c9bd2" stroke="#333"/>
             <text x='${node.x + node.width / 2}' y='${node.y + node.height / 2}' font-family="Arial" font-size="14" fill="white"
             text-anchor='middle' dominant-baseline='middle'>${node.labels[0].text}</text>`
    );

    const edges = layout.edges.map(edge => {
        if (!edge.sections) return "";
        return edge.sections
            .map(section => {
                const points = [{ x: section.startPoint.x, y: section.startPoint.y }]
                    .concat(section.bendPoints || [])
                    .concat([section.endPoint])
                    .map(p => `${p.x},${p.y}`)
                    .join(" ");

                return `<polyline points="${points}" fill="none" stroke="#444" stroke-width="2" marker-end="url(#arrow)"/>`;
            })
            .join("\n");
    });

    return `
  <svg xmlns="http://www.w3.org/2000/svg" width="${layout.width}" height="${layout.height}">
    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="10" refX="10" refY="5" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L10,5 L0,10 z" fill="#444" />
      </marker>
    </defs>
    ${nodes.join("\n")}
    ${edges.join("\n")}
  </svg>
  `;
}

async function main() {
    console.log("📦 Ejecutando rush list...");
    const packages = getRushProjects();

    console.log("📝 Construyendo grafo...");
    const graph = buildGraph(packages);

    console.log("📐 Calculando layout con ELK...");
    const layout = await elk.layout(graph);

    console.log("🎨 Exportando a SVG...");
    const svg = graphToSVG(layout);

    const outputPath = path.join(__dirname, '../../temp', 'deps-graph.svg');
    fs.writeFileSync(outputPath, svg, "utf-8");

    console.log(`✅ Grafo generado en: ${outputPath}`);
}

main().catch(err => {
    console.error("❌ Error:", err);
    process.exit(1);
});