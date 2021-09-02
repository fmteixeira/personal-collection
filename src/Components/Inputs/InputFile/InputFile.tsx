import React from "react";

export interface InputFileProps {
  exampleProp: string;
}

export const InputFile = ({ exampleProp }: InputFileProps): JSX.Element => (
  <button type="button" className="bg-red-400 font-bold border-2">
    {exampleProp}
  </button>
);
