/*parte Vale
name, model, length, manufacturer, crew, passengers, vehicle_class, films


*/
fetch("https://swapi.dev/api/vehicles/")
.then(response => response.json())
.then(data => {
    console.log(data.results); // array di veicoli
  })
vehicles = {
    "name" : "https://swapi.dev/api/vehicles/name", 
    "model" : "https://swapi.dev/api/vehicles/model",
    "length" : "https://swapi.dev/api/vehicles/length",
    "manufacturer" : "https://swapi.dev/api/vehicles/manufacturer",
    "crew" : "https://swapi.dev/api/vehicles/crew",
    "passengers" : "https://swapi.dev/api/vehicles/passengers",
    "vehicle_class" : "https://swapi.dev/api/vehicles/vehicle_class",
    "films" : {
                "name" : "https://swapi.dev/api/vehicles/films/name"
              }
}