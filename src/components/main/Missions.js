import React from "react";
import { Link } from "react-router-dom";
import MissionsData from "./MissionsData";
import TransitionsContext from "../../TransitionsContext";

function Missions() {
  const {
    openAnimation,
    closeAnimation,
    showContentPage,
    setShowContentPage,
    showMainGrid
  } = React.useContext(TransitionsContext);
  return (
    <div
      className="grid-item-main grid-item-missions"
      style={
        window.innerWidth > 1220
          ? showMainGrid
            ? openAnimation
            : closeAnimation
          : { opacity: 1 }
      }
    >
      <div
        className="missions-box"
        onMouseEnter={() =>
          setShowContentPage((currentState) => ({
            ...currentState,
            missions: true
          }))
        }
        onMouseLeave={() =>
          setShowContentPage((currentState) => ({
            ...currentState,
            missions: false
          }))
        }
      >
        <div className="missions-box-title">missions</div>
        <div
          className="missions-list"
          style={
            window.innerWidth > 1220
              ? showContentPage.missions
                ? openAnimation
                : closeAnimation
              : { opacity: 1 }
          }
        >
          <ul>
            {MissionsData.map((mission, index) => (
              <li key={index}>
                <Link
                  to={"missions/" + mission.url}
                  onClick={() => {
                    setShowContentPage((currentState) => ({
                      ...currentState,
                      missions: false
                    }));
                  }}
                >
                  {mission.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Missions;
