import * as fs from "fs";
import * as path from "path";
import type { Plugin } from "esbuild";

export function importsRewritePlugin(): Plugin {
    return {
        name: "imports-rewrite",
        setup(build) {
            console.log("PLUGIN imports-rewrite cargado en", process.cwd());

            // Leer imports del package.json de la lib
            const pkgPath = path.join(process.cwd(), "package.json");
            const pkgJson = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
            const importsMap: Record<string, string> = pkgJson.imports || {};

            // Solo claves exactas (sin wildcards)
            const entries = Object.entries(importsMap).filter(([key]) => !key.includes("*"));

            // Interceptar solo imports JS/TS (onLoad) para reemplazar paths
            build.onLoad({ filter: /\.[jt]sx?$/ }, async args => {
                let contents = fs.readFileSync(args.path, "utf-8");

                for (const [alias, target] of entries) {
                    // regex simple para imports exactos
                    const importRegex = new RegExp(`(from\\s+['"])${alias}(['"])`, "g");

                    if (importRegex.test(contents)) {
                        const absTarget = path.resolve(process.cwd(), target);
                        const relPath = path.relative(path.dirname(args.path), absTarget).replace(/\\/g, "/");
                        const finalPath = relPath.endsWith(".ts") ? relPath.replace(/\.ts$/, ".js") : relPath;

                        contents = contents.replace(importRegex, `$1${finalPath}$2`);
                        console.log(`[imports-rewrite] ${alias} → ${finalPath} en ${args.path}`);
                    }
                }

                return { contents, loader: path.extname(args.path).slice(1) as "ts" | "js" };
            });
        }
    };
}
