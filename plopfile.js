// const componentGenerator = require("./generators/component");
const componentGenerator = require("./generators/component");

module.exports = function (plop) {
  // plop.setGenerator("component", componentGenerator);
  componentGenerator(plop);
};
