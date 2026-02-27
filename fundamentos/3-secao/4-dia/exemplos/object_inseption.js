//Podemos “ler” o objeto user da seguinte forma:
//O objeto desse exemplo tem a chave info, cujo valor é outro objeto que possui três chaves, uma delas sendo address, que é outro objeto. Ou seja, o objeto user possui outros dois objetos dentro dele.

const user = {
    id: 33,
    email: 'leonvermilion@gmial.com',
    info: {
        name: 'Fuegoleon',
        lastName: 'Vermilion',
        address: {
            street: 'Rua Notie, 45',
            district: 'noble',
            city: 'Capital',
            state: 'Clover',
        },
    },
};

console.log(user['id']);
console.log(user.email);
console.log(user.info.address.street);
console.log(user['info']['address']['city']);


