import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const init = useSelector((state) => state.changeCart);
  console.log("init", init);
  return <div>Home</div>;
};

export default Home;
