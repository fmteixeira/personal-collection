// New Component

const newComponent = {
  generateFolderIndex: (data) => {
    return {
      type: "add",
      path: `src/components/${
        data.location ? data.location + "/" : ""
      }{{properCase folderName}}/index.ts`,
      templateFile: `generators/component/index.ts.hbs`,
    };
  },
  generateComponent: (data) => {
    return {
      type: "add",
      path: `src/components/${
        data.location ? data.location + "/" : ""
      }${baseFolder}{{properCase componentName}}/{{properCase componentName}}.tsx`,
      templateFile: "generators/component/Component.tsx.hbs",
    };
  },
  generateComponentIndex: (data) => {
    return {
      type: "add",
      path: `src/components/${
        data.location ? data.location + "/" : ""
      }${baseFolder}{{properCase componentName}}/index.ts`,
      templateFile: `generators/component/index.ts.hbs`,
    };
  },
  generateStorybook: (data) => {
    return {
      type: "add",
      path: `src/components/${
        data.location ? data.location + "/" : ""
      }${baseFolder}{{properCase componentName}}/{{properCase componentName}}.stories.tsx`,
      templateFile: "generators/component/Component.stories.tsx.hbs",
    };
  },
};

module.exports = {
  newComponent,
};
