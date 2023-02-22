const path = require("path");
const base = require("./webpack.base");
const { merge } = require("webpack-merge");

module.exports = merge(base, {
  mode: "development",
  entry: {
    import: "./client/index.js",
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
});
