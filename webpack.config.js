/* eslint-disable import/no-commonjs */

const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: "WebpackStarter",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  watchOptions: {
    poll: 1000,
    aggregateTimeout: 300,
    ignored: ["node_modules"],
  },
};
