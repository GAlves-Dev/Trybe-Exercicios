const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Software Engineer',
};

// Criação da função
const addProperty = (object, key, value) => {
  if (typeof object[key] === "undefined"){
    object[key] = value;
  }
};

// Chamada da função passando os valores dos parâmetros
addProperty(customer, 'birthPlace', '19/07/1932');

// Exibe o objeto transformado
console.log(customer);


//O código tem como objetivo adicionar novas propriedades ao Objeto "costumer", mais especificamente, sua data de nascimeto por meio de uma função.
//Para isso, após definir o objeto é criado uma função que irá receber 3 parâmetros: O objeto a ser trabalhado; Uma nova chave a ser adicionada; O valor dessa chave.
//Após isso, as instruções dadas à função para ela executar os parâmetros é:
//  Se o valor de "key" que será definido pelo operador typeof (typeof é um operador que retorna uma string informando o tipo de um valor.) for igual á "undefined", ou seja, caso ele não exista. deve-se retornar que o obeject(customer) com a chave key('birthPlace') é igual a value(19/07/1932)
//Na próxima linha é chamada a função com os valores dos parâmetros que serão executados pela função sendo eles: o Objeto já criado, mais uma chave e um valor que serão adicionados.
//O retorno da função "object[key] = value;" que adiciona um falor ao objeto quando este ainda não existe.
//Agora, sempre que você quiser adicionar uma nova propriedade sem correr o risco de substituir algum valor existente, basta chamar a função addProperty e passar os valores dos parâmetros necessários.