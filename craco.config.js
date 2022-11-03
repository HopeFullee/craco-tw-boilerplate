module.exports = {
  babel: {
    presets: ["@babel/preset-react", "@emotion/babel-preset-css-prop"],
    plugins: [
      [
        "@emotion",
        {
          autoLabel: "dev-only",
          labelFormat: "[dirname]-[filename]-[local]",
        },
      ],
      "babel-plugin-macros",
      "babel-plugin-styled-components",
    ],
  },
};
