let digitaNumero = prompt("digite um numero");
let numeroConvert= parseInt(digitaNumero);

let resultado = Math.pow(digitaNumero,2);

if(digitaNumero > 0 && resultado != 1 ){
   console.log(resultado);
 
}else if (digitaNumero > 0 && resultado == 1){
    console.log("Numero Feliz");
}else{
    console.log("digite um numero");
    console.log("Encontre o numero Feliz.");   
}








