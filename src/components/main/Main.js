import React from "react";
import Missions from "./Missions";
import Images from "./Images";
import Weather from "./Weather";

function Main() {
  return (
    <div className="grid-item-main grid-item-home">
      <Images />
      <Weather />
      <Missions />
    </div>
  );
}

export default Main;
