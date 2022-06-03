<h1>_desafio </h1>
Escreva uma solução eficiente, no qual, receba uma listagem de strings e encontre o 
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
Corporativo | Interno Corporativo | Interno
<h2>_desafio 2</h2>
Escreva uma solução eficiente, no qual, receba duas strings S e T, onde T é gerado 
randomicamente através de S; só que nesse processo, uma letra foi adicionada em T. Seu 
desafio é encontrar a letra adicionada.
Exemplo 1:
Input: s = "abcd", t = "cdeab"
Output: "e"
Explicação: 'e' é a letra que foi adicionada
Exemplo 2:
Input: s = " ", t = "y"
Output: "y"
Corporativo | Interno Corporativo | Interno
<h2>_desafio </h2>
Escreva uma solução eficiente, no qual, receba uma string S, em que essa string é um 
numeral romano. Seu desafio é transformar esse numeral S em um valor inteiro.
O numeral romano é escrito do maior símbolo para 
o menor símbolo, entretanto, existem casos no qual 
o inverso pode acontecer. Por exemplo, o número 
quatro não é escrito IIII. Ao invés disso, o número 
quatro é escrito como IV. O mesmo pode acontecer 
quando for nove e outros casos como são mostrados 
abaixo:
Corporativo | Interno Corporativo | Interno
<h2>_desafio 3</h2>
•
I pode ser colocado antes de V(5) e X(10) para resultar em 4 e 9.
• X pode ser colocado antes de L(50) e C(100) para resultar em 40 e 90
• C pode ser colocado antes de D(500) e M(1000) para resultar em 400 e 900
Exemplo 1:
Input: s = "LVIII"
Output: "58"
Explicação: L = 50, V = 5, III = 3
Exemplo 2
Input: s = "III"
Output: "3"
Explicação: I = 1
Ah não esqueça que você deve desenvolver uma tela web, onde você deverá 
entrar com o input e ter o output apresentado!
Corporativo | Interno Corporativo | Interno
<h2>_desafio 4</h2>
Escreva uma solução eficiente, no qual, receba um inteiro n e descubra se ele é um 
número feliz. Retorne true se o número for feliz, ou false caso contrário. 
O que determina se o número é feliz:
• Começando com qualquer número inteiro positivo, substitua o número pela soma dos quadrados de seus 
dígitos.
• Repita o processo até que o número seja igual a 1 (onde ficará), ou faça um loop infinito em que o ciclo não 
inclua 1.
• Aqueles números para os quais esse processo termina em 1 são considerados felizes
Exemplo 1
Input: n = 19
Output = true
Explicação: 1^2 + 9^2 = 82
8^2 + 2^2 = 68 
6^2 + 8^2 = 100 
1^2 + 0^2 + 0^2 = 1 