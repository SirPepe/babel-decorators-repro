export default {
  presets: [["@babel/preset-env", {}], "@babel/preset-typescript"],
  plugins: [
    [
      "@babel/plugin-proposal-decorators",
      {
        version: "2023-11",
      },
    ],
  ],
};
