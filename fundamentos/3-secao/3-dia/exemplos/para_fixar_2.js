const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];

function addCustomer(customer) {
    if (typeof customer !== 'string') {
        return "O parâmetro passado deve ser do tipo string"
    } 
    
    trybeBankCustomers.push(customer);
    return trybeBankCustomers;
}

console.log(addCustomer('joao'));



//Faça um programa para adicionar pessoas clientes ao array do TrybeBank. A função deve se chamar addCustomer e receber um parâmetro do tipo string e, caso o parâmetro não seja do tipo string, retorne a mensagem: “O parâmetro passado deve ser do tipo string”.
