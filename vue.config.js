const path = require("path");
const webpack = require("webpack");

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        "process.env.VERSION": JSON.stringify(
          require("./package.json").version
        ),
      }),
    ],
  },
  devServer: {
    open: true,
  },
  publicPath: process.env.NODE_ENV === "production" ? "/" + "cari" + "/" : "/",
};
