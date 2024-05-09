const arr = [];

arr.push('bla bla');
arr.push('rat');
arr.push('weasel');

console.log(arr);

const map = new Map();

map.set('b', 'bla bla');
map.set('ra', 'rat');
map.set(101, 'weasel');
map.set(_ => _, 'function weasel');

// map.delete('101');


console.log(map, map.get('ra'), map.has('b'), map.size);

map.forEach((v, i) => console.log(v, i));

const arrFromMap = [...map];

console.log(arrFromMap);

const map2 = new Map(arrFromMap);

console.log(map2);



const set = new Set();

set.add('bla bla');
set.add('rat');
set.add('weasel');

set.add('rat');

set.has('rat');

console.log(set, set.has('rat'));