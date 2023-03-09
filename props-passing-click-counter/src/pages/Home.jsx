import React, { useState, Fragment } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home(props) {
  const initialNumber = 0;
  const [count, findClickCount] = useState(() => {
    return initialNumber;
  });
  //   useEffect(() => {
  //     console.log("render useEffect");
  //   }, [count]);
  //   useEffect(() => {
  //     // Update the document title using the browser API
  //     document.title = `Clicked ${count} times`;
  //   });
  const setValue = (init) => {
    findClickCount((count) => count + init);
  };
  return (
    <Fragment>
      <Navbar />
      <h2>props: {props.friend.id}</h2>
      <h1>Click count: {count}</h1>
      <button
        onClick={() => {
          findClickCount(initialNumber);
        }}
      >
        reset
      </button>
      <button
        onClick={() => {
          setValue(1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setValue(-1);
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          setValue(+2);
        }}
      >
        +2
      </button>
      <Footer />
    </Fragment>
  );
}

// import React, { Component, Fragment } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// export default class home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }
//   setValue = (init) => {
//     // this.setState(
//     //   {
//     //     count: this.state.count + init,
//     //   },
//     //   () => console.log(this.state.count)
//     // );
//     this.setState(
//       (prevState) => ({
//         count: prevState.count + init,
//       }),
//       () => console.log(this.state.count)
//     );
//   };
//   render() {
//     return (
//       <Fragment>
//         <Navbar />
//         <h2>{this.props.friend.id}</h2>
//         <h1>Click count: {this.state.count}</h1>
//         <button
//           onClick={() => {
//             this.setState({ count: 0 });
//           }}
//         >
//           reset
//         </button>
//         <button
//           onClick={() => {
//             this.setValue(1);
//           }}
//         >
//           +1
//         </button>
//         <button
//           onClick={() => {
//             this.setValue(-1);
//           }}
//         >
//           -1
//         </button>
//         <button
//           onClick={() => {
//             this.setValue(+2);
//           }}
//         >
//           +2
//         </button>
//         <Footer />
//       </Fragment>
//     );
//   }
// }
