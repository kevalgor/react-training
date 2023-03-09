import React from "react";
import { Qualification, Technology } from "../App";
import Child3 from "./Child3";

const Child2 = () => {
  return (
    <div>
      <Qualification.Consumer>
        {(education) => {
          return (
            <Technology.Consumer>
              {(technology) => {
                return (
                  <h1>
                    {technology}, {education}
                  </h1>
                );
              }}
            </Technology.Consumer>
          );
        }}
      </Qualification.Consumer>
      <Child3 />
    </div>
  );
};

export default Child2;
