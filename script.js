// Set-up
var latlngs=[];
var polyline;

// Define the map centered on Calgary
var map = L.map('map').setView([51.039439, -114.054339], 11);

// Add the basemap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

map.on('click', function(e){
    var coord = e.latlng;
    var lat = coord.lat;
    var lng = coord.lng;
    
    latlngs = latlngs.concat([[lat, lng]]);
    console.log(latlngs);
    
    if (latlngs.length > 1){
        draw(latlngs);
    }
    
    //draw(latlngs);
    });

/*
function startdrawing(){
    console.log("start drawing");
    map.on('click', function(e){
        var coord = e.latlng;
        var lat = coord.lat;
        var lng = coord.lng;
        
        latlngs = latlngs.concat([[lat, lng]]);
        console.log(latlngs);
        
        if (latlngs.length > 1){
            draw(latlngs);
        }
        
        //draw(latlngs);
        });

}
*/

function draw(latlngs){
    polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);

    // zoom the map to the polyline
    map.fitBounds(polyline.getBounds());
}

function simplified(latlngs){
    console.log("simplifying lines");
    var geojson = turf.polygon([latlngs]);
    var options = {tolerance: 0.01, highQuality: false};
    var simplified = turf.simplify(geojson, options);
}