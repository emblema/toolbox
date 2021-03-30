const path = require("path");
const webpack = require("webpack");

var config = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js",
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};

module.exports = (env, argv) => {
  if (argv.mode === "development") {
    const devServer = {
      contentBase: path.join(__dirname, "public/"),
      port: 3000,
      publicPath: "http://localhost:3000/dist/",
      watchContentBase: true,
      hot: true,
    };

    config.devServer = devServer;
    config.mode = "development";
    config.devtool = "inline-source-map";
  } else {
    config.mode = "production";
    config.devtool = "source-map";
  }

  return config;
};
