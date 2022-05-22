import React from "react";
import "./home.scss";

function AiComponent() {
  return (
    <div className="AiComponent">
      <div className="Recommended">
        <p className="RecommendedPalm">
          Recommended Palm <br />
          Trees
        </p>
        <label className="RecommendedNumber">12</label>
      </div>
      <div className="Concentration">
        <p>
          CO2 <br /> Concentration
        </p>
      </div>
      <label>140</label>
    </div>
  );
}

export default AiComponent;
