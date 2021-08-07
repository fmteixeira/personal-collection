import React from "react";
// Components
// Context
// Hooks
// Pages
// Resources

interface Props {
  exampleProp: string;
}

const [FTName] = ({ exampleProp }: Props): JSX.Element => (
  <div>{exampleProp}</div>
);

export default [FTName];
