// Add console.log to check to see if our code is working.
//console.log("working");

// MAP VIEW - Create the map object with a center and zoom level.
//let map = L.map('mapid').setView([30,30], 10);

// LINE - Coordinates for each point to be used in the line.
/* let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
  ];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "yellow"
  }).addTo(map);
 */
// We create the tile layer that will be the background of our map.

//  Add a marker to the map for Los Angeles, California.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);
//add a circle marker

// Get data from cities.js
/* let cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
        radius : city.population/100000,
        color: 'orange',
        fillColor: ''
    })
    .bindPopup('<h2>' + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
    .addTo(map);
}); */
  

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
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
  Street: streets,
  Dark: dark
};

let map = L.map('mapid', {
  center: [30,30],
  zoom: 2,
  layers: [streets]
});

L.control.layers(baseMaps).addTo(map);
//access json data via url
let airportData = "https://raw.githubusercontent.com/jerrimor/Mapping_Earthquakes/main/majorAirports.json"

//grabbing geoJSON data
d3.json(airportData).then(function(data) {
  console.log(data);
  //creating a geoJSON layer with retrieved data.
  L.geoJSON(data).addTo(map);
})
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