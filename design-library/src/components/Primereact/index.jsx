import React, { useState } from "react";
import { Knob } from "primereact/knob";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
//icons
import "primeicons/primeicons.css";

const Primereact = () => {
  const [value, setValue] = useState(40);

  return (
    <>
      <h4>Primereact knob</h4>
      <div style={{ margin: "auto", width: "100px" }}>
        <Knob
          value={value}
          strokeWidth={10}
          valueColor="#48d1cc"
          rangeColor="#708090"
          onChange={(e) => setValue(e.value)}
        />
      </div>
    </>
  );
};

export default Primereact;
