<h1>Desafio feitos em JAVASCRIPT:</h1>

1. Escreva uma solução eficiente, no qual, receba uma listagem de strings e encontre o 
maior prefixo comum dentro dessa listagem. Caso não encontre algum prefixo comum, 
deve-se retornar uma string vazia.
Exemplo 1:
Input: strs = ["abacate", "abacaxi", "abaixo"]
Output: "aba“
Exemplo 2:
Input: strs = ["casa", "casamento", "camelo"]
Output: "ca“
Exemplo 3:
Input: strs = ["Abacate", "casamento", "flor"]
Output: ""

Explicando:

Criei um array no qual contém strings relacionadas, uma lista de resposta que vai receber as repostas em forma de array com seus caracteres, 
e uma lista de resposta auxiliar que recebe a segunda condição.
Iniciando um contador que percorre toda lista, inicia outro contandor que percorre todos os caracteres, e faz uma verificação se o contador de lista e igual a zero se for adciona o caracter se não for faremos outra condição, que a lista de reposta2 tenha o index de contador e seja igual ao caracter atual, assim dando um push na lista de resposta1, se o tamanho da lista de reposta1 e a lista de resposta auxiliar for igual a lista de resposta mostar lista de resposta. 