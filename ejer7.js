function inpares(){
  var limite = 7;
  var res = 0;
  for(var i=1; i<=limite; i++){
    if(i%2 !== 0)
    res += i;
  }console.log(res);
}
inpares()
