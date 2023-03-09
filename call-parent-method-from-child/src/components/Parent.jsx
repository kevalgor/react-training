import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <Child increment={increment} />
      {count}
    </div>
  );
};

export default Parent;
