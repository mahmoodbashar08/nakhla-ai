import React from "react";
import "./home.scss";
import Clock from "react-live-clock";
import Date from "react-live-clock";
function TimeComponent() {
  return (
    <div className="TimeComponent">
      <p className="Time">
        <h4 className="TimeNow">Time Now</h4>
        <Clock
          className="LiveTime"
          format={"HH:mm:ss"}
          ticking={true}
          timezone={"GMT+3"}
        />
      </p>
      <p className="date">
        <h4 className="DateNow">Date Now</h4>
        <Date
          className="LiveDate"
          format={"D:MM:YYYY"}
          ticking={true}
          timezone={"GMT+3"}
        />
      </p>
    </div>
  );
}

export default TimeComponent;
