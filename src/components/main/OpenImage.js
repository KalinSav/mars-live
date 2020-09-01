import React from "react";

function OpenImage(props) {
  return (
    <div
      className="opened-image-modal"
      onClick={() => props.dataActions({ openImage: false })}
    >
      <div className="opened-image">
        <img src={props.data.imageUrl} alt="" />
      </div>
    </div>
  );
}

export default OpenImage;
