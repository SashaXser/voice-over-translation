import path from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.resolve(path.dirname(__filename));

export default {
  resolve: {
    extensions: [".js"],
  },
  performance: {
    hints: "error",
    maxEntrypointSize: 2000 * 10 ** 3,
    maxAssetSize: 2000 * 10 ** 3,
  },
  resolveLoader: {
    alias: {
      "lightning-loader": path.resolve(__dirname, "lightning-loader.js"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/i,
        // use: ["style-loader", "css-loader", "sass-loader"],
        use: ["lightning-loader"],
      },
    ],
  },
};
