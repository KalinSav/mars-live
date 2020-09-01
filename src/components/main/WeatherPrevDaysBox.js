import React from "react";

function WeatherPrevDaysBox(props) {
  return (
    <div className="weather-prev-days-box">
      <div>Sol: {props.data.Sol}</div>
      <div>{props.data.Last_UTC.split("T")[0]}</div>
      <div>High {props.data.AT.mx}</div>
      <div>Low {props.data.AT.mn}</div>
    </div>
  );
}

export default WeatherPrevDaysBox;
