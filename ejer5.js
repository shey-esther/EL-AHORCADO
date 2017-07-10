var array =["gato","perro","cocodrilo","leon"];
function contarLetra(array){
  var caracter=[];
  for(var i = 0; i <array.length; i++){
    caracter[i] = array[i].length;
  var resultado= caracter.reduce(function(nun1,num2){return(nun1 > num2)?nun1:num2});
      }
  console.log(resultado);
  }

contarLetra(array)
