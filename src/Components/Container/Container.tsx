import React from "react";
import { Person } from "@typing/interfaces";
import Button from "@components/Button/Button";
import api from "@config/api.json";

export interface Props {
  name: string;
}

const Container = ({ name }: Props): JSX.Element => {
  const person: Person = {
    name,
  };

  const { url } = api;

  return (
    <div>
      <Button exampleProp={person.name + url} />
    </div>
  );
};

export default Container;
