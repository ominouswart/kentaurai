function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const a = rand(1, 7);

for (let i = 0; i < a; i++) {
    console.log(a);
}

console.clear();

const o = {vardas: 'Jonas', amzius: '22', miestas: 'Vilnius'};

const a1 = ['Jonas', 22, 'Vilnius'];
// masyvus zymet su [] skliaustais


console.log('o: ', o);
console.log('a1: ', a1);

const animals = ['Kiškis', 'Lapė', 'Barsukas', 'Vilkas', 'Laukinis katinas'];

// const peoples = [
//     {vardas: 'Jonas', amzius: 22, miestas: 'Vilnius'},
//     {vardas: 'Petras', amzius: 33, miestas: 'Kaunas'},
//     {vardas: 'Antanas', amzius: 44, miestas: 'Klaipėda'}
// ];




console.log(animals[1]);

// animals[5] = 'Lusis';
animals.push('Lusis');
// pridet prie masyvo
animals[3] = 'Suo';
// overwritint esanti masyve daikta

// animals[10] = 'Zuikis';

console.log(animals.length);


console.log(animals);

for (i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}



for (i = 0; i < animals.length; i = i + 2) {
    console.log(animals[i]);
}

console.clear();

for (let i = 0; i < animals.length; i++) {
    if (animals[i].length > 6) {
        console.log(animals[i]);
    }
    // animals[i].length > 6 && console.log(animals[i]);
}

console.clear();

// const randskaiciai = [rand(1, 10), rand(1, 10), rand(1, 10), rand(1, 10), rand(1, 10),];

// console.log(randskaiciai);

let penki = 0;
const numbers = [];
for (let i = 0; i < 5; i++) {
    numbers.push(rand(1, 10));
    if (numbers[i] == 5) {
        penki++
    }
}

console.log(numbers);
console.log('penki: ', penki);

console.clear();

let numbers2;
let count = 0;

do {
    numbers2 = [];
    penketukai = 0;
    count++
    for (let i = 0; i < 5; i++) {
        const sk = rand(1, 10);
        numbers2.push(sk);
        if (sk == 5) {
            penketukai++;
        }
    }
    console.log(numbers2);
} while (penketukai < 3);

console.log('iteraciju: ', count);

console.clear();

console.log(animals);




let rez;

rez = animals.push('Zuikis');

console.log(rez, 'Zuikis push')

animals.unshift('Briedis');
// unshift prideda i pradzia, push i gala

animals.unshift('Keleivinis lektuvas', 'Kregzde', 'Bebras');

animals.push('Lakstingala', 'Tigras', 'Pelekas');

console.log(animals);

animals.pop();
// istrina paskutini masyvo elementa
animals.pop();

console.log(animals);

animals.shift();
// trina pirma masyvo elementa

console.log(animals);


animals.splice(2, 1);
// 2 is index, 1 is how many elements to remove

console.log(animals);

animals.splice(3, 0, 'Fox', 'Cat', 'Mouse');

console.log(animals);

let dogIndex = animals.indexOf('Fox');
animals.splice(dogIndex, 1);



console.log(dogIndex);

const r = ['A', 'B', 'C', 'D'][rand(0, 3)];