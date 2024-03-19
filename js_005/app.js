function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let what1 = rand(5, 10);

for (let i = 0; i < what1; i++) {
    console.log('Labas');
}

console.clear();

let all = '';

for (let i = 0; i < what1; i++) {
    all = all + 'Labas ';
}

console.log(all);

console.clear();

let e = rand(0, 4);

// console.log(e);

console.clear();

// for (let n = 0; n < 5; n++) {
//     let e = rand(0, 4);
//     console.log(e);
// }


// for (let n = 0; n < 7; n++) {
//     let e = rand(0, 4);
//     console.log(e);
// }

// for (let n = 0; n < 5; n++) {
//     let e = rand(0, 4);
//     console.log(e);
// }

console.clear();

let kk = rand(0, 1) ? 5 : 7;
// 0 = false, reiskias ima 5, nes ? yra if, o 1 = true, tai ima 7, nes : yra else

for (let i = 0; i < kk; i++) {
    console.log(e);
}

console.clear();

let l = 0;

for (let n = 0; n < 5; n++) {
    let e = rand(0, 4);
    console.log(e);
    l = l + e;
}

console.log(l);

console.clear();

let sviesoforas = rand(0, 2);
let spalva = sviesoforas === 0 ? 'raudona' : sviesoforas === 1 ? 'geltona' : 'zalia'; 

console.log('sviesoforas: ', spalva);

if (spalva === 'raudona') {
    console.log('Stovim');
} else if (spalva === 'geltona') {
    console.log('Ruosiames');
} else {
    console.log('Eik!');
}

switch (spalva) {
    case 'raudona':
        console.log('Stovime');
        break;
    case 'geltona':
        console.log('Ruosiames');
        break;
    default:
        console.log('Eik!');
}

console.clear();

let box = rand(1, 4);
let size;

if (box === 1) {
    size = 'S';
} 
if (box === 2) {
    size = 'M';
} 
if (box === 3) {
    size = 'L';
} 
if (box === 4) {
    size = 'XL';
} 

console.log('Box: ', size);

if (size === 'S') {
    console.log('Tikriname S');
}
if (size === 'M' || size === 'S') {
    console.log('Tikriname M');
}
if (size === 'L' || size === 'M' || size === 'S') {
    console.log('Tikriname L');
}
if (size === 'XL' || size === 'L' || size === 'M' || size === 'S') {
    console.log('Tikriname XL');
}

switch (size) {
    case 'S':
        console.log('Tikriname S');
    case 'M':
        console.log('Tikriname M');
    case 'L':
        console.log('Tikriname L');
    case 'XL':
        console.log('Tikriname XL');
}

// be break'u eina iki galo

