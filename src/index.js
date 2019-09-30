const mapboxgl = require("mapbox-gl");
let buildmarker = require('./marker');

mapboxgl.accessToken = 'pk.eyJ1IjoiYXZhcmVld2FycmljayIsImEiOiJjazE2a293eXUxNnZhM29yc3ZkaDBrdm1lIn0.k0eeG-m7gXynVvK6tamUYA';



const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

new mapboxgl.Marker().setLngLat([-87.6354, 41.8885]).addTo(map);

const marker = buildMarker("activity", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
marker.addTo(map);