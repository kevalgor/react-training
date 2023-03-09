import Child1 from "./components/Child1";
import "./App.css";
import { createContext } from "react";

const Name = createContext();
const Qualification = createContext();
const Technology = createContext();

const App = () => {
  const dataObj = {
    firstName: "Keval",
    lastName: "Gor",
  };
  const education = "Computer Engineer";
  const technology = "NodeJS";
  return (
    <div className="App">
      <Name.Provider value={dataObj}>
        <Qualification.Provider value={education}>
          <Technology.Provider value={technology}>
            <Child1 />
          </Technology.Provider>
        </Qualification.Provider>
      </Name.Provider>
    </div>
  );
};

export default App;
export { Name, Qualification, Technology };
