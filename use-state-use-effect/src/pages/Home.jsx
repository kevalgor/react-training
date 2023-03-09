import React, { Fragment, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  const [count, incrementCount] = useState(0);
  const increment = () => {
    incrementCount((prevCount) => prevCount + 1);
  };
  useEffect(() => {
    console.log("hi");
  }, [count]);
  return (
    <Fragment>
      <Navbar />
      <h4>Count: {count}</h4>
      <button onClick={() => increment()}>+1</button>
      <Footer />
    </Fragment>
  );
}

// import React, { Component, Fragment, useEffect } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// export default class Home extends Component {
//   render() {
//     return (
//       <Fragment>
//         <Navbar />
//         Home
//         <Footer />
//       </Fragment>
//     );
//   }
// }
