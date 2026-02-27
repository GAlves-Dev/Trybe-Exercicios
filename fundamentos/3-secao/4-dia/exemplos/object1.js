//Objetos são estruturas ou coleções compostas de pares chave-valor. É possível armazenar qualquer tipo de dado, até mesmo armazenar um objeto dentro de outro ou até mesmo dentro de um array. Com isso, objetos são estruturas de armazenamento de dados muito poderosas.

const company = {
    name: 'Pirilampos',
    slogan: 'Você conhece, você confia!',
    foudationYear:2023,
    isActive: true,
    cities: [
        'Belo Horizonte',
        'Curitiba',
        'Xique-xique'
    ]
};

console.log(company.cities);
console.log(company.name);
console.log(company.slogan);
console.log(company.isActive);
