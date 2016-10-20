// var names = ['Walter', 'Lola', 'Sammi'];

// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name + "!";
//
// console.log(returnMe('Walter'));

// var person = {
//   name: 'Walter',
//   greet: function () {
//     names.forEach(function (name) {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };

// var person = {
//   name: 'Walter',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };
//
// person.greet();

function add(a, b) {
  return a + b;
}

console.log(add(2, 3));

addNum = (a, b) => {
  return a + b;
};

console.log(addNum(2, 3));

var returnAdd = (a, b) => a + b;
console.log(returnAdd(2, 3));
