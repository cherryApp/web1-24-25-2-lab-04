import { userList } from './db.js';

console.log( userList[0].name );

// Primitives
const num = 5; // number
const userName = 'Gábor';
const isActive = false;
const nothig = null; // object
let test; // undefined

Number.prototype.isDivided = function(divider) {
    return this % divider === 0;
};

console.log( num.isDivided(5) );

// Collections
const mixed = [1, 2, 4, ['Hello', true], {id: 44}, false];
console.log( mixed[4].id );
console.log( mixed.length );
mixed[5] = true;

console.log( userList[0].age );
userList[0].name = 'Little Mermaid';
console.log( userList );

const key = 'id';
console.log( userList[1][key] );






console.log('Hello JS!');