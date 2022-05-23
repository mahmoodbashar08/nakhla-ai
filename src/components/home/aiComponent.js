import React from "react";
import "./home.scss";

function AiComponent() {
  return (
    <div className="AiComponent">
      <div className="Recommended">
        <p className="RecommendedPalm">
          Recommended
          <br /> Palm Trees
        </p>
        <label className="RecommendedNumber">12</label>
      </div>
      <div className="ConcentrationDiv">
        <div className="ConcentrationAi">
          <p>
            CO2
            <br />
            Concentration
          </p>
        </div>
        <label className="ConcentrationLableNumber">140</label>
      </div>
    </div>
  );
}

export default AiComponent;
