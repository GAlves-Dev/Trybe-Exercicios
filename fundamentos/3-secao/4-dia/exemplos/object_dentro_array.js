//Esse bloco de código é um exemplo de um array composto de objetos. Esses objetos podem ser acessados por meio de seus índices e armazenados dentro de variáveis para facilitar a compreensão.
//De olho na dica 👀: Se o objeto estiver dentro de um array, ele será acessado por meio de seu índice, assim como uma informação seria acessada em um array de strings.

const residents = [
  {
    name: 'Luíza',
    lastName: 'Guimarães',
    floor: 10,
    apartment: 1005,
  },
  {
    name: 'William',
    lastName: 'Albuquerque',
    floor: 5,
    apartment: 502,
  },
  {
    name: 'Murilo',
    lastName: 'Ferraz',
    floor: 8,
    apartment: 804,
  },
  {
    name: 'Zoey',
    lastName: 'Brooks',
    floor: 1,
    apartment: 101,
  },
];

const firstResident = residents[0];
console.log(firstResident);
console.log(firstResident.floor);


const lastResident = residents[residents.length - 1];
console.log(lastResident);
//residents.length retorna a quantidade de elementos do array(5 elementos), mas já que começa em 0 o ultimo elemento corresponde ao indice 4 que é sinalizado por meio da operação (residents.length - 1)

for (let index = 0; index < residents.length; index += 1) {
  const resident = residents[index];
  console.log(resident.name);
};
