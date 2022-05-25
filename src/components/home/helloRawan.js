import React from "react";
import "./home.scss";
import Logo from "../home/image/Illustration.png";
function HelloRawan() {
  return (
    <div className="HelloRawan">
      <div className="HiAndSee">
        <h3 className="HiRawan">Hello Rawan </h3>
        <p className="SeeYou">
          It’s good to see you again.
        </p>
      </div>
      <img className="Logo" src={Logo}></img>
    </div>
  );
}

export default HelloRawan;