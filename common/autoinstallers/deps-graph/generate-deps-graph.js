#!/usr/bin/env node

// Rush dependency graph generator
// Ejecuta rush list --json -> genera graph.dot -> genera graph.svg

const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

// 1. Ejecutar rush list --json
console.log('📦 Ejecutando rush list...')
const depsJson = execSync('rush list --json', { encoding: 'utf-8' })
const deps = JSON.parse(depsJson)

// 2. Transformar a formato Graphviz DOT
console.log('📝 Generando graph.dot...')
let dot = 'digraph G {\n';
dot += '  graph [rankdir="LR"];\n'; // layout left-to-right
dot += '  node [shape=box, style=filled, color="#6c9bd2", fontname="Arial"];\n';

const projects = deps.projects.map((p) => p.name)

// nodos
for (const project of deps.projects) {
    dot += `  '${project.name}';\n`;
}

// aristas
for (const project of deps.projects) {
    if (project.dependencies) {
        for (const dep of project.dependencies) {
            if (projects.includes(dep.name)) {
                dot += `  '${project.name}' -> '${dep.name}';\n`;
            }
        }
    }
}

dot += '}\n';

const outDir = path.join(__dirname, '../../temp')
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true })
}
const dotPath = path.join(outDir, 'deps-graph.dot')
fs.writeFileSync(dotPath, dot, 'utf-8')

// 3. Generar SVG con graphviz
console.log('🎨 Renderizando a SVG...')
const svgPath = path.join(outDir, 'deps-graph.svg')
execSync(`dot -Tsvg '${dotPath}' -o '${svgPath}'`)

console.log(`✅ Grafo generado en: ${svgPath}`)
