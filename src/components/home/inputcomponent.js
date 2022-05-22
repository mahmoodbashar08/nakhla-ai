import React from "react";
import "./home.scss";
import { Input } from "antd";
function InputComponent() {
  return (
    <div className="InputComponent">
      <div className="EnterNumber">
        <p className="EnterNumberP">
          Enter Number <br />
          Of Palm Trees
        </p>
        <Input placeholder="10" type="number" className="Input" />
      </div>
      <div className="Concentration">
        <p className="ConcentrationP">
          CO2 <br />
          Concentration
        </p>
        <label className="ConcentrationLable">350</label>
      </div>
    </div>
  );
}

export default InputComponent;
