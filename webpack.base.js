module.exports = {
  module: {
    rules: [
      // js jsx 打包
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          // 最新的 js 语法，支持 react 打包
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    ],
  },
};
