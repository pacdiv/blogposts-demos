'use strict';

const characters = [
  { id: 1, name: 'ironman' },
  { id: 2, name: 'black_widow' },
  { id: 3, name: 'captain_america' },
];

function getCharacter(id) {
  return character => character.id === id;
}

console.log(characters.filter(getCharacter(2)));
// [ { id: 2, name: 'black_widow' } ]

console.log(characters.find(getCharacter(2)));
// { id: 2, name: 'black_widow' }
