import React, { useRef } from "react";

const Home = () => {
  const changeDivColor = useRef("White");
  const setDivColor = (color) => {
    changeDivColor.current.style.backgroundColor = color;
  };
  return (
    <div ref={changeDivColor}>
      <input type="radio" name="gender" onClick={() => setDivColor("Red")} />
      Red
      <input type="radio" name="gender" onClick={() => setDivColor("Green")} />
      Green
      <input type="radio" name="gender" onClick={() => setDivColor("Blue")} />
      Blue
    </div>
  );

  //   const [color, setColor] = useState("White");
  //   const setDivColor = (color) => {
  //     setColor(color);
  //   };
  //   const changeDivColor = {
  //     backgroundColor: color,
  //   };
  //   return (
  //     <div style={changeDivColor}>
  //       <input type="radio" name="gender" onClick={() => setDivColor("Red")} />
  //       Red
  //       <input type="radio" name="gender" onClick={() => setDivColor("Green")} />
  //       Green
  //       <input type="radio" name="gender" onClick={() => setDivColor("Blue")} />
  //       Blue
  //     </div>
  //   );
};

export default Home;
