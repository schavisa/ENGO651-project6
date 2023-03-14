# Simplification Drawing

ENGO 651 - Adv. Topics on Geospatial Technologies - Projects 6

By Adam and Chavisa

## Description
In this project, we create a web application called *Simplification Drawing* which user can be able to draw a polyline on a map and simplify it. For line simplification, user is allowed to set a tolerance number. The higher this number is, the smoother the line will be. Moreover, user can remove a polyline from the map and redraw it again.

## File Descript
For the frontend, [lab6.html]( https://github.com/schavisa/ENGO651-project6/blob/master/lab6.html) is an HTML file containing all resources we use which are [Leaftlet.js]( https://leafletjs.com/index.html#map-mouseeventtolatlng) and [Turf.js](https://turfjs.org/). All styling is contained in the [style.css]( https://github.com/schavisa/ENGO651-project6/blob/master/style.css) file.

For the backend, [script.js]( https://github.com/schavisa/ENGO651-project6/blob/master/script.js) is where we implemented libraries and created functionalities. Firstly, we deployed a basemap from [OpenStreetMap]( https://www.openstreetmap.org/#map=2/71.3/-96.8) by Leaflet.js. Start/Stop Drawing and Remove functions are also created from the same library. For the line simplification, the [simplify]( https://turfjs.org/docs/#simplify) function from Turf.js is called and user is allowed to set a tolerance for this functionality.
