const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Software Engineer',
};

const addProperty = (object, key, value) => {
  if (typeof object[key] === 'undefined') {
    object[key] = value;
  }
};

addProperty(customer, 'email', 'robertinho@gmail.com');
addProperty(customer, 'fone', '(62) 96845-5392');
addProperty(customer, 'userGithub', 'robertDev');
addProperty(customer, 'linkedIn', 'Roberto da Macena');

console.log(customer);
