const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const config = require('./webpack.config');
config.mode = 'development';
const compiler = webpack(config);

const app = express();
const port = 8080;

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!\n`);
});
