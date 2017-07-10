
var array =["murcielago","pato","caballo","zebra"];
var unir = array.join("");
var separar = unir.split("");
//console.log(separar);
var c = "a";
function contarLetra(separar,c){
  var caracter=0;
  for (var i = 0; i < separar.length; i++){
//console.log(array);
      if(c == separar[i]){
        caracter += 1;
      }
  }
console.log(caracter);
}
contarLetra(separar,c)
