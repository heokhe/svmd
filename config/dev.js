const path = require('path'),
  HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './examples/main.js',
  output: {
    path: path.resolve(__dirname, '../examples/dist'),
    filename: '[name]-[hash].js'
  },
  resolve: {
    alias: {
      svelte: path.resolve('node_modules', 'svelte')
    },
    extensions: ['.mjs', '.js', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main']
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './examples/dist',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(html|svelte)$/,
        exclude: /node_modules/,
        use: {
          loader: 'svelte-loader'
        }
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader', 'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [path.resolve('node_modules')]
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      hash: true,
      title: 'SVMD Playground',
      meta: { 'theme-color': '#43a047' }
    })
  ],
  optimization: {
    runtimeChunk: 'single',
    moduleIds: 'hashed',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
};
