
// MAP VIEW - Create the map object with a center and zoom level.
//let map = L.map('mapid').setView([30,30], 10);

  

let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


//streets.addTo(map);

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

//create a base layer that holds both maps.
let baseMaps={
  Light: light,
  Dark: dark
};

let map = L.map('mapid', {
  center: [44.0,-80.0],
  zoom: 2,
  layers: [light]
});

L.control.layers(baseMaps).addTo(map);
//access toronto data in the json file
let torontoData = 'https://raw.githubusercontent.com/jerrimor/Mapping_Earthquakes/main/torontoRoutes.json'

//Create a style for the lines.
let myStyle = {
  color: "#ffffa1",
  weight: 2
}

//grabbing geoJSON data
d3.json(torontoData).then(function(data) {
  console.log(data);
  //creating a geoJSON layer with retrieved data.
  L.geoJSON(data, {
    style: myStyle
    }
  )
  .addTo(map);
});
// Add GeoJSON data via json file
/* let sanFranAirport =
{"type":"FeatureCollection","features":[{
  "type":"Feature",
  "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

//grabbing our GeoJSON data.
L.geoJSON(sanFranAirport), {
  
    //we turn each feature into a marker on the map.
     pointToLayer: function(feature, latlng) {
      console.log(feature); 
      // onEachFeature: function(feature, layer) {
        console.log(layer);
        layer.bindPopup();
      }
      //return L.marker(latlng)
      .bindPopup('<h2>' + feature.properties.city + '</h2>').addTo(map),
    };
 */