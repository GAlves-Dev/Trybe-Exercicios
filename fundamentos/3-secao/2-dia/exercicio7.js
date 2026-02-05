let fatorial = 1;

// Nesse caso vamos começar em 10 e decrementar 1 a cada loop
for (let index = 10; index > 0; index -= 1) {
  fatorial *= index;

  
};

console.log(fatorial);

//Crie um algoritmo que imprima na tela o fatorial de 10.
//Não consegui fazer sozinho

//Interessante Algorítimo de fatorial - Ele inicia com uma variável valendo 1 pois multiplicar por 0 zeraria tudo, logo o 1 é o elemento neutro da multiplicação.
//A estrutura do for começa em 10 e enquanto o Index for maior que 0, o loop continua e a cada volta do Index diminui 1.
//O corpo do Loop diz "fatorial *= index", isso significa "fatorial = fatoral * index" ou seja, a cada interação o valor atual de fatorial será multiplicado pelo index.
//Ou seja, a cada loop o index ira seguir a seguinte lógica "10..9..8..7.." e o farorial irá ser multiplicado 
//"1 × 10 = 10
//10 × 9 = 90
//90 × 8 = 720
//720 × 7 = 5040..."

//Ideia lógica por trás desse código é o padrão: acumulador + loop decrescente:
//fatorial acumula o resultado
//o for percorre os números de trás pra frente
//cada número é multiplicado no resultado