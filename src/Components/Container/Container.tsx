import React from "react";

import { Button } from "@/components/Button/";
import api from "@/config/api.json";
// import { Landing } from "@/features/Landing";
import { Person } from "@/types/interfaces";

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
      {/* <Landing /> */}
    </div>
  );
};

export default Container;
