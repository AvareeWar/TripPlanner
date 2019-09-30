const mapbox = require('mapbox-gl');

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};


function buildMarker(type, coords){
    const typeImg=new Image();
    typeImg.src=iconURLs[type];
    const marker=new mapbox.Marker(typeImg).setLngLat(coords);
    return marker;

}


module.exports = buildMarker