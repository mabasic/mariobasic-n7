import { defineConfig } from "rollup";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default defineConfig({
  input: "resources/js/main.js",
  output: {
    file: "public/js/bundle.js",
    format: "iife",
    sourcemap: process.env.BUILD === 'production' ? false : true
  },
  plugins: [nodeResolve(), terser()],
});
