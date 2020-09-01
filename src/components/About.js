import * as React from "react";
import { Link } from "react-router-dom";
import TransitionsContext from "../TransitionsContext";

function About() {
  const { setShowMainGrid } = React.useContext(TransitionsContext);

  React.useEffect(() => {
    setShowMainGrid(false);
  }, [setShowMainGrid]);

  return (
    <div className="pos-rel">
      {/* <div className="mars2020page"></div> */}
      <Link to="/">
        <div className="btn-close" onClick={() => setShowMainGrid(true)}></div>
      </Link>
      <div className="main-text">
        <h3 className="title-2em-mobile ta-center font-orbitron">About</h3>
        <div>
          This website is a small project that contains information about Mars
          and about some of the NASA missions to Mars.
        </div>
        <ul>
          <li>
            This project was made with <strong>React 16.12</strong> and with{" "}
            <strong>React Router</strong> for navigation between the pages.
          </li>
          <li>
            The structure of the page has been laid out using{" "}
            <strong>CSS Grid</strong>.
          </li>
          <li>
            Styling has been applied using <strong>Sass</strong> with the
            creation of variables, mixins, nesting of styles and the use of
            partials. <strong>JavaScript ES6</strong> animates switching between
            different subpages.
          </li>
          <li>
            The <strong>responsive design</strong> is tablet and mobile friendly
            and works slightly differently on smaller screens, with fewer
            animations and a more compact design
          </li>
        </ul>
        <div>
          There are three sections on the main page which when hovered show
          basic information about the following:
        </div>
        <div>
          <ul>
            <li>
              Current atmospheric conditions at Elysium Planitia, the area where
              the InSight mission has landed
            </li>
            <li>A list of NASA missions to Mars</li>
            <li>Link to a page containing images of the surface of Mars</li>
          </ul>
        </div>

        <div>
          Each square will lead to a details page when clicked, providing
          further information. This is done by executing two things
          simultaneously:
          <ul>
            <li>
              Using <strong>React Router</strong>, the main homepage App.js is
              filled with all the Routes. Each box on the main screen as well as
              the items in the side menu contain the <strong>Links</strong> to
              the various subpages. Clicking on any Link will load that Route on
              the screen
            </li>
            <li>
              Clicking on any of the Links on the main page or Close buttons in
              the subpages triggers the <strong>useState React hook</strong>{" "}
              setShowMainGrid() which changes its state between true and false.
              This causes two different styles to be applied to elements on the
              grid - openAnimation or closeAnimation (the main difference being
              a change in visibility). This makes it possible to animate
              switching between different sections of the application.
            </li>
          </ul>
        </div>
        <div>
          <h4>Other React features used:</h4>
          <ul>
            <li>
              <strong>useEffect</strong> called only once when the expanded
              pages are rendered to assure that the main grid is hidden and the
              expanded screen is visible (calls{" "}
              <strong>setShowMainGrid(false)</strong>).
            </li>
            <li>
              <strong>useContext</strong> for state management - that way I was
              able to pass only the props I need into each component without
              having to go down the tree (no more prop drilling).
            </li>
            <li>
              <strong>useFetch</strong> is a custom hook which receives a URL
              and makes a fetch call in its own <strong>useEffect</strong> hook,
              and returns the response.
            </li>
          </ul>
        </div>

        <h3>Weather</h3>
        <div>
          To get the weather data, an <strong>API fetch call</strong> is made to{" "}
          <strong>api.nasa.gov/insight_weather/</strong> with the{" "}
          <strong>cusom React hook useFetch</strong> which saves the response
          data into a JSON and then displays it on the main page weather box and
          in further detail on the <em>/weather</em> subpage. While the call is
          being made, a loading spinner animation is in place of the data
          figures.
        </div>
        <h3>Images</h3>
        <div>
          To get a list of NASA images of Mars, <strong>useFetch</strong> was
          used to call <strong>api.nasa.gov/mars-photos/api/</strong> where an
          array containing the images data is created and used to render small
          thumbnail cards including some basic info that appear on the screen.
          Clicking each card updates the state in ImagesExpanded.js by setting
          it with the url of the image the user clicked on and a true/false
          value that renders the component OpenImage.js which simply loads a
          modal with that image. Clicking anywhere on the screen toggles the
          state back to false for openImage to close the modal with the image on
          screen.
        </div>
        <h3>Missions</h3>
        <div>
          All the data on the Mars missions is stored in MissionsData.js as
          JSON. This file is imported into App.js and used to create a list of
          the names of the missions in the Missions box on the main page, which
          lead to detailed subpages about the chosen mission.
        </div>
      </div>
    </div>
  );
}

export default About;
