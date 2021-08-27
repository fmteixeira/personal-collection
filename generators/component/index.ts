import { NodePlopAPI } from "plop";

module.exports = (plop: NodePlopAPI) => {
  // module.exports = (plop) => {
  plop.setGenerator("Component Generator", {
    description: "Component Generator",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name:",
      },
      // {
      //   type: "confirm",
      //   name: "subcomponent",
      //   message: "First component ?",
      // },
      // {
      //   when: (response) => {
      //     return response.subcomponent;
      //   },
      //   type: "input",
      //   name: "folder",
      //   message: "Folder name in components: ",
      // },
      {
        type: "path",
        name: "folder",
        message: "Folder name in components: ",
      },
    ],
    actions: (data) => {
      const actions = [
        {
          type: "add",
          path: "src/components/{{properCase name}}/{{properCase name}}/index.ts",
          templateFile: "generators/component/index.ts.hbs",
        },
      ];

      if (data.subcomponent) {
        actions.push({
          type: "add",
          path: "src/components/{{folder}}/{{properCase name}}/{{properCase name}}.tsx",
          templateFile: "generators/component/Component.tsx.hbs",
        });
      }

      return actions;
    },
  });
};
