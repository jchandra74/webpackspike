const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  mode: "development",
  entry: {
    demo: "./src/demo/app.js"
  },
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      //handlebars: "handlebars/dist/handlebars.min.js"
    }
  },
  externals: {
    handlebars: "Handlebars"
  },
  module: {
    rules: [
      { test: /\.ts$/, use: "ts-loader" },
      { test: /\.html$/, use: "raw-loader" }
    ]
  },
  output: {
    filename: "[name].[hash].bundle.js",
    path: path.resolve("./dist/")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html"
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000,
    overlay: true
  },
  devtool: "inline-source-map"
};

module.exports = env => {
  if (env && env.prod) {
    config.mode = "production";
    config.output.filename = "[name].[hash].min.js";
  }
  return config;
};
