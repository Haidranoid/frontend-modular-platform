import * as path from 'path'
import { CssMinimizerPlugin, TerserPlugin, BundleAnalyzerPlugin, BrotliCompressionPlugin, GzipCompressionPlugin, MiniCssExtractPlugin } from './plugins/index.js'

export const prodConfig = {
  mode: 'production',
  //devtool: 'inline-source-map',
  stats: {
    all: false,
    errorDetails: true,
    assets: true,
    errors: true,
    warnings: true,
    timings: true,
    chunkGroups: true,
  },
  output: {
    clean: true,
    path: path.resolve(process.cwd(), "dist"),
    publicPath: '/',
    //publicPath: path.resolve('dist'),

    // Filename para los Entry Points (main, etc.)
    filename: "[name]/[contenthash].js",

    // ChunkFilename para los grupos (vendors y chunks dinámicos)
    // El [name] será reemplazado por el 'name' definido en el cacheGroup (ej: 'js/vendors/react')
    chunkFilename: "chunks/[name].[contenthash].chunk.js",

    // Para los archivos cargados por Asset Modules (imágenes, etc.)
    assetModuleFilename: "assets/[name].[contenthash][ext]",
  },
  optimization: {
    usedExports: true,
    sideEffects: true,
    minimize: true,
    minimizer: [TerserPlugin, CssMinimizerPlugin],
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: 10,
      maxAsyncRequests: 20,
      minSize: 20000,
      maxSize: 500000, // (~500 KiB)
      //automaticNameDelimiter: '-',
      cacheGroups: {
        // 1. REACT: Grupo para React
        react: {
          test: /[\\/]node_modules[\\/](react)[\\/]/,
          name: 'vendors/react', // Nombre del archivo: react.[hash].js
          chunks: 'all',
          priority: 40, // Alta prioridad
          enforce: true,
        },

        // 2. REACT DOM: Grupo para React-DOM
        reactDom: {
          test: /[\\/]node_modules[\\/](react-dom)[\\/]/,
          name: 'vendors/react-dom', // Nombre del archivo: react-dom.[hash].js
          chunks: 'all',
          priority: 30, // Alta prioridad
          enforce: true,
        },

        // 3. REACT ROUTER: Grupo para React-Router
        reactRouter: {
            test: /[\\/]node_modules[\\/](react-router)[\\/]/,
            name: 'vendors/react-router', // Nombre del archivo: react-router.[hash].js
            chunks: 'all',
            priority: 25, // Alta prioridad
            enforce: true,
        },

        // 4. REDUX: Grupo para Redux (y podrías añadir otras librerías de estado aquí)
        redux: {
          test: /[\\/]node_modules[\\/](redux)[\\/]/,
          name: 'vendors/redux', // Nombre del archivo: redux.[hash].js
          chunks: 'all',
          priority: 20,
          enforce: true,
        },

        // 4. INTERNAL SHARED: Grupo para @webapp/shared
        webappShared: {
          // Asegúrar de que esta ruta sea la ABSOLUTA donde está tu código 'shared'
          test: new RegExp(
            path.resolve(process.cwd(), '../../features', 'shared').replace(/\\/g, '\\\\')
          ),
          name: 'features/webapp-shared', // webapp-shared.[hash].js
          chunks: 'all',
          priority: 15,
          enforce: true,
        },

        // 5. INTERNAL AUTH: Grupo para @webapp/auth
        webappAuth: {
          // Asegúrar de que esta ruta sea la ABSOLUTA donde está tu código 'auth'
          test: new RegExp(
            path.resolve(process.cwd(), '../../features', 'auth').replace(/\\/g, '\\\\')
          ),
          name: 'features/webapp-auth', // webapp-auth.[hash].js
          chunks: 'all',
          priority: 15,
          enforce: true,
        },

        // 6. INTERNAL ACCOUNTS: Grupo para @webapp/accounts
        webappAccounts: {
          test: new RegExp(
            path.resolve(process.cwd(), '../../features', 'accounts').replace(/\\/g, '\\\\')
          ),
          name: 'features/webapp-accounts', // webapp-accounts.[hash].js
          chunks: 'all',
          priority: 15,
          enforce: true,
        },

        // 6. RESTO DE VENDORS: Grupo catch-all para el resto de node_modules (ej: react-router)
        nodeVendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors/node-util', // node-util.[hash].js
          chunks: 'all',
          priority: 10, // Menor prioridad para que los grupos específicos capturen primero
          reuseExistingChunk: true,
        },
      },
    },
    runtimeChunk: "single",
  },
  plugins: [MiniCssExtractPlugin, BrotliCompressionPlugin, GzipCompressionPlugin, BundleAnalyzerPlugin],
  performance: {
    hints: 'warning',
    maxAssetSize: 500000, // 500kb
    maxEntrypointSize: 1000000, // 1MB
  }
}

//Get-ChildItem | Format-Table Name, @{Name="Size (KB)"; Expression={"{0:N2}" -f ($_.Length / 1KB)}} -AutoSize
