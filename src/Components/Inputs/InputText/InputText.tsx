import React from "react";

export interface InputTextProps {
  exampleProp: string;
}

export const InputText = ({ exampleProp }: InputTextProps): JSX.Element => (
  <button type="button" className="bg-red-400 font-bold border-2">
    {exampleProp}
  </button>
);
