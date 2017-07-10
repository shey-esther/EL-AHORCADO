var palabras = ["casa","enrredo", "ropa","yate","taza","almohada","murcielago"];
//Escojemos la palabra aleatoriamente Y convertimos la palabra en un array
function palabraRandom(palabras){
 var palabra = palabras[Math.floor(Math.random() * palabras.length)];
 var newPalabra = palabra.split("");
 // console.log(newPalabra);
   return newPalabra;
}
var llamandoFuncionAnterior=palabraRandom(palabras);
// en esta funcion me muestra la palabra escogida en asteriscos
function dibujarAsterik(llamandoFuncionAnterior){
  var a="";
  for(var i=0; i<llamandoFuncionAnterior.length; i++){
    a += "*";
  }
  console.log(a);
}
dibujarAsterik(llamandoFuncionAnterior);

var llamandoFuncionAsteriscos=palabraRandom(palabras);
//preguntar como esta funcionando esta funcion callback.
//en esta funcion me muestra la pocicion de la letra ingresada :)
function ingresarCaracter(llamandoFuncionAsteriscos){
var ingreso = prompt("INGRESE UNA POSIBLE LETRA");
  for (var i = 0 ; i < llamandoFuncionAsteriscos.length;i++){

      if(ingreso == llamandoFuncionAsteriscos[i]){
        var caracter="";
        caracter += llamandoFuncionAsteriscos[i];
        console.log(caracter+"-->"+i);
      }

  }

}
ingresarCaracter(llamandoFuncionAsteriscos);
