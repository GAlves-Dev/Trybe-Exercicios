let INSS;
let IR

let Bruto = 3000;

if (Bruto <= 1556.94) {
    INSS = Bruto * 0.08;
} else if (Bruto <= 2594.92) {
    INSS = Bruto * 0.09;
} else if (Bruto <= 5189.82) {
    INSS = Bruto * 0.11;
} else INSS = 570.88;

let Min = Bruto - INSS;

if(Min <= 1903.98) {
    IR = 0
} else if ( Min <= 2826.65) {
    IR = (Min * 0.075) - 142.80;
} else if (Min <= 3751.05) {
    IR = (Min * 0.15) - 354.80;   
} else if (Min <= 4664.68) {
    IR = (Min * 0.225) - 636.13;
} else {
 IR = (Min * 0.275) - 869.36;
};

console.log("Salario: R$" + (Min - IR));