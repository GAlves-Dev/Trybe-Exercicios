//   const countWords = (phrase) => {
//       return phrase.split(' ').length;
//   };
//
//   console.log(countWords('Fala Tribo, beleza?'));


//Versão sinmplificada(Pode ser aplicada caso a arrow function tenha apenas um return de uma linha e caso a Arrow Function tenha apenas um parâmetro, não é necessário colocar os parênteses):

const countWords = phrase => phrase.split(' ').length;


console.log(countWords('Fala Tribo, beleza?'));