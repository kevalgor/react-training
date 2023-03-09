import React from "react";

const List = ({ list, deleteItem }) => {
  return (
    <ol style={{ listStyle: "none", padding: "0 0" }}>
      {list.map((item, index) => (
        <div
          key={index}
          id={index}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <li>{item}</li>
          <button onClick={() => deleteItem(index)}>&#10060;</button>
        </div>
      ))}
    </ol>
  );
};

export default List;
