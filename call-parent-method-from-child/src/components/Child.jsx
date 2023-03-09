import React from "react";

const Child = ({ increment }) => {
  return (
    <div>
      <button onClick={increment}>+1</button>
    </div>
  );
};

export default Child;
