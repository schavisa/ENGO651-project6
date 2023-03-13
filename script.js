// Set-up
var latlngs = [];
var polyline;

// Define the map centered on Calgary
var map = L.map('map').setView([51.039439, -114.054339], 11);

var pointsLayer = L.layerGroup();
map.addLayer(pointsLayer);

// Add the basemap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


function startdrawing() {
    console.log("start drawing");
    map.on('click', e => {
        var coord = e.latlng;
        var lat = coord.lat;
        var lng = coord.lng;
        
        latlngs = latlngs.concat([[lat, lng]]);
        
        //L.circleMarker([lat, lng], {radius: 2}).addTo(map);
        pointsLayer.addLayer(L.circleMarker([lat, lng], {radius: 2}));

        draw(latlngs);
    });
}


function stopdrawing() {
    console.log('stop drawing');
    map.off('click');
}


function remove() {
    latlngs = [];
    if (polyline) {
        polyline.remove(map);
        //pointsLayer.clearLayers();
        
    }
    pointsLayer.clearLayers();
    //pointsLayer = L.layerGroup;
}


function draw(latlngs, colour='red') {

    if (latlngs.length <= 1) return;

    if (polyline) {
        polyline.remove(map);  // Remove the old polyline
    }
    polyline = L.polyline(latlngs, {color: colour}).addTo(map);  // Add the new one

    // Zoom the map to the polyline
    map.fitBounds(polyline.getBounds());
}


function simplify() {
    var tol = document.getElementById('tol').value;
    if (tol == "" || isNaN(tol)) {
        tol = 0.004;
    }

    if (latlngs.length < 2) return;

    console.log("simplifying lines");
    var geojson = turf.lineString(latlngs);
    var options = {tolerance: tol, highQuality: false};
    var simplified = turf.simplify(geojson, options);
    latlngs = simplified.geometry.coordinates;
    draw(latlngs, colour='green');
    pointsLayer.clearLayers();
}