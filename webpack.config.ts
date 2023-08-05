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
        test: /\.(ts|tsx)$/i,
        use: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react",
            "@babel/preset-typescript",
          ],
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".d.ts"],
  },
  plugins: [],
};

export default config;
