import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import MissionsData from "../MissionsData";

function Insight(props) {
  let thisMission = MissionsData.find(
    (item) => window.location.href.indexOf(item.url) > -1
  );
  useEffect(() => {
    props.setShowMainGrid(false);
  }, []);

  return (
    <div className="pos-rel">
      {/* <div className="mars2020page"></div> */}
      <Link to="/">
        <div
          className="btn-close"
          onClick={() => props.setShowMainGrid(true)}
        ></div>
      </Link>
      <div className="main-text">
        <h3 className="title-2em-mobile ta-center font-orbitron">
          {thisMission.name}
        </h3>
        <p>
          <strong>Name:</strong> {thisMission.name}
        </p>
        <p>
          <strong>Mission status:</strong> {thisMission.missionStatus}
        </p>
        <p>
          <strong>Launch date:</strong> {thisMission.launched}
        </p>
        <p>
          <strong>Launch site:</strong> {thisMission.launchSite}
        </p>
        <p>
          <strong>Instruments:</strong>
          {thisMission.instruments.map((inst, index) => (
            <li key={index}>{inst}</li>
          ))}
        </p>
        <div>
          <strong>Overview:</strong> {thisMission.overview}
        </div>
      </div>
    </div>
  );
}

export default Insight;
