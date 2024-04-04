animals = ['cat', 'dog', 'elephant', 'bee', 'ant', 'whale', 'lion', 'tiger', 'bear', 'snake', 'shark', 'penguin', 'parrot', 'pigeon', 'eagle', 'sparrow', 'owl', 'seagull', 'woodpecker', 'flamingo', 'peacock', 'swan', 'duck', 'goose', 'pelican', 'stork', 'crane', 'heron', 'robin', 'nightingale', 'crow', 'raven', 'magpie', 'chickadee'];


animals.forEach(animal => console.log(animal));

// forEach
// do: perrenka masyvo elementus
// return: nieko

console.clear();

// map
// do: perrenka masyvo elementus
// return: grazina nauja masyva su pakeistas elementais


const newAnimals = animals.map(animal => animal.toUpperCase());



console.log(newAnimals);

// console.clear();


// const sing = () => console.log('la la la');

// const person = {
//     name: 'jonas',
//     age: 99
// }

// person.hobbies = sing;

// person.hobbies();

// console.log(person.name);

// console.log(person);



const smallAnimals = animals.map(animal => {
    if(animal.length > 5) {
        return 'BIG';
    }
    return animal;
});

console.log(smallAnimals);


const bigAnimals = animals.map(animal => animal.length == 3 ? animal + '*****' : animal);

console.log(bigAnimals);

// filter
// do: perrenka masyvo elementus
// return: nauja masyva su tik tam tikrais elementais

const filteredAnimals = animals.filter(animal => true);

console.clear();

console.log(filteredAnimals);


const sLetterAnimals = animals.filter(animal => animal[0] == 's');

console.log(sLetterAnimals);


const animalsWithoutTiger = animals.filter(animal => animal != 'tiger');

console.log(animalsWithoutTiger);


const withNumbers = animals.map((animal, i) => `${i + 1}. ${animal}`);

const animalsWithOddIndex = animals.filter((_, i) => i % 2 == 1);

console.log(withNumbers);
console.log(animalsWithOddIndex);

console.clear();



// sort
// do: surikiuoja masyvo elementus
// return: grazina ta pati surikiuota masyva


// animals.sort((a, b) => {
//     if (a > b) {
//         return 1;
//     }
//     if (a < b) {
//         return -1
//     }
//     return 0;
// });
// sort'as string'ams pagal abecele

animals.sort((a, b) => a.localeCompare(b));

console.log(animals);


const digits = [1, 5, 7, 3, 9, 2, 4, 6, 8];

digits.sort((a, b) => b - a);

console.log(digits);


animals.sort((a, b) => {
    if (a.length > b.length) {
        return -1;
    }
    if (a.length < b.length) {
        return 1;
    }
    return 0;
})

console.log(animals);

console.clear();



animals.sort((a, b) => {
    if (a[1] > b[1]) {
        return 1;
    }
    if (a[1] < b[1]) {
        return -1;
    }
    return 0;
})

console.log(animals);