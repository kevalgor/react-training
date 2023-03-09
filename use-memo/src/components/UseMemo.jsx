import React, { useState, useMemo } from "react";

const UseMemo = () => {
  const [myNum, setMyNumber] = useState(0);
  const [show, setShow] = useState(true);
  const getValue = () => {
    return setMyNumber(myNum + 1);
  };
  const countNumber = (num) => {
    console.log("number", num);
    for (let i = 0; i <= 1000000000; i++) {}
    return num;
  };
  const checkData = useMemo(() => {
    return countNumber(myNum);
  }, [myNum]);
  // const checkData = countNumber(myNum);
  return (
    <div>
      <button onClick={getValue} style={{ backgroundColor: "#AA340F" }}>
        Counter
      </button>
      <p>My new number: {checkData}</p>
      <button onClick={() => setShow(!show)}>
        {show ? "Clicked" : "Click"}
      </button>
    </div>
  );
};

export default UseMemo;
