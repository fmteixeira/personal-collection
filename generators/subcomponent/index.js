module.exports = function (plop) {
  plop.setGenerator("test", {
    description: "Component Generator",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name:",
      },
      {
        type: "confirm",
        name: "subcomponent",
        message: "Is this a subcomponent ?",
      },
      {
        when: function (response) {
          return response.subcomponent;
        },
        type: "input",
        name: "folder",
        message: "Folder name in components: ",
      },
    ],
    actions: function (data) {
      const actions = [
        {
          type: "add",
          path: "src/components/{{folder}}/{{properCase name}}/index.ts",
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
