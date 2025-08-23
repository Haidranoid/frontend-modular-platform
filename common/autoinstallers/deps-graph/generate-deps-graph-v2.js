#!/usr/bin/env node
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const { digraph } = require("graphviz-builder");

// 1. Ejecutar rush list para obtener proyectos
console.log("📦 Ejecutando rush list...");
const output = execSync("rush list --json", { encoding: "utf-8" });
const rushProjects = JSON.parse(output).projects;

// Crear un map { nombre → path absoluto }
const projectMap = new Map();
for (const proj of rushProjects) {
    projectMap.set(proj.name, proj.fullPath);
}

// 2. Construir lista de dependencias entre proyectos
console.log("📝 Leyendo package.json...");
const depsGraph = [];

for (const proj of rushProjects) {
    const pkgJsonPath = path.join(proj.fullPath, "package.json");
    if (!fs.existsSync(pkgJsonPath)) continue;

    const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, "utf-8"));
    const localDeps = [];

    // mirar en deps y devDeps
    const allDeps = {
        ...pkgJson.dependencies,
        ...pkgJson.devDependencies,
    };

    for (const depName of Object.keys(allDeps || {})) {
        if (projectMap.has(depName)) {
            localDeps.push(depName);
        }
    }

    depsGraph.push({
        name: proj.name,
        dependencies: localDeps,
    });
}

// 3. Construir grafo con graphviz-builder
console.log("🎨 Generando grafo...");
const g = digraph("rush_deps");

//g.set("rankdir", "LR");   // layout left-to-right
g.set("rankdir", "TB");   // layout top-to-bottom
//g.set("ranksep", "1.5");  // espacio vertical
g.set("ranksep", "1.2");  // espacio entre filas
//g.set("nodesep", "0.8");  // espacio horizontal
g.set("nodesep", "0.8");  // espacio entre columnas
g.set("splines", "ortho")
g.set("overlap", "false");   // no encimar nodos
g.set("constraint", "true");

for (const proj of depsGraph) {
    g.addNode(proj.name, {
        shape: "circle",
        style: "filled",
        color: "#6c9bd2",
        fontname: "Arial",
        fontcolor: "white",
    });
}

for (const proj of depsGraph) {
    for (const dep of proj.dependencies) {
        g.addEdge(proj.name, dep); // Proj → Dependency
    }
}

// 4. Guardar DOT
const outDir = path.join(__dirname, "../../temp");
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}
const dotPath = path.join(outDir, "deps-graph.dot");
fs.writeFileSync(dotPath, g.to_dot(), "utf-8");

// 5. Generar SVG con graphviz
console.log("🎨 Renderizando a SVG...");
const svgPath = path.join(outDir, "deps-graph.svg");
//execSync(`dot -Tpng -Gdpi=600 rush-deps.dot -o rush-deps.png`);
execSync(`dot -Tsvg "${dotPath}" -o "${svgPath}"`);

console.log(`✅ Grafo generado en: ${svgPath}`);
