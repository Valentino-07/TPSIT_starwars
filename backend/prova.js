/*parte Vale
name, model, length, manufacturer, crew, passengers, vehicle_class, films
*/

fetch("https://swapi.dev/api/vehicles/")
.then(response => response.json())
.then(data => {
    console.log(data.results); // array di veicoli
  })
  
