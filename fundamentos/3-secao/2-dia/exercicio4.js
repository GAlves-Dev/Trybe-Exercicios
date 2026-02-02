const numbers = [5, 9, 3, 19, 70, 8, 3, 2, 35, 46];
let total = 0

for (let index = 0; index < numbers.length; index += 1) {
    total += numbers[index];
}
    let result = total / numbers.length
    let resposta = ''
   
if (result < 20) {
    resposta = 'O valor da média aritmética é menor que 20'
} else if (result > 20) {
    resposta = 'O valor da média aritmética é maior que 20'
} else { resposta = 'O valor da média aritmética é 20'}

console.log(resposta);

//Com base no código que acabou de gerar, referente ao cálculo da média aritmética, faça com que: caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”.
