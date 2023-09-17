import path from "path";
import "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { webpack } from "webpack";

const config = {
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
        exclude: /node_modules/,
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
    new webpack.ProvidePlugin({
      React: "react",
      Component: ["react", "Component"],
    }),
  ],
};

export default config;
