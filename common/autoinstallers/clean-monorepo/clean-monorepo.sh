#!/bin/bash
# ============================================================
# clean-monorepo.sh
# Script to fully clean a Rush monorepo, reinstall dependencies
# and perform a clean build.
#
# ============================================================

echo "=== Clean Rush build artifacts and temporary node_modules ==="
# Removes build outputs and Rush temp folders
rush clean

echo "=== Delete the temp node_modules folder used by PNPM ==="
# Ensures no stale dependencies remain
rm -rf common/temp/node_modules

echo "=== Remove TypeScript incremental build info ==="
# Forces a full TypeScript rebuild
find . -name "*.tsbuildinfo" -delete

echo "=== Delete Webpack cache folders==="
# Prevents Webpack from using stale cache
find . -type d -name ".cache" -exec rm -rf {} +

echo "=== Clean unused PNPM store packages ==="
# Optional, only remove packages that are no longer used
pnpm store prune
# pnpm store clear  # Uncomment if you want to force total PNPM store cleanup
# Remove node_modules from each Rush project to ensure fresh installs
# rush purge

echo "=== Reinstall all packages in the monorepo ==="
#  Ensures all projects have fresh node_modules
rush update --full

echo "=== Build all projects in the monorepo ==="
# Ensures everything is compiled fresh
rush build

echo "=== Monorepo cleaned and rebuilt successfully ==="