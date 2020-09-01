import * as React from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner";
import TransitionsContext from "../../TransitionsContext";

function Weather() {
  const {
    latestSol,
    openAnimation,
    closeAnimation,
    showContentPage,
    setShowContentPage,
    weatherData,
    weatherLoading,
    showMainGrid
  } = React.useContext(TransitionsContext);

  return (
    <div
      className="grid-item-main grid-item-weather"
      style={
        window.innerWidth > 1220
          ? showMainGrid
            ? openAnimation
            : closeAnimation
          : { opacity: 1 }
      }
    >
      <div
        className="weather-box"
        onMouseEnter={() =>
          setShowContentPage((currentState) => ({
            ...currentState,
            weather: true
          }))
        }
        onMouseLeave={() =>
          setShowContentPage((currentState) => ({
            ...currentState,
            weather: false
          }))
        }
      >
        <Link
          to="/weather"
          onClick={() => {
            setShowContentPage((currentState) => ({
              ...currentState,
              weather: false
            }));
          }}
        >
          <div className="weather-box-title">weather</div>
          <div
            style={
              window.innerWidth > 1220
                ? showContentPage.weather
                  ? openAnimation
                  : closeAnimation
                : { opacity: 1 }
            }
            className="weather-data"
          >
            <div className="weather-data-location">at Elysium Planitia</div>
            <br />
            <br />
            <div className="weather-data-stats">
              Avg. temperature:{" "}
              <strong>
                <span id="weather-temperature">
                  {weatherLoading ? (
                    <LoadingSpinner />
                  ) : latestSol ? (
                    weatherData[latestSol].AT.av
                  ) : (
                    <span style={{ color: "#fe5623" }}>Error</span>
                  )}
                </span>
              </strong>
            </div>
            <div className="weather-data-stats">
              Humidity:{" "}
              <strong>
                <span id="weather-humidity">
                  {" "}
                  {weatherLoading ? (
                    <LoadingSpinner />
                  ) : latestSol ? (
                    weatherData[latestSol].HWS.av
                  ) : (
                    <span style={{ color: "#fe5623" }}>Error</span>
                  )}
                </span>
              </strong>
            </div>
            <div className="weather-data-stats">
              Wind direction:{" "}
              <strong>
                <span id="weather-wind-speed">
                  {" "}
                  {weatherLoading ? (
                    <LoadingSpinner />
                  ) : latestSol ? (
                    weatherData[latestSol].WD.most_common.compass_point +
                    ". " +
                    weatherData[latestSol].WD.most_common.compass_degrees
                  ) : (
                    <span style={{ color: "#fe5623" }}>Error</span>
                  )}
                </span>
              </strong>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Weather;
