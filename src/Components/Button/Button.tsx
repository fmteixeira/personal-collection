import React from "react";

export interface Props {
  exampleProp: string;
}

export const Button = ({ exampleProp }: Props): JSX.Element => (
  <button type="button" className="bg-red-400 font-bold border-2">
    {exampleProp}
  </button>
);
