const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = numbers[0]

for (let index = 1; index < numbers.length; index += 1){
    if (numbers[index] > maior) {
        maior = numbers[index]
    }
};

console.log(maior);



//Utilizando for, descubra o maior valor contido no array e imprima-o.
//Não consegui resolver.(resposta copiada)

//Inicia-se o código definindo a variavel "maior" com o primeiro valor da lista sendo, provisoriamente, o maior. Então se inicia um Loop for que irá percorrer toda a lista com a seguinte lógica: se o valor mencionado for maior que o valor da variável "maior", atualise "maior" para ter o mesmo valor, caso contrario, ignore:

//maior = 5

//9 > 5 → sim
//maior = 9

//3 > 9 → não
//maior continua 9

//...

//E assim por diante até completar o loop.

