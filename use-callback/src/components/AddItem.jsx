import React, { memo } from "react";

const AddItem = ({ items, addItem }) => {
  console.log("child component render");
  return (
    <div>
      <h3>Items list</h3>
      {items.map((item, index) => {
        return <p key={index}>{item + index}</p>;
      })}
      <button onClick={addItem}>add Item</button>
    </div>
  );
};

export default memo(AddItem);
