function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


const vardas = 'Jonas';
const pavarde = 'Jonaitis';


if (vardas.length < pavarde.length) {
    console.log(vardas);
} else {
    console.log(pavarde);
}

console.clear();


const pirmasVard = 'Tomas';
const antrasVard = 'Sabalavicius';
const gimMetai = 2001;
const dabMetai = 2024;


function sakinys(a, b, c, d) {
    let amzius = d - c;
    console.log('As esu', a, b, '.', 'Man yra', amzius, 'metai.');
}

sakinys(pirmasVard, antrasVard, gimMetai, dabMetai);

console.clear();


const aktPirmVard = 'John';
const aktAntrVard = 'Cena';

const trysPaskRaid = aktPirmVard.slice(1, 4) + aktAntrVard.slice(1, 4);

console.log(trysPaskRaid);


console.clear();


const story = 'Once upon a time in hollywood';

let storyDone = '';
for (i = 0; i < story.length; i++) {
    if (story[i] === 'o') {
        storyDone += '*';
    } else if (story[i] === 'O') {
        storyDone += '*';
    } else {
        storyDone += story[i];
    }
}

console.log(storyDone);


console.clear();


let pirmRand = rand(0, 2);
let antrRand = rand(0, 2);
let trecRand = rand(0, 2);
let ketvRand = rand(0, 2);

console.log(pirmRand, antrRand, trecRand, ketvRand);

let nuliai = 0;
let vienetai = 0;
let dvejetai = 0;


if (pirmRand == 0) {
        nuliai++
    } else if (pirmRand == 1) {
        vienetai++
    } else {
        dvejetai++
    }
if (antrRand == 0) {
        nuliai++
    } else if (antrRand == 1) {
        vienetai++
    } else {
        dvejetai++
    }
if (trecRand == 0) {
        nuliai++
    } else if (trecRand == 1) {
        vienetai++
    } else {
        dvejetai++
    }
if (ketvRand == 0) {
        nuliai++
    } else if (ketvRand == 1) {
        vienetai++
    } else {
        dvejetai++
    }


console.log(nuliai);
console.log(vienetai);
console.log(dvejetai);


console.clear();


let nulVienas = rand(0, 4);
let nulDu = rand(0, 4);

console.log(nulVienas);
console.log(nulDu);

console.log(Number.parseFloat(nulVienas / nulDu).toFixed(2));


console.clear();


let randPirmas = rand(0, 25);
let randAntras = rand(0, 25);
let randTrecias = rand(0, 25);

console.log(randPirmas, randAntras, randTrecias);


if (randPirmas < randAntras && randAntras< randTrecias) {
    console.log(randAntras);
} else if (randPirmas < randTrecias && randTrecias < randAntras) {
    console.log(randTrecias);
} else if (randAntras < randPirmas && randPirmas < randTrecias) {
    console.log(randPirmas);
} else if (randAntras < randTrecias && randTrecias < randPirmas) {
    console.log(randTrecias);
} else if (randTrecias < randPirmas && randPirmas < randAntras) {
    console.log(randPirmas);
} else {
    console.log(randAntras)
}