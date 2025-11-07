/*parte Vale
name, model, length, manufacturer, crew, passengers, vehicle_class, films
*/

fetch("https://swapi.dev/api/vehicles/")
.then(response => response.json())
.then(data => {
    console.log(data.results); // array di veicoli
  })



document.getElementById("btn1").addEventListener("click", () => mostraDettagliVeicolo(""));
document.getElementById("btn2").addEventListener("click", () => mostraDettagliVeicolo(""));
document.getElementById("btn3").addEventListener("click", () => mostraDettagliVeicolo(""));
document.getElementById("btn4").addEventListener("click", () => mostraDettagliVeicolo(""));
document.getElementById("btn5").addEventListener("click", () => mostraDettagliVeicolo(""));
document.getElementById("btn6").addEventListener("click", () => mostraDettagliVeicolo(""));
document.getElementById("btn7").addEventListener("click", () => mostraDettagliVeicolo(""));
document.getElementById("btn8").addEventListener("click", () => mostraDettagliVeicolo(""));




function mostraDettagliVeicolo(nome_veicolo){
  
}