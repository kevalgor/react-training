import React from "react";
import { Name } from "../App";

const Child3 = () => {
  return (
    <div>
      <Name.Consumer>
        {(name) => {
          return (
            <h1>
              Hello, myself {name.firstName} {name.lastName}
            </h1>
          );
        }}
      </Name.Consumer>
    </div>
  );
};

export default Child3;
