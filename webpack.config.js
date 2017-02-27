var webpack = require("webpack");

module.exports = {
  entry: {
    app: "./client/index.jsx"
  },
  output: {
    filename: "./public/dist/js/[name].js"
  },
  devtool: "source-map-loader",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader"
      }
    ]
  }
};
