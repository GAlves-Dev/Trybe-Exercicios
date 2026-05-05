const reader = {
  name: 'Julia',
  lastName: 'Pessoa',
  age: 21,
  favoriteBooks: [
    {
      title: 'Harry Potter e o Prisioneiro de Azkaban',
      author: 'JK Rowling',
      publisher:  'Rocco',
    },
    {
      title: 'O Senhor dos Anéis - a Sociedade do Anel',
      author: 'J. R. R. Tolkien',
      publisher: 'Martins Fontes',
    },
  ],
};

const message = `O livro favorito de ${reader.name} ${reader.lastName} se chama ${reader.favoriteBooks[0].title }`;

console.log(message);

const favs = reader.favoriteBooks.length
const afirmation = `${reader.name} tem ${favs} livros favoritos`; 

console.log(afirmation);

