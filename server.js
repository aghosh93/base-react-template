const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require("webpack-hot-middleware")

const config = require('./webpack.config');
const compiler = webpack(config);

const app = express();
const port = 8080;

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!\n`);
});
