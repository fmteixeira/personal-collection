import React from "react";

import { Button2 } from "@/components/Button2";
import api from "@/config/api.json";
import { Person } from "types/interfaces";

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
      <Button2 exampleProp={person.name + url} />
    </div>
  );
};

export default Container;
