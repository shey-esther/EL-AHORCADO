var array =["ojo","mouse","lapiz"];
var unir = array.join("");
var separar = unir.split("");
//console.log(separar);
var vocales=["a","e","i","o","u"];
function contarLetra(separar,vocales){
  var caracter=0;
  for (var i = 0; i < separar.length; i++){
//console.log(array);
    for(var j=0; j<vocales.length; j++)

      if(separar[i] == vocales[j]){
        caracter += 1;
      }
  }
console.log(caracter);
}
contarLetra(separar,vocales)
