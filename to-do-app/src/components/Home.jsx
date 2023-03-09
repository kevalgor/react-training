import React, { Fragment, useState } from "react";
import List from "./List";

const Home = () => {
  const [data, addData] = useState("");
  const [list, setList] = useState([]);
  // const inputElement = useRef("");
  // console.log(inputElement.current);
  // const addToDo = (value) => {
  //   addData(value);
  // };
  const addItemsToList = () => {
    // console.log("render");
    // console.log(typeof inputElement.current);
    // console.log(inputElement.current.value);
    // addData(inputElement.current.value);
    setList((prevToDo) => {
      // return [...prevToDo, inputElement.current.value];
      return [...prevToDo, data];
    });
    addData("");
    // addData("");
  };
  const deleteItem = (id) => {
    const modifiedList = list.filter((item, index) => {
      return index !== id;
    });
    setList(modifiedList);
    // list.splice(index, 1);
    // console.log(`myArray values: ${list}`);
  };
  return (
    <Fragment>
      <div>
        <h2>ToDo List</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addItemsToList();
          }}
        >
          <input
            // ref={inputElement}
            type="text"
            placeholder="add ToDo"
            value={data}
            // onChange={(e) => addToDo(e.target.value)}
            onChange={(e) => {
              addData(e.target.value);
            }}
          />
          <button type="submit">Add</button>
        </form>
        <List list={list} deleteItem={deleteItem} />
      </div>
    </Fragment>
  );
};

export default Home;
