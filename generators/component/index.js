const component = {
  message: "Select an action: ",
  options: {
    createComponent: "Create new component",
    createSubComponent: "Add subcomponent",
  },
};

const selectFolder = {
  message: "Select an option: ",
  options: {
    hasFolder: "Add to existing component folder",
    newFolder: "Create new folder",
  },
};

const selectMultipleFolder = {
  message: "Select folder type: ",
  options: {
    singular: "This folder will contain only this component",
    multiple: "This folder will contain multiple components",
  },
};

module.exports = (plop) => {
  plop.setGenerator("Component Generator", {
    description: "Component Generator",
    prompts: [
      // Global
      {
        type: "input",
        name: "componentName",
        message: "Component name:",
      },
      {
        type: "list",
        name: "component",
        message: component.message,
        choices: [
          component.options.createComponent,
          component.options.createSubComponent,
        ],
      },
      {
        type: "confirm",
        name: "storybook",
        message: "Generate Storybook ?",
      },
      // New Component
      {
        when: (response) => {
          return response.component === component.options.createComponent;
        },
        type: "list",
        name: "selectFolder",
        message: selectFolder.message,
        choices: [
          selectFolder.options.hasFolder,
          selectFolder.options.newFolder,
        ],
      },
      // New Component -> New Folder
      {
        when: (response) => {
          return (
            response.component === component.options.createComponent &&
            response.selectFolder === selectFolder.options.newFolder
          );
        },
        type: "list",
        name: "selectMultipleFolder",
        message: selectMultipleFolder.message,
        choices: [
          selectMultipleFolder.options.singular,
          selectMultipleFolder.options.multiple,
        ],
      },
      // New Component -> New Folder -> Multiple
      {
        when: (response) => {
          return (
            response.component === component.options.createComponent &&
            response.selectMultipleFolder ===
              selectMultipleFolder.options.multiple
          );
        },
        type: "input",
        name: "folderName",
        message: "Folder name: ",
      },
      // New Subcomponent
      {
        when: (response) => {
          return response.component === component.options.createSubComponent;
        },
        type: "confirm",
        name: "local",
        message: "Local subcomponent (no export) ?",
      },
      // New Component -> Has Folder || New Subcomponent
      {
        when: (response) => {
          return (
            (response.component === component.options.createComponent &&
              response.selectFolder === selectFolder.options.hasFolder) ||
            response.component === component.options.createSubComponent
          );
        },
        type: "input",
        name: "location",
        message:
          "Select folder in components (examples: 'TextInput', 'Inputs\\TextInput'): ",
      },
    ],
    /**
     * Data Params
     * componentName: string (component name)
     * component: component.options (new component / new subcomponent)
     * storybook: boolean (generate storybook)
     * selectFolder: selectFolder.options (has folder / create new folder)
     * selectMultipleFolder: selectMultipleFolder.options (singular component folder / multiple component folder)
     * folderName: string (folder name)
     * location?: string (folder path)
     */
    actions: (data) => {
      const actions = [];

      // New Component
      if (data.component === component.options.createComponent) {
        // if new folder
        if (data.selectFolder === selectFolder.options.newFolder) {
          const isSingular =
            data.selectMultipleFolder === selectMultipleFolder.options.singular;
          const baseFolder = isSingular ? "" : `${data.folderName}/`;

          // Folder index
          if (!isSingular) {
            actions.push({
              type: "add",
              path: `src/components/${
                data.location ? data.location + "/" : ""
              }{{properCase folderName}}/index.ts`,
              templateFile: `generators/component/index.ts.hbs`,
            });
          }
          // Component
          actions.push({
            type: "add",
            path: `src/components/${
              data.location ? data.location + "/" : ""
            }${baseFolder}{{properCase componentName}}/{{properCase componentName}}.tsx`,
            templateFile: "generators/component/Component.tsx.hbs",
          });
          // Component index
          actions.push({
            type: "add",
            path: `src/components/${
              data.location ? data.location + "/" : ""
            }${baseFolder}{{properCase componentName}}/index.ts`,
            templateFile: `generators/component/index.ts.hbs`,
          });
          // Storybook
          if (data.storybook) {
            actions.push({
              type: "add",
              path: `src/components/${
                data.location ? data.location + "/" : ""
              }${baseFolder}{{properCase componentName}}/{{properCase componentName}}.stories.tsx`,
              templateFile: "generators/component/Component.stories.tsx.hbs",
            });
          }
        }
        if (selectFolder === selectFolder.options.hasFolder) {
          // actions.push({
          //   type: "modify",
          //   path: `src/components/${
          //     data.location ? data.location + "/" : ""
          //   }{{properCase componentName}}/index.ts`,
          //   pattern: /(\/\/ IMPORT MODULE FILES)/g,
          //   templateFile: '$1\nexport * from "./{{camelCase name}}";',
          // });
        }
      }

      // New SubComponent
      if (data.component === component.options.createSubComponent) {
      }

      return actions;
    },
  });
};
