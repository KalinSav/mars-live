import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import WeatherPrevDaysBox from "./WeatherPrevDaysBox";
import LoadingSpinner from "../LoadingSpinner";
import TransitionsContext from "../../TransitionsContext";

function WeatherExpanded() {
  const {
    latestSol,
    latestSolData,
    weatherData,
    weatherLoading,
    setShowMainGrid
  } = useContext(TransitionsContext);

  const prevWeek = [];
  if (!weatherLoading && latestSol) {
    weatherData.sol_keys.forEach((key) => {
      let object = weatherData[key];
      object.Sol = key;
      if (key !== weatherData.sol_keys[6]) {
        prevWeek.push(object);
      }
    });
  }
  let renderPrevWeekBoxes = prevWeek.map((each, index) => (
    <WeatherPrevDaysBox data={each} key={index} />
  ));

  useEffect(() => {
    setShowMainGrid(false);
  }, [setShowMainGrid]);

  return (
    <div className="pos-rel">
      {/* <div className="mars2020page"></div> */}
      <Link to="/">
        <div className="btn-close" onClick={() => setShowMainGrid(true)}></div>
      </Link>
      <div className="main-text">
        <h3 className="title-2em-mobile ta-center font-orbitron">
          Latest Weather at Elysium Planitia
        </h3>
        <p className="weather-summary">
          InSight is taking daily weather measurements (temperature, wind,
          pressure) on the surface of Mars at Elysium Planitia, a flat, smooth
          plain near Mars’ equator.
        </p>
        <div className="ta-center-mobile">
          <div
            className={
              weatherLoading
                ? "weather-expanded-today-box-loading"
                : "weather-expanded-today-box"
            }
          >
            <div>
              Sol:{" "}
              <strong>
                {weatherLoading ? (
                  <LoadingSpinner />
                ) : latestSol ? (
                  latestSol
                ) : (
                  <span style={{ color: "#fe5623" }}>Error</span>
                )}
              </strong>
            </div>
            <div>
              Date:{" "}
              <strong>
                {weatherLoading ? (
                  <LoadingSpinner />
                ) : latestSol ? (
                  latestSolData.Last_UTC.split("T")[0]
                ) : (
                  <span style={{ color: "#fe5623" }}>Error</span>
                )}
              </strong>
            </div>
            <div>
              Temp H:{" "}
              <strong>
                {weatherLoading ? (
                  <LoadingSpinner />
                ) : latestSol ? (
                  latestSolData.AT.mx
                ) : (
                  <span style={{ color: "#fe5623" }}>Error</span>
                )}
              </strong>
            </div>
            <div>
              Temp L:{" "}
              <strong>
                {weatherLoading ? (
                  <LoadingSpinner />
                ) : latestSol ? (
                  latestSolData.AT.mn
                ) : (
                  <span style={{ color: "#fe5623" }}>Error</span>
                )}
              </strong>
            </div>
          </div>
        </div>

        <div className="ta-center-mobile">
          <h3>Last six days</h3>
          {weatherLoading ? <LoadingSpinner /> : renderPrevWeekBoxes}
        </div>
      </div>
    </div>
  );
}

export default WeatherExpanded;
