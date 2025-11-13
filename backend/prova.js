/*parte Vale
name, model, length, manufacturer, crew, passengers, vehicle_class, films
*/
/*
fetch("https://swapi.dev/api/vehicles/")
.then(response => response.json())
.then(data => {
    console.log(data.results); // array di veicoli
  })

document.getElementById("btn1").addEventListener("click", () => mostraDettagliVeicolo("AT-AT"));
document.getElementById("btn2").addEventListener("click", () => mostraDettagliVeicolo("AT-ST"));
document.getElementById("btn3").addEventListener("click", () => mostraDettagliVeicolo("Sand Crawler"));
document.getElementById("btn4").addEventListener("click", () => mostraDettagliVeicolo("Sail barge"));
document.getElementById("btn5").addEventListener("click", () => mostraDettagliVeicolo("Snowspeeder"));
document.getElementById("btn6").addEventListener("click", () => mostraDettagliVeicolo("Storm IV Twin-Pod cloud car"));
document.getElementById("btn7").addEventListener("click", () => mostraDettagliVeicolo("TIE/LN starfighter"));
document.getElementById("btn8").addEventListener("click", () => mostraDettagliVeicolo("T-16 skyhopper"));
document.getElementById("btn9").addEventListener("click", () => mostraDettagliVeicolo("TIE bomber"));
document.getElementById("btn10").addEventListener("click", () => mostraDettagliVeicolo("X-34 landspeeder"));


let stringa="";

function mostraDettagliVeicolo(nome_veicolo){
  $(document).ready(function () {
    $.get("https://swapi.dev/api/vehicles/?page=1", function(data){
      stringa+="<table>";
      stringa+="<tr>";
      stringa+="<th>name<\/th>";
      stringa+="<th>model<\/th>";
      stringa+="<th>length<\/th>";
      stringa+="<th>manufacturer<\/th>";
      stringa+="<th>crew<\/th>";
      stringa+="<th>passengers<\/th>";
      stringa+="<th>vehicle_class<\/th>";
      stringa+="<th>films<\/th>";
      stringa+="<\/tr>";
      for(let i=0; i<data.results.length; i++){
        if(data.results[i].name===nome_veicolo){
          stringa+="<tr><\/tr>";
          stringa+="<td>"+data.results[i].name+"<\/td>";
          stringa+="<td>"+data.results[i].model+"<\/td>";
          stringa+="<td>"+data.results[i].length+"<\/td>";
          stringa+="<td>"+data.results[i].manufacturer+"<\/td>";
          stringa+="<td>"+data.results[i].crew+"<\/td>";
          stringa+="<td>"+data.results[i].passengers+"<\/td>";
          stringa+="<td>"+data.results[i].vehicle_class+"<\/td>";
          stringa+="<td>"+data.results[i].films+"<\/td>";
          stringa+="<\/tr>";
        }
      }
      $("#risultato").html(stringa);
    }
    )
  });
}
//dobbiamo avere i dati del veicolo per mandarli a "dettagli.html"
*/
