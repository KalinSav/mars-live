# mars-live-react
Created with CodeSandbox


This website is a small project that contains information about Mars and about some of the NASA missions to Mars.

This project was made with React 16.12 and with React Router for navigation between the pages.

- The structure of the page has been laid out using CSS Grid.
- Styling has been applied using Sass with the creation of variables, mixins, nesting of styles and the use of partials. JavaScript ES6 animates switching between different subpages.
- The responsive design is tablet and mobile friendly and works slightly differently on smaller screens, with fewer animations and a more compact design

There are three sections on the main page which when hovered show basic information about the following:
- Current atmospheric conditions at Elysium Planitia, the area where the InSight mission has landed
- A list of NASA missions to Mars
- Link to a page containing images of the surface of Mars

Each square will lead to a details page when clicked, providing further information. This is done by executing two things simultaneously:

- Using React Router, the main homepage App.js is filled with all the Routes. Each box on the main screen as well as the items in the side menu contain the Links to the various subpages. Clicking on any Link will load that Route on the screen
- Clicking on any of the Links on the main page or Close buttons in the subpages triggers the useState React hook setShowMainGrid() which changes its state between true and false. This causes two different styles to be applied to elements on the grid - openAnimation or closeAnimation (the main difference being a change in visibility). This makes it possible to animate switching between different sections of the application.

Other React features used:
- useEffect called only once when the expanded pages are rendered to assure that the main grid is hidden and the expanded screen is visible (calls setShowMainGrid(false)).
- useContext for state management - that way I was able to pass only the props I need into each component without having to go down the tree (no more prop drilling).
- useFetch is a custom hook which receives a URL and makes a fetch call in its own useEffect hook, and returns the response.
Weather

To get the weather data, an API fetch call is made to api.nasa.gov/insight_weather/ with the cusom React hook useFetch which saves the response data into a JSON and then displays it on the main page weather box and in further detail on the /weather subpage. While the call is being made, a loading spinner animation is in place of the data figures.
Images

To get a list of NASA images of Mars, useFetch was used to call api.nasa.gov/mars-photos/api/ where an array containing the images data is created and used to render small thumbnail cards including some basic info that appear on the screen. Clicking each card updates the state in ImagesExpanded.js by setting it with the url of the image the user clicked on and a true/false value that renders the component OpenImage.js which simply loads a modal with that image. Clicking anywhere on the screen toggles the state back to false for openImage to close the modal with the image on screen.
Missions

All the data on the Mars missions is stored in MissionsData.js as JSON. This file is imported into App.js and used to create a list of the names of the missions in the Missions box on the main page, which lead to detailed subpages about the chosen mission.
