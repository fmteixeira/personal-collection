const newFeature = {
  generateFeature: (actions, data) => {
    const newAction = {
      type: "add",
      path: `src/features/{{properCase componentName}}/{{properCase componentName}}.tsx`,
      templateFile: "generators/component/Component.tsx.hbs",
    };

    return [...actions, newAction];
  },
  generateFeatureIndex: (actions, data) => {
    const newAction = {
      type: "add",
      path: `src/features/{{properCase componentName}}/index.ts`,
      templateFile: `generators/component/index.ts.hbs`,
    };
    return [...actions, newAction];
  },
  generateStorybook: (actions, data) => {
    const newAction = {
      type: "add",
      path: `src/features/{{properCase componentName}}/{{properCase componentName}}.stories.tsx`,
      templateFile: "generators/component/Component.stories.tsx.hbs",
    };
    return [...actions, newAction];
  },
  generateLintRule: (actions, data) => {
    const newAction = {
      type: "append",
      unique: true,
      path: `.eslintrc.js`,
      pattern: "zones: [",
      template: `          {
            target: "./src/features/{{properCase componentName}}",
            from: "./src/features",
            except: ["./{{properCase componentName}}"],
          },`,
    };
    return [...actions, newAction];
  },
};

module.exports = {
  newFeature,
};
