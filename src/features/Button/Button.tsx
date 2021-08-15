import React from "react";
// import styles from "./Button.module.css";
// Components
// Context
// Hooks
// Pages
// Resources

export interface Props {
  exampleProp: string;
}

const Button = ({ exampleProp }: Props): JSX.Element => (
  <button type="button" className="bg-red-400 font-bold border-2">
    {exampleProp}
  </button>
);

export default Button;
