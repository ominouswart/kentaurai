function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// #1

let pirmasKauliukas = rand(1, 6);
let antrasKauliukas = rand(1, 6);

let suma = pirmasKauliukas + antrasKauliukas;

if (suma > 8) {
    console.log(pirmasKauliukas, antrasKauliukas, 'Jus laimejote');
} else {
    console.log(pirmasKauliukas, antrasKauliukas, 'Jus pralaimejote');
}

console.clear();

// #2

let Pilkis = rand(3, 6);
let Murklys = rand(3, 6);

if (Pilkis < Murklys) {
    console.log('Pilkis: ', Pilkis);
    console.log('Murklys: ', Murklys);
    console.log('Lengvesnis katinas yra Pilkis');
} else if (Murklys < Pilkis) {
    console.log('Pilkis: ', Pilkis);
    console.log('Murklys: ', Murklys);
    console.log('Lengvesnis katinas yra Murklys');
} else {
    console.log('Pilkis: ', Pilkis);
    console.log('Murklys: ', Murklys);
    console.log('Katinu svoriai vienodi');
}

console.clear();

// #3

let katinai = rand(0, 30);
let karves = rand(0, 30);


if (katinai <= 15 && karves <= 15) {
    console.log('Telpa');
} else {
    console.log('Netelpa');
}

console.clear();

// #4

let kauliukas = rand(1, 6);


if (kauliukas == 1 || kauliukas == 5) {
    console.log('Antanas pirks televizoriu');
} else if (kauliukas == 3 || kauliukas == 4) {
    console.log('Antanas pirks skalbimo masina');
} else {
    console.log('Antanas pirks saldytuva');
}

console.clear();

// #5

// nebus boso

let a = rand(1, 7);
let b = rand(1, 7);
let c = rand(1, 7);
let sum = a + b + c;

console.log(a, b, c);

console.log('' + Math.min(a, b, c) + (a + b + c - Math.min(a, b, c) - Math.max(a, b, c)) + Math.max(a, b, c));