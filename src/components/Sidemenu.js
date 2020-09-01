import * as React from "react";
import TransitionsContext from "../TransitionsContext";

const MenuItems = () => {
  const {
    showSideMenu,
    openAnimation,
    closeAnimation,
    menuItems
  } = React.useContext(TransitionsContext);
  return (
    <div
      className="side-menu"
      style={showSideMenu ? openAnimation : closeAnimation}
    >
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default MenuItems;
