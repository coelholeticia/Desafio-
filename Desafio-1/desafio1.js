let lista = ["casa", "casamento", "camelo"];
 let lista_resposta = [];
 let lista_resposta_aux = [];

 for (let contador_lista = 0; contador_lista < lista.length; contador_lista++) 
  {let str = lista[contador_lista];
   lista_resposta = [];

   for (let contador_char = 0; contador_char < str.length; contador_char++) {

     let char_atual = str.charAt(contador_char);

     if (contador_lista == 0) {

       lista_resposta_aux.push(char_atual);

     } else {

       if (lista_resposta_aux[contador_char] === char_atual) {
         lista_resposta.push(char_atual);
       }

     }

   }
   if (lista_resposta.length) {
     lista_resposta_aux = lista_resposta;
   }

 }
 console.log(lista_resposta);
