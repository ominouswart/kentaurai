const animals = ['cat', 'dog', 'elephant', 'horse', 'rabbit'];

// function count(array) {
//     return array.length;
// }

const count = array => array.length;

const rez = count(animals);

console.log('elementu: ', rez);



// function firstElement(array) {
//     return array[0];
// }

const firstElement = array => array[0];

const rez1 = firstElement(animals);

console.log('pirmas elementas: ', rez1);



const lastElement = array => array[array.length - 1];

const rez2 = lastElement(animals);

console.log('paskutinis elementas: ', rez2);



const middleElement = array => array[Math.floor(array.length / 2)];
// Math.floor suapvalint

const rez3 = middleElement(animals);

console.log('vidurinis elementas: ', rez3);


const str = 'racoon';

const elementLength = string => string.length;

const rez4 = elementLength(str);

console.log('stringo ilgis: ', rez4);


const countLetters = array => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        count += elementLength(array[i]);
    }
    return count;
}

const rez5 = countLetters(animals);

console.log('suma: ', rez5);

console.clear();



// for

for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

console.clear();


// for of

for (const animal of animals) {
    console.log(animal);
}

console.clear();


// for in

for (const index in animals) {
    console.log(animals[index]);
}

console.clear();

const houses = {
    house1: 'red',
    bigHouse: 'blue',
    house3: 'green'
};


for (const house in houses) {
    console.log(house, houses[house]);
}


const sum = (a, b) => a + b;
const diff = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;


const niceCalck = (action, a , b) => {
    const r = action(a, b);
    console.log('%c' + r, 'color: skyblue; font-size: 20px; background-color: gray; padding: 10px; border-radius: 10px')
}

niceCalck(div, 5, 3);

console.clear();

// const print = (text, i) => console.log(i, text);


// animals.forEach(print);

// const print = ;


animals.forEach((text, i) => console.log(i, text));



animals.forEach(animal => console.log(animal[0]));


let nmr = 0;
animals.forEach(animal => nmr += animal.length);
console.log(nmr);



// animals.forEach(animal => {
//     if (animal.length > 4) {
//         console.log(animal);
//     }
// });

// animals.forEach(animal => animal.length > 4 ? console.log(animal) : '');

animals.forEach(animal => animal.length > 4 && console.log(animal));