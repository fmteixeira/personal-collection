const { component, selectFolder, selectMultipleFolder } = require("./options");

// New Component

const newComponentFolderData = (data) => {
  const isSingular =
    data.selectMultipleFolder === selectMultipleFolder.options.singular;
  const baseFolder = isSingular ? "" : `${data.folderName}/`;
  return {
    isSingular,
    baseFolder,
  };
};

const newComponent = {
  generateFolderIndex: (actions, data) => {
    const { isSingular } = newComponentFolderData(data);

    if (data.selectFolder === selectFolder.options.newFolder) {
      const newAction = {
        type: "add",
        path: `src/components/${
          data.location ? data.location + "/" : ""
        }{{properCase folderName}}/index.ts`,
        templateFile: `generators/component/index.ts.hbs`,
      };
      return isSingular ? actions : [...actions, newAction];
    }
    if (data.selectFolder === selectFolder.options.hasFolder) {
      const newAction = {
        type: "append",
        unique: true,
        path: `src/components/${
          data.location ? data.location + "/" : ""
        }{{properCase folderName}}/index.ts`,
        // pattern: /(\/\/ IMPORT MODULE FILES)/g,
        pattern: ";",
        template: 'export * from "./{{properCase componentName}}";',
      };
      return [...actions, newAction];
    }
  },
  generateComponent: (actions, data) => {
    const { baseFolder } = newComponentFolderData(data);

    const newAction = {
      type: "add",
      path: `src/components/${
        data.location ? data.location + "/" : ""
      }${baseFolder}{{properCase componentName}}/{{properCase componentName}}.tsx`,
      templateFile: "generators/component/Component.tsx.hbs",
    };

    return [...actions, newAction];
  },
  generateComponentIndex: (actions, data) => {
    const { baseFolder } = newComponentFolderData(data);

    const newAction = {
      type: "add",
      path: `src/components/${
        data.location ? data.location + "/" : ""
      }${baseFolder}{{properCase componentName}}/index.ts`,
      templateFile: `generators/component/index.ts.hbs`,
    };
    return [...actions, newAction];
  },
  generateStorybook: (actions, data) => {
    const { baseFolder } = newComponentFolderData(data);

    const newAction = {
      type: "add",
      path: `src/components/${
        data.location ? data.location + "/" : ""
      }${baseFolder}{{properCase componentName}}/{{properCase componentName}}.stories.tsx`,
      templateFile: "generators/component/Component.stories.tsx.hbs",
    };
    return data.storybook ? [...actions, newAction] : actions;
  },
};

module.exports = {
  newComponent,
};
