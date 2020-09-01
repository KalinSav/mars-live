import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import TransitionsContext from "../../TransitionsContext";

function MissionsExpanded(props) {
  const { setShowMainGrid } = useContext(TransitionsContext);

  useEffect(() => {
    setShowMainGrid(false);
  }, [setShowMainGrid]);

  return (
    <div className="pos-rel">
      {props.data.url === "mars2020" ? (
        <div className="mars2020page"></div>
      ) : (
        ""
      )}
      <Link to="/">
        <div className="btn-close" onClick={() => setShowMainGrid(true)}></div>
      </Link>
      <div className="main-text">
        <h3 className="ta-center font-orbitron">{props.data.name}</h3>
        <p>
          <strong>Name:</strong> {props.data.name}
        </p>
        <p>
          <strong>Mission status:</strong> {props.data.missionStatus}
        </p>
        <p>
          <strong>Launch date:</strong> {props.data.launched}
        </p>
        <p>
          <strong>Launch site:</strong> {props.data.launchSite}
        </p>
        <p>
          <strong>Instruments:</strong>
          {props.data.instruments.map((inst, index) => (
            <li key={index}>{inst}</li>
          ))}
        </p>
        <div>
          <strong>Overview:</strong> {props.data.overview}
        </div>
      </div>
    </div>
  );
}

export default MissionsExpanded;
