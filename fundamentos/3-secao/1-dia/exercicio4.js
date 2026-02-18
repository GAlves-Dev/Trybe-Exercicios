let angleA = 90
let angleB = 60
let angleC = 3

let somaangles = angleA + angleB + angleC;

let positiveAngles = angleA > 0 && angleB > 0 && angleC > 0;

if (positiveAngles) {
    if (somaangles === 180) {
        console.log(true);
    } else {
        console.log(false);
    };
} else {
    console.log('Erro: angulo errado')
}

//Utilize if...else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.