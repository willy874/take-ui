import * as path from "path";
import * as webpack from "webpack";
import "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
  mode: "development",
  entry: "./index.ts",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/i,
        use: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".d.ts"],
    modules: [path.resolve(__dirname, "node_modules"), path.resolve(__dirname, "./packages")],
    fallback: {
      events: require.resolve("events/"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./dist/index.html",
    }),
  ],
};

export default config;
