if (5 > 13) {
console.log('5 is greater than 3');
// be skliaustu {} if veikia vienai eilutej
console.log('5 is greater than 3');
}

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let one = rand(0, 4);
let two = rand(0, 4);

console.log(one, two);

if (one == 0 || two == 0) {
    result = 'Cannot divide by zero';
}

else if (one >= two) {
    result = one / two;
} else {
    result = two / one;
} 
// else if yra pirmo if pratesimas

console.log(result);

console.clear();

console.log(Math.PI);

console.log(Math.round(45.78));

console.log(Math.floor(45.9));
// floor apvalina i mazesne puse

console.log(Math.ceil(45.1));
// ceil apvalina i didesne puse

console.log(Math.min(45, 3, 5, 7, -9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9));
// maziausias numeris

console.log(Math.max(45, 3, 5, 7, -9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9));
// didziausias numeris

console.log(Math.abs(-45));
// rodo numeri be minuso

console.log(Math.random());
// rodo random nuo 0 iki 1, bet 1 neieina

let str = 'Barsukas';

console.log(str.length);
// length skaiciuoja raides
console.log(str[0] + str[1]);
// stringai pradedami skaiciuot nuo 0

let fairytail = 'Once upon a time, in a faraway forest...';

console.log(sentence.includes('up '));
// true ar false zodzio ar fragmento includinimas
console.log(fairytail.indexOf('bla'));
// zodzio ar ieskomo fragmento pradzia. -1 reiskia kad nerasta, kadangi skaiciavimas prasideda nuo 0

let shortString = 'abckkk';

console.log(shortString.padEnd(1005, '*'));
// prailginti string'a 

let shortFairytail = fairytail.slice(1, 10);
// patrumpinti string'a. pirmas numeris kiek nuo pradzios nuimt, antras iki kiek
console.log(shortFairytail);

let lowerCaseFairytail = fairytail.toLowerCase;
// pakeisti i mazasias raides. toUpperCase i didziasias
console.log(lowerCaseFairytail);

console.log("ABC".charCodeAt(0));
// raidziu numerio kodas / ASCII

console.log('aaa' > 'aa');
// raide po viena lyginamos

let v;

if (1) {
    v = 'Jo';
} else {
    v = 'Ne';
}

console.log(v);

let vv = (1) ? 'Jo' : 'Ne';
// ternary, sutrumpintai surasyt if ir else
console.log(vv);

let A = 5;
let aRez;

if (A > 0) {
    aRez = 'Teigiamas';
} else if (A < 0) {
    aRez = 'Neigiamas';
} else {
    aRez = 'Nulis';
}

console.log(aRez);

let = aRez2 = A > 0 ? 'Teigiamas' : A < 0 ? 'Neigiamas' : 'Nulis';
// else if ternary naudojimas
console.log(aRez2);

5 > 8 ? console.log('taip') : console.log('ne');
// ? = if, : = else

let z1 = 5;
let z2 = 8;

let zasys = z1 + ' Zasys su ' + z2 + ' zasiais';

console.log(zasys);

let zasys2 = `${z1} Zasys su ${z2} zasiais`;

console.log(zasys2);

let longKultilineStory = 'Labas rytas, \n' +
'kaip sekasi? \n' +
'Gerai?';

console.log(longKultilineStory);

let longKultilineStory2 = `Labas rytas,
kaip sekasi?
Gerai?`;
// ``back tick lengvina

console.log(longKultilineStory2);