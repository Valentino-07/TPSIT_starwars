/*parte Vale
name, model, length, manufacturer, crew, passengers, vehicle_class, films
*/

fetch("https://swapi.dev/api/vehicles/")
.then(response => response.json())
.then(data => {
    console.log(data.results); // array di veicoli
  })

document.getElementById("btn1").addEventListener("click", () => mostraDettagliVeicolo("AT-AT"));
document.getElementById("btn2").addEventListener("click", () => mostraDettagliVeicolo("AT-ST"));
document.getElementById("btn3").addEventListener("click", () => mostraDettagliVeicolo("Sand Crawler"));
document.getElementById("btn4").addEventListener("click", () => mostraDettagliVeicolo("T-16 skyhopper"));
document.getElementById("btn5").addEventListener("click", () => mostraDettagliVeicolo("Snowspeeder"));
document.getElementById("btn6").addEventListener("click", () => mostraDettagliVeicolo(""));
document.getElementById("btn7").addEventListener("click", () => mostraDettagliVeicolo(""));
document.getElementById("btn8").addEventListener("click", () => mostraDettagliVeicolo(""));

let stringa="";

function mostraDettagliVeicolo(nome_veicolo){

}
//dobbiamo avere i dati del veicolo per mandarli a "dettagli.html"

<script>
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
      for(let i=0; i<results; i++){
        
      }
    }
    )
  });
</script>