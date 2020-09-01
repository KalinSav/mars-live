import React, { useState } from "react";
import useFetch from "./useFetch";
import { BrowserRouter, Route, Link } from "react-router-dom";
// import "./styles.css";
import "./scss/style.scss";
import Sidemenu from "./components/Sidemenu";
import Main from "./components/main/Main";
import Navbar from "./components/Navbar";
import MissionsData from "./components/main/MissionsData";
import ExpandedBox from "./components/ExpandedBox";
import TransitionsContext from "./TransitionsContext";

export default function App() {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [showContentPage, setShowContentPage] = useState({
    images: false,
    weather: false,
    missions: false
  });

  let openAnimation = {
    visibility: "visible",
    marginTop: "0px",
    opacity: 1,
    transition: "all 0.25s ease-out",
    height: "100%"
  };

  let closeAnimation = {
    visibility: "hidden",
    // marginTop: "-40px",
    opacity: 0,
    transition: "all 0.25s ease-in",
    height: 0
  };

  const [showMainGrid, setShowMainGrid] = useState(true);
  const [expandMissionsSubmenu, setExpandMissionsSubmenu] = useState(false);

  // images
  const { data: imagesData, loading: imagesLoading } = useFetch(
    "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-5-18&api_key=1hpqGPEj5b1FEqYb6jrJT0mKjMfJBED9dLTsMfEh"
  );
  // let imagesLoading = true;
  // let imagesData = {};

  // weather
  // const { data: weatherData, loading: weatherLoading } = useFetch(
  //   "https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0"
  // );

  let weatherLoading = true;
  let weatherData = {};
  let latestSol = weatherLoading
    ? ""
    : weatherData.sol_keys[weatherData.sol_keys.length - 1];
  let latestSolData = weatherLoading ? "" : weatherData[latestSol];

  let missionsSubmenuItems = MissionsData.map((mission, index) => (
    <div key={index}>
      <Link
        to={"/missions/" + mission.url}
        replace
        onClick={() => {
          setShowSideMenu(false);
          setShowContentPage((currentState) => ({
            ...currentState,
            missions: false
          }));
        }}
      >
        {mission.url}
      </Link>
    </div>
  ));

  let menuItems = [
    <Link
      to="/about"
      onClick={() => {
        setShowMainGrid(false);
        setShowSideMenu(false);
      }}
    >
      About
    </Link>,
    <Link
      to="/"
      onClick={() => {
        setShowMainGrid(true);
        setShowSideMenu(false);
      }}
    >
      Main
    </Link>,
    <Link
      to="/images"
      onClick={() => {
        setShowMainGrid(false);
        setShowSideMenu(false);
      }}
    >
      Images
    </Link>,
    <div
      className="cursor-pointer"
      onClick={() => setExpandMissionsSubmenu(!expandMissionsSubmenu)}
    >
      Missions
      <div
        className="missions-submenu"
        style={expandMissionsSubmenu ? openAnimation : closeAnimation}
      >
        {missionsSubmenuItems}
      </div>
    </div>,
    <Link
      to="/weather"
      onClick={() => {
        setShowMainGrid(false);
        setShowSideMenu(false);
      }}
    >
      Weather
    </Link>
  ];

  return (
    <BrowserRouter>
      <main className="grid-container">
        <TransitionsContext.Provider
          value={{
            showMainGrid,
            setShowMainGrid,
            showSideMenu,
            setShowSideMenu,
            showContentPage,
            setShowContentPage,
            openAnimation,
            closeAnimation,
            menuItems,
            weatherData,
            weatherLoading,
            imagesData,
            imagesLoading,
            expandMissionsSubmenu,
            setExpandMissionsSubmenu,
            latestSol,
            latestSolData
          }}
        >
          <Navbar />
          <Route exact path="/" component={Main} />
          <ExpandedBox />
          <Sidemenu />
        </TransitionsContext.Provider>
      </main>
    </BrowserRouter>
  );
}
