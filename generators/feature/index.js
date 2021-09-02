const { validateName } = require("../utils/validators");
const { newFeature } = require("./utils/functions");

module.exports = (plop) => {
  plop.setGenerator("Feature Generator", {
    description: "Feature Generator",
    prompts: [
      {
        type: "input",
        name: "componentName",
        message: "Feature name:",
        validate: (input) => validateName(input),
      },
    ],
    actions: (data) => {
      let actions = [];

      // Component
      actions = newFeature.generateFeature(actions, data);
      // Folder index
      actions = newFeature.generateFeatureIndex(actions, data);
      // Storybook
      actions = newFeature.generateStorybook(actions, data);
      // Linting
      actions = newFeature.generateLintRule(actions, data);

      return actions;
    },
  });
};
