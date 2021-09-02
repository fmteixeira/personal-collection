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

module.exports = {
  component,
  selectFolder,
  selectMultipleFolder,
};
