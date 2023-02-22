const path = require("path");
const { merge } = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");
const base = require("./webpack.base");

module.exports = merge(base, {
  target: "node", // 告诉 webpack 是打包 node 项目
  mode: "development",
  entry: "./server/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  externals: [nodeExternals()],
});
