const { resolve } = require('path'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin');

const createConfig = ({ esModule, includeStyles }) => ({
  mode: 'production',
  entry: `./src/${includeStyles ? 'index' : 'components'}.js`,
  output: {
    path: resolve(__dirname, '../dist'),
    filename: `svmd.${esModule ? 'es.js' : 'js'}`,
    ...!esModule && { libraryTarget: 'commonjs' }
  },
  module: {
    rules: [
      {
        test: /\.(html|svelte)$/,
        exclude: /node_modules/,
        use: 'svelte-loader'
      },
      ...includeStyles ? [{
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
      }] : []
    ]
  },
  ...includeStyles && {
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'svmd.css'
      })
    ]
  }
});

module.exports = [createConfig({ esModule: true }), createConfig({ includeStyles: true })];
