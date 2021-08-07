import React from "react";
// Components
// Context
// Hooks
// Pages
// Resources

export interface Props {
  exampleProp: string;
}

const Button = ({ exampleProp }: Props): JSX.Element => (
  <div>{exampleProp}</div>
);

export default Button;
