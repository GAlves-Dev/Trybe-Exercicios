let pri = 15
let seg = 15
let ter = 8

if (pri > seg && pri > ter) {
    console.log(pri);
} else if (seg > pri && seg > ter) {
    console.log(seg);
} else if (ter > seg && ter > pri) {
    console.log(ter);
} else {
    console.log('ouxi, tem uns iguais ai');
}

//Esse código compara os valores aritiméticos das variáveis e destaca o maior entre eles, caso tenha dois de mesmo valor, será retornado a mensagem "ouxi, tem uns iguais ai"
//Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.