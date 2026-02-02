const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numerosImpares = []

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        numerosImpares.push (numbers[index])
    }
}
const result = numerosImpares;

console.log(result);


//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.
//Consegui fazer sozinhoooo!!!!
//Começa com a declaração de uma Array vazia "numerosImpares" que mais futuramente receberá os valores resultantes da operação. 
//Em seguida, se inicia um loop de repetição for que irá percorrer todos os elementos do Array "numbers", seu código irá comparar o Módulo(resto da divisão) de cada elemento do Array dividido por dois. 
// Todo numero par, quando dividido por 2 resultara em um módulo 0, ou seja, caso o módulo nao seja 0, o número é impar. 
//Voltando para o código, a estrutura "!==" ira verificar se o Módulo é diferente de 0. Se esse for o caso, o Array "numerosImpares" irá receber o valor atual de Index por meio do comando "push" que adiciona um elemento ao final do Array. 