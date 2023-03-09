import { useState } from "react";
import { Slider, Switch } from "antd";

const Antd = () => {
  const [disabled, setDisabled] = useState(false);
  const onChange = (checked) => {
    setDisabled(checked);
  };
  return (
    <>
      <div style={{ width: "250px", margin: "20px auto" }}>
        <h4>Antd slider</h4>
        <Slider defaultValue={30} disabled={disabled} />
        <Slider range defaultValue={[20, 50]} disabled={disabled} />
        Disabled: <Switch size="small" checked={disabled} onChange={onChange} />
      </div>
    </>
  );
};

export default Antd;
