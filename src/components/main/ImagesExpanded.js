import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import OpenImage from "./OpenImage";
import LoadingSpinner from "../LoadingSpinner";
import TransitionsContext from "../../TransitionsContext";

function ImagesExpanded() {
  const [state, setState] = useState({ imageUrl: "", openImage: false });

  const { setShowMainGrid, imagesData, imagesLoading } = useContext(
    TransitionsContext
  );

  let renderImagesThumbnails = [];
  if (!imagesLoading) {
    renderImagesThumbnails = imagesData.photos.map((each, index) => (
      <div
        className="image-card"
        key={index}
        onClick={() =>
          setState({
            imageUrl: each.img_src.replace(/^http:\/\//i, "https://"),
            openImage: !state.openImage
          })
        }
      >
        <div
          className="image-card-background"
          style={{
            backgroundImage: `url(${each.img_src.replace(
              /^http:\/\//i,
              "https://"
            )})`
          }}
        ></div>
        <div className="image-card-text">
          <div>Sol: {each.sol}</div>
          <div>Earth Date: {each.earth_date}</div>
          <div>Rover: {each.rover.name}</div>
          <div>Camera: {each.camera.full_name}</div>
        </div>
      </div>
    ));
  }
  useEffect(() => {
    setShowMainGrid(false);
  }, [setShowMainGrid]);

  return (
    <div className="pos-rel">
      <Link to="/">
        <div className="btn-close" onClick={() => setShowMainGrid(true)}></div>
      </Link>
      <div className="main-text">
        <h3 className="ta-center font-orbitron">Images</h3>
        <div className="ta-center">
          {imagesLoading ? <LoadingSpinner /> : renderImagesThumbnails}
          {state.openImage ? (
            <OpenImage data={state} dataActions={setState} />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ImagesExpanded;
