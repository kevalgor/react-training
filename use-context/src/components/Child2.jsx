import React, { useContext } from "react";
import { Qualification, Technology } from "../App";
import Child3 from "./Child3";

const Child2 = () => {
  const technology = useContext(Technology);
  const education = useContext(Qualification);
  return (
    <div>
      <h1>
        {technology}, {education}
      </h1>
      <Child3 />
    </div>
  );
};

export default Child2;
