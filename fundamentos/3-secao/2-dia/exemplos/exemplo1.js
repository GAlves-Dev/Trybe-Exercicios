const prod = 'café';
const preco = 100;
const desconto = 10;

const message = 
`Produto: ${prod}
Preço: ${preco}
Desconto: ${desconto}%
Preço com desconto: R$${(preco - (preco * (desconto / 100))).toFixed(2) }`; //.toFixed serve para adicionar casas decimais após a virgula//

console.log(message);
