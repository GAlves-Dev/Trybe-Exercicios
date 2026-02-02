const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let total = 0

for (let index = 0; index < numbers.length; index += 1) {
    total += numbers[index];
}

console.log(total / numbers.length);


 

//Novamente o Gabarito indica criar uma variavel para armazenar apenas o resultado final, da seguinte maneira: "let average = total / numbers.length;" ao invés de imprimir uma operação no console.log.
//Calcule e imprima a média aritmética dos valores contidos no array. A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.