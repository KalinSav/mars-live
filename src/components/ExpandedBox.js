import React, { useContext } from "react";
import { Route } from "react-router-dom";
import About from "./About";
import WeatherExpanded from "./main/WeatherExpanded";
import MissionsExpanded from "./main/MissionsExpanded";
import ImagesExpanded from "./main/ImagesExpanded";
import MissionsData from "./main/MissionsData";
import TransitionsContext from "../TransitionsContext";

function ExpandedBox() {
  const { showMainGrid, openAnimation, closeAnimation } = useContext(
    TransitionsContext
  );

  const missionsRoutes = MissionsData.map((item, index) => {
    return (
      <Route
        exact
        path={"/missions/" + item.url}
        render={() => <MissionsExpanded data={item} />}
        key={index}
      />
    );
  });

  return (
    <div
      className="grid-item-main grid-item-expanded"
      style={
        window.innerWidth > 767
          ? !showMainGrid
            ? openAnimation
            : closeAnimation
          : { opacity: 1 }
      }
    >
      <div className="expanded-box">
        {missionsRoutes}
        <Route path="/weather" exact component={WeatherExpanded} />
        <Route path="/images" exact component={ImagesExpanded} />
        <Route path="/about" exact component={About} />
      </div>
    </div>
  );
}

export default ExpandedBox;
