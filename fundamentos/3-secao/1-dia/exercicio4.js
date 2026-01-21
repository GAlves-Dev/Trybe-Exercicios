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