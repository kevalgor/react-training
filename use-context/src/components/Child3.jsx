import React, { useContext } from "react";
import { Name } from "../App";

const Child3 = () => {
  const { firstName, lastName } = useContext(Name);
  return (
    <div>
      <h1>
        Hello, myself {firstName} {lastName}
      </h1>
    </div>
  );
};

export default Child3;
