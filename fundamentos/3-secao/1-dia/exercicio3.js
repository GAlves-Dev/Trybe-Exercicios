let pri = 165
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