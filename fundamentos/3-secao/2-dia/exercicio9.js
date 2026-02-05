let n = 12  ;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  inputLine = inputLine + symbol;
};

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  console.log(inputLine);
};

//Escreva um algoritmo que, dado um valor n, sendo n > 1, imprima na tela um quadrado feito de asteriscos de tamanho n.

//A primeira variável define a quantidade de repetições, ou sejam, as linhas e as colunas.
//A segunda é o caractere que será usado par montar o desenho
//A terceira comeaça como uma string vazia que será ppreenchida aos poucos.
//O primeiro Loop For irá analizar o valor aplicado à variável "n" e irá adicionar um caractere definido pela variável "symbol" a string da variável "inputline" a cada volta do loop.
//O segundo loop irá fazer o mesmo mas agora irá repetir a mesma string da variável "inputline" seguindo o valor de "n"