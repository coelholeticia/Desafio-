let string = "s";
let string2 = "t";



const letrasAleatorias = len => {
    let letras ='';  
    do{
        letras += Math.random().toString(36).substring(2);
    }while(letras.length < len);
    console.log(letras);
    return letras;
}
console.log(letrasAleatorias(10).indexOf(string));
console.log(letrasAleatorias(10).indexOf(string2));


