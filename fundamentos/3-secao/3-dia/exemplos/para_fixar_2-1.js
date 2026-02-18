const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];

function addCustomers(customers, newCustomers) {
    for (let index = 0; index < newCustomers.length; index += 1 ) {
        if (typeof newCustomers[index] === 'string') {
            customers.push(newCustomers[index]);
        } else {
            return 'Todos os elementos devem ser strings.';
        }
    }
return trybeBankCustomers;
};

console.log(addCustomers(trybeBankCustomers, ['Carol', 'Carolina', 'Adamastor']));

//Agora iremos escrever uma função chamada addCustomers que irá adicionar um array de novas pessoas clientes ao nosso array trybeBankCustomers.
//Essa função deve receber dois parâmetros: o array trybeBankCustomers e um novo array de pessoas que devem ser adicionadas.
//Certifique-se de que somente sejam adicionados ao array trybeBankCustomers valores do tipo string. Caso algum elemento contido no segundo parâmetro não seja do tipo string, retorne a mensagem: “Todos os valores precisam ser strings.”.

//EXPLICAÇÃO DO CÓDIGO: Inicia-se com um Array, carregando nomes 'strings';
//Inicia-se uma função com dois parâmetros equivalentes ao array existente e um array futuro que será introduzido pelo "usuário";
//Dentro da função temos um Loop for, responsável por comparar a quantidade de elementos dentro do array e passar por cada um deles;
//Dentro do Loop for existe um "if-else" que irá verificar se o elemento atual do loop é uma string ou não. Caso seja, ele irá adicionar o elemento atual do Array equivalente ao parâmetro "newCostumers" ao Array equivalente ao parâmetro "costumers". Caso contrário, ele irá retornar a mensagem "Todos os elementos devem ser strings.";
//Ainda dentro da função, é retornado o Array "trybeBankCustomers" para que ele apareça no console.log;
//Por fim é impresso o resultado da função trasendo os valores para os parâmetros sendo eles o Array inicial e um Array mencionado dentro do próprio log;