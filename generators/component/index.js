const { newComponent } = require("./functions");
const { component, selectFolder, selectMultipleFolder } = require("./options");
const { validateName } = require("./validators");

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
        validate: (input) => validateName(input),
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
        name: "folderName",
        message:
          "Select folder in components (examples: 'TextInput', 'Inputs\\TextInput'): ",
        validate: (input) => validateName(input),
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
      }

      return actions;
    },
  });
};
