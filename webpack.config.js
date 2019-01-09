const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

const config = {
  entry: {
    main: ['./src/js/index.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/env',
                {
                  modules: 'commonjs',
                },
              ],
              '@babel/react',
            ],
          },
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].[chunkhash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      themeColor: '#4285f4',
      title: 'Welcome to the Base Form',
      template: './src/html/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  watchOptions: {
    ignored: ['/node_modules/'],
  },
};

// Config changes for speedier development
if (process.env.NODE_ENV === 'dev') {
  config.devtool = 'source-map';
  config.entry.main.push('webpack-hot-middleware/client');
  config.mode = 'development';
  config.module.rules[1].use[0] = {
    loader: 'style-loader',
    options: {
      sourceMap: true,
    },
  };
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = config;
