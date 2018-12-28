module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ["airbnb"],
  parser: "babel-eslint",
  plugins: ["babel", "node", "react"],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".react.js",] }],
    "react/prop-types": [0],
  }
};
