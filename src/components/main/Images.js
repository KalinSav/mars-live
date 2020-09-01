import React from "react";
import { Link } from "react-router-dom";
import TransitionsContext from "../../TransitionsContext";

function Images() {
  const {
    openAnimation,
    closeAnimation,
    setShowContentPage,
    showMainGrid
  } = React.useContext(TransitionsContext);
  return (
    <div
      className="grid-item-main grid-item-images"
      style={
        window.innerWidth > 800
          ? showMainGrid
            ? openAnimation
            : closeAnimation
          : { opacity: 1 }
      }
    >
      <Link to="/images">
        <div
          className="images-box"
          onMouseEnter={() =>
            setShowContentPage((currentState) => ({
              ...currentState,
              images: true
            }))
          }
          onMouseLeave={() =>
            setShowContentPage((currentState) => ({
              ...currentState,
              images: false
            }))
          }
        >
          <div className="mainbox-1-innerox-img" />
          <div className="images-box-title">images</div>
        </div>
      </Link>
    </div>
  );
}

export default Images;
