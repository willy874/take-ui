import * as path from "path";
import * as webpack from "webpack";
import "webpack-dev-server";

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
  },
  plugins: [],
};

export default config;
