//E agora, como é possível adicionar uma nova propriedade ao objeto? 🤔

//Para isso, basta atribuir a ela um valor com a chave desejada. Caso a propriedade acessada ainda não exista no objeto, ela será criada automaticamente. Portanto, caso seja necessário adicionar a propriedade lastName ao objeto, a notação em ponto ou a em colchetes pode ser utilizada. Veja como fazer isso:


const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Software Engineer',
};

customer.lastName = 'Faria';
console.log(customer); 

customer['lastName'] = 'Silva';
console.log(customer);