const { component, selectFolder, selectMultipleFolder } = require("./options");

function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
    // return index === 0 ? match.toLowerCase() : match.toUpperCase();
    return match.toUpperCase();
  });
}

// Component

const newComponentFolderData = (data) => {
  const isSingular =
    data.selectMultipleFolder === selectMultipleFolder.options.singular;
  const baseFolder = isSingular ? "" : `${data.folderName}/`;
  return {
    isSingular,
    baseFolder,
  };
};

const newSubComponentFolderData = (data) => {
  const baseFolder = `${data.folderName}/`;
  return {
    baseFolder,
  };
};

const newComponent = {
  generateFolderIndex: (actions, data) => {
    const { isSingular } = newComponentFolderData(data);

    if (data.selectFolder === selectFolder.options.newFolder) {
      const newAction = {
        type: "add",
        path: `src/components/{{properCase folderName}}/index.ts`,
        templateFile: `generators/component/index.ts.hbs`,
      };
      return isSingular ? actions : [...actions, newAction];
    }
    if (data.selectFolder === selectFolder.options.hasFolder) {
      const newAction = {
        type: "append",
        unique: true,
        path: `src/components/{{properCase folderName}}/index.ts`,
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
      path: `src/components/${baseFolder}{{properCase componentName}}/{{properCase componentName}}.tsx`,
      templateFile: "generators/component/Component.tsx.hbs",
    };

    return [...actions, newAction];
  },
  generateComponentIndex: (actions, data) => {
    const { baseFolder } = newComponentFolderData(data);

    const newAction = {
      type: "add",
      path: `src/components/${baseFolder}{{properCase componentName}}/index.ts`,
      templateFile: `generators/component/index.ts.hbs`,
    };
    return [...actions, newAction];
  },
  generateStorybook: (actions, data) => {
    const { baseFolder } = newComponentFolderData(data);

    const newAction = {
      type: "add",
      path: `src/components/${baseFolder}{{properCase componentName}}/{{properCase componentName}}.stories.tsx`,
      templateFile: "generators/component/Component.stories.tsx.hbs",
    };
    return data.storybook ? [...actions, newAction] : actions;
  },
};

// Subcomponent

const newSubComponent = {
  generateComponent: (actions, data) => {
    const { baseFolder } = newSubComponentFolderData(data);

    const newAction = {
      type: "add",
      path: `src/components/${camelize(
        data.folderName
      )}/{{properCase componentName}}.tsx`,
      templateFile: "generators/component/Component.tsx.hbs",
    };

    return [...actions, newAction];
  },
};

module.exports = {
  newComponent,
  newSubComponent,
};
