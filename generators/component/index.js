const { validateName, validateFolder } = require("../utils/validators");
const { newComponent, newSubComponent } = require("./utils/functions");
const {
  component,
  selectFolder,
  selectMultipleFolder,
} = require("./utils/options");
const { camelize } = require("../utils/functions");

module.exports = (plop) => {
  plop.setGenerator("Component Generator", {
    description: "Component Generator",
    prompts: [
      // Global
      {
        type: "input",
        name: "componentName",
        message: "Component name:",
        validate: (input) => validateName(input),
      },
      {
        type: "confirm",
        name: "sharedComponent",
        message: "Is this component used by multiple features ?",
      },
      {
        when: (response) => {
          return !response.sharedComponent;
        },
        type: "input",
        name: "featureName",
        message: "Feature name:",
        validate: (input) => validateName(input),
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
      // New Component
      {
        when: (response) => {
          return response.component === component.options.createComponent;
        },
        type: "confirm",
        name: "storybook",
        message: "Generate Storybook ?",
      },
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
        validate: (input) => validateName(input),
      },
      // New Component -> Has Folder
      {
        when: (response) => {
          return (
            response.component === component.options.createComponent &&
            response.selectFolder === selectFolder.options.hasFolder
          );
        },
        type: "input",
        name: "folderName",
        message: "Select folder in components (examples: 'Inputs')",
        validate: (input) => validateName(input),
      },
      // New Subcomponent
      {
        when: (response) => {
          return response.component === component.options.createSubComponent;
        },
        type: "input",
        name: "folderName",
        message:
          "Select folder in components (examples: 'Container', 'Inputs/TextInput'): ",
        validate: (input) => validateFolder(input),
      },
    ],
    /**
     * Data Params
     * componentName: string (component name)
     * sharedComponent: boolean (true = shared component, false = feature component)
     * featureName?: string (name of the feature that the component belongs to)
     * component: component.options (new component / new subcomponent)
     * storybook: boolean (generate storybook)
     * selectFolder: selectFolder.options (has folder / create new folder)
     * selectMultipleFolder: selectMultipleFolder.options (singular component folder / multiple component folder)
     * folderName: string (folder name)
     * nestedFolderName: string (nested folder name)
     */
    actions: (data) => {
      let actions = [];

      // New Component
      if (data.component === component.options.createComponent) {
        // Folder index
        actions = newComponent.generateFolderIndex(actions, data);
        // Component
        actions = newComponent.generateComponent(actions, data);
        // Component index
        actions = newComponent.generateComponentIndex(actions, data);
        // Storybook
        actions = newComponent.generateStorybook(actions, data);
      }

      // New SubComponent
      if (data.component === component.options.createSubComponent) {
        actions = newSubComponent.generateComponent(actions, data);
      }

      return actions;
    },
  });
};
