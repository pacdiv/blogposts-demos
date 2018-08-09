'use strict';

const characters = [
  'ironman',
  'black_widow',
  'wonder_woman',
];

console.log(characters.indexOf('black_widow') > -1);
// true
console.log(characters.indexOf('batman') > -1);
// false

console.log(characters.includes('black_widow'));
// true
console.log(characters.includes('batman'));
// false
