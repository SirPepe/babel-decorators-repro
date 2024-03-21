import babelConfig from "./babel.config.mjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";

export const extensions = [".ts", ".js"];

export default [
  {
    input: "index.ts",
    output: {
      file: "index.js",
      format: "esm",
    },
    plugins: [
      nodeResolve({ extensions }),
      babel({
        extensions,
        ...babelConfig,
        babelHelpers: "bundled",
        exclude: "node_modules/**",
      }),
    ],
  },
];
