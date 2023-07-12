const username = Symbol('username');
const password = Symbol('password');

const user = {
  [username]: 'kcoley1',
  password: '1234565',
  age: 29
};

console.log(user.username);
console.log(user.password);