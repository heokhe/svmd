const { resolve } = require('path'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin');

const createJSconfig = (esModule = false) => ({
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, '../dist'),
    filename: `svmd${esModule ? '.es' : ''}.js`,
    ...!esModule && { libraryTarget: 'commonjs' }
  },
  module: {
    rules: [{
      test: /\.(html|svelte)$/,
      exclude: /node_modules/,
      use: 'svelte-loader'
    }]
  }
});

// const createConfig = ({ esModule, isStyle = false }) => ({
//   mode: 'production',
//   entry: `./src/${isStyle ? '.styles' : 'index'}.js`,
//   output: {
//     path: resolve(__dirname, '../dist'),
//     filename: `svmd.${esModule ? 'es.js' : 'js'}`,
//     ...!esModule && { libraryTarget: 'commonjs' }
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(html|svelte)$/,
//         exclude: /node_modules/,
//         use: 'svelte-loader'
//       },
//       ...includeStyles ? [{
//         test: /\.s[ac]ss$/,
//         use: [
//           MiniCssExtractPlugin.loader,
//           'css-loader',
//           {
//             loader: 'sass-loader',
//             options: {
//               sassOptions: {
//                 includePaths: [resolve('node_modules')]
//               }
//             }
//           }
//         ]
//       }] : []
//     ]
//   },
//   ...includeStyles && {
//     plugins: [
//       new MiniCssExtractPlugin({
//         filename: 'svmd.css'
//       })
//     ]
//   }
// });

module.exports = [
  createJSconfig(true),
  createJSconfig(false),
  {
    mode: 'production',
    entry: './src/.styles.js',
    output: {
      path: resolve(__dirname, '../dist'),
      filename: '.styles.js'
    },
    module: {
      rules: [{
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [resolve('node_modules')]
              }
            }
          }
        ]
      }]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'svmd.css'
      })
    ]
  }
];
