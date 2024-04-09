function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function recursion(n) {
    console.log('IN recursion n: ', n);
    if (n != 3) {
        recursion(n + 1);
    }
    console.log('END recursion n: ', n);
}

recursion(1);

const multiArray = [
    [1, [4, 5, 6], 3],
    [[4, [7, 8, [4, [4, 5], 6]]], 5, 6],
    [7, 8, [4, [4, 5], 6]]
]

console.log(multiArray);

console.clear();

function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            printArray(arr[i]);
        } else {
            console.log(arr[i]);
        }
    }
}
printArray(multiArray);

console.clear();

// REDUCE REDUCE REDUCE REDUCE REDUCE REDUCE REDUCE REDUCE REDUCE REDUCE REDUCE REDUCE


const digitsArray = [1, 4, 3, 0, 5, 9, 7, 1, 0];

let sum = 0;

digitsArray.forEach(item => sum += item);

console.log('sum: ', sum);

const sum2 = digitsArray.reduce((acc, item) => acc + item, 0);

// do: skaiciuoja (nieko)
// return: akumuliatoriaus reiksme

const max = digitsArray.reduce((acc, item) => acc > item ? acc : item);

// jei nera paskirtos reiksmes, reduce'as pats paskiria index 0 kaip pradine reiksme

console.log('sum2: ', sum2);

console.log('max: ', max);


// REVERSE REVERSE REVERSE REVERSE REVERSE REVERSE REVERSE REVERSE REVERSE REVERSE REVERSE REVERSE 


// do: apvercia masyva
// return: ta pati apversta masyva

const colors = ['red', 'green', 'blue', 'yellow', 'black'];

colors.reverse();

console.log('colors: ', colors);


//  toREVERSED toREVERSED toREVERSED toREVERSED toREVERSED toREVERSED toREVERSED toREVERSED


// do: nieko
// return: nauja masyva su apversta tvarka


const animals = ['cat', 'dog', 'fish', 'bird', 'elephant'];

const animalsRev = animals.toReversed();

console.log(animals);
console.log(animalsRev);



// SORT SORT SORT SORT SORT SORT SORT SORT


// do: surikiuoja masyva
// return: ta pati masyva surikiuota


const numbers = [1, 4, 3, 0, 5, 9, 7, 1, 0];

numbers.sort((a, b) => a - b);

console.log(numbers);


// toSORTED toSORTED toSORTED toSORTED toSORTED toSORTED toSORTED toSORTED 


// do: nieko
// return: surikiuota masyva


const numbers2 = [1, 4, 3, 0, 5, 9, 7, 1, 0];

const numbersSort = numbers2.toSorted();

console.log(numbersSort);



// FIND FIND FIND FIND FIND FIND FIND FIND FIND FIND FIND FIND FIND FIND FIND 


// do: nieko
// return: iesko pirmo elemento, kuris tenkina salyga, arba undefined


const names = ['Jonas', 'Petras', 'Antanas', 'Juozas', 'Ona'];

const foundName = names.find(name => name[0] === 'J');

console.log(foundName);


// SOME SOME SOME SOME SOME SOME SOME SOME SOME


// do: nieko
// return: true/false ar bent vienas elementas tenkina salyga


const hasOna = names.some(name => name == 'Ona');

console.log(hasOna);

console.clear();



const catsAndOwners = [
    { cat: 'Fluffy', owner: 'Jonas', color: 'white'},
    { cat: 'Garfield', owner: 'Petras', color: 'orange'},
    { cat: 'Marmaduke', owner: 'Ona', color: 'black'},
    { cat: 'Tom', owner: 'Agota', color: 'grey'},
    { cat: 'Jerry', owner: 'Asta', color: 'grey'},
    { cat: 'Sylvester', owner: 'Vytas', color: 'black'},
];



catsAndOwners.forEach(catAndOwner => console.log(catAndOwner.owner));

console.clear();


const filterCats = catsAndOwners.filter(catAndOwner => catAndOwner.color == 'grey');

console.log(filterCats);

console.clear();



const catAge = catsAndOwners.map(cat => ({...cat, age: rand(1, 18)}));

console.table(catAge);

// console.clear();



const catOlder = catAge.map(cat => ({...cat, age : cat.age + 1}));

console.table(catOlder);

console.clear();




const oldToYoung = catOlder.toSorted((a, b) => a.age = b.age);

console.table(oldToYoung);