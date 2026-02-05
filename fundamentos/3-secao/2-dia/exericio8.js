let word = 'tryber';
let reverseWord = '';

reverseWord = word.split('').reverse().join('');

console.log(reverseWord);

//Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”.

//Primeiro se cria uma variável chamada word e guarda nela a string "tryber".
//Cria outra variável, começando como uma string vazia. Ela vai receber a palavra invertida depois.
//Após isso se inicia uma linha onde a variável vazia irá receber o valor resultante da função a seguir:
//word.split('') transforma a string em um array de caracteres, resultado: ['t', 'r', 'y', 'b', 'e', 'r']
//.reverse() inverte a ordem dos elementos do array, resultado: ['r', 'e', 'b', 'y', 'r', 't']
//.join('') junta os elementos do array novamente em uma string. resultado: v