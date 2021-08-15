import React from "react";
import Button from "@components/Button/Button";
import { Person } from "@typing/interfaces";

export interface Props {
  name: string;
}

const Container = ({ name }: Props): JSX.Element => {
  const person: Person = {
    name,
  };

  return (
    <div>
      <Button exampleProp={person.name} />
    </div>
  );
};

export default Container;
