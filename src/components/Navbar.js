import React from "react";
import TransitionsContext from "../TransitionsContext";

function Navbar() {
  const {
    showSideMenu,
    setShowSideMenu,
    setExpandMissionsSubmenu
  } = React.useContext(TransitionsContext);

  return (
    <div className="grid-item grid-item-navbar">
      <div className="site-logo">Mars Live</div>
      <div
        id="nav-menu"
        className={showSideMenu ? "nav-menu change" : "nav-menu"}
        onClick={() => {
          setExpandMissionsSubmenu(false);
          setShowSideMenu(!showSideMenu);
        }}
      >
        <div className="bar1" />
        <div className="bar2" />
        <div className="bar3" />
      </div>
    </div>
  );
}

export default Navbar;
