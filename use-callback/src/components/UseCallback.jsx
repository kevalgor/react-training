// import React, { useState } from "react";
// import AddItem from "./AddItem";

// const UseCallback = () => {
//   const [count, setCount] = useState(0);
//   const [items, setItem] = useState([]);

//   const increment = () => {
//     setCount((prevCount) => prevCount + 1);
//   };

//   const addItem = () => {
//     setItem((prevItem) => [...prevItem, `new Item`]);
//   };

//   return (
//     <div>
//       <AddItem items={items} addItem={addItem} />
//       <hr />
//       <div>
//         Count: {count}
//         <button onClick={increment}>+1</button>
//       </div>
//     </div>
//   );
// };

// export default UseCallback;

import React, { useState, useCallback } from "react";
import AddItem from "./AddItem";

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [items, setItem] = useState([]);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const addItem = useCallback(() => {
    setItem((prevItem) => [...prevItem, "new Item"]);
  }, []);

  return (
    <div>
      <AddItem items={items} addItem={addItem} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+1</button>
      </div>
    </div>
  );
};

export default UseCallback;
