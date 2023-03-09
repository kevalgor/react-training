import React, { useState, useRef } from "react";

// const UseRef = () => {
//   //   const [count, setCount] = useState(0);
//   const [myData, setMyData] = useState("");

//   const dataObj = useRef(0);

//   useEffect(() => {
//     dataObj.current += 1;
//   });

//   console.log(dataObj);

//   return (
//     <div>
//       <input
//         type="text"
//         value={myData}
//         onChange={(e) => setMyData(e.target.value)}
//       />
//       <p>The number of times render: {dataObj.current}</p>
//     </div>
//   );
// };

const UseRef = () => {
  const [myData, setMyData] = useState("");

  const inputElement = useRef("");
  console.log(inputElement);

  const changeStyle = () => {
    inputElement.current.style.backgroundColor = "#46FE35";
    inputElement.current.focus();
  };

  return (
    <div>
      <input
        ref={inputElement}
        type="text"
        value={myData}
        onChange={(e) => setMyData(e.target.value)}
      />
      <button onClick={changeStyle}>Ok</button>
    </div>
  );
};

export default UseRef;
