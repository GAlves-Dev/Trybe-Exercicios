let size = 5;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
  inputLine = inputLine + symbol;
  console.log(inputLine);
};

//Faça o mesmo algoritmo que antes, mas de modo que imprima um triângulo retângulo com 5 asteriscos de base.

//A primeira variável (size) irá definir quantas vezes o Loop irá rodar
//A segunda (symbol) é o caractere que será utilizado no desenho
//A terceira comeaça como uma string vazia que será ppreenchida aos poucos.
//O Loop For irá analizar o valor de "size" e a cada loop irá adicionar um caractere do "symbol" na string "inputLine" a quest~~ao agora é que o "console.log" agora está dentro do scopo do "for", dessa maneira ele irá imprimir o valor de "inputLine" a cada loop do "For" ao invez de apenas o resultado final.