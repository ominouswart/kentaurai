function gabalas() {
    console.log('----------------');
}

function gabalas2() {
    console.log('--------||--------');
}

console.log('START');

gabalas();

console.log('STEP 1');

gabalas2();

console.log('STEP 2');

gabalas();

console.log('END');


console.clear();


function blueDash() {
    console.log('%c----------------', 'color: cyan; font-size: 20px');
}

for (i = 0; i <= 10; i++) {
    blueDash();
}

console.clear();


function sum(a, b) {
    const rez = a + b;
    console.log(rez);
}
// a ir b yra funkcijos parametrai


sum(4, 5);
// 4 ir 5 yra funkcijos argumentai

sum(8, 7);

function sandauga(a) {
    const san = a * 6;
    console.log(san);
}

sandauga(10);

console.clear();

function sandauga6(x, y = 6) {
    const rez = x * y;
    console.log(rez);
}

sandauga6(4, 5);
sandauga6(5);

function dalyba(x = 5, y = 10) {
    const rez = x / y;
    console.log(rez);
}

dalyba(100, 25);
dalyba(100);
dalyba();

console.clear();


function megaSum(a, b, ...all) {
    rez = 0;
    for (let i =0; i < all.length; i++) {
        rez += all[i];
    }
    console.log(rez);
}

megaSum(10, 10, 10, 10, 10);

function lastLetter(word) {
    const size = word.length;
    const last = word[size - 1];
    console.log(last);
}


lastLetter('labas');
lastLetter('kaunas');
lastLetter('abcdefg');

console.clear();


function twoWordsWithDash(w1, w2 = 'nenurodyta') {
    console.log(w1 + '-' + w2);
}

twoWordsWithDash('labas', 'rytas')

twoWordsWithDash('labas');

console.clear();



function returnSum(a, b) {
    const rez = a + b;
    return rez;
}


const s1 = returnSum(8, 5);

console.log(s1);


function squared(a) {
    const rez = a * a;
    return rez;
}

const sq = squared(5);
console.log(sq);


function wt() {
    return 'labas';
    console.log('niekada nebus atspausdinta');
}

const w = wt();

console.log(w);



function wordIsLongerThan5Letters(word) {
    if (word.length > 5) {
        return true;
    }
    return false;
    
}

console.log('As', wordIsLongerThan5Letters('As'));

console.log('einu', wordIsLongerThan5Letters('einu'));

console.log('grybauti', wordIsLongerThan5Letters('grybauti'));



function multiAndSum(a, b) {
    const rezMulti = a * b;
    const rezSum = a + b;
    return [rezMulti, rezSum];
}


const [a, b] = multiAndSum(4, 5);

console.log(a, b);


console.clear();


function mult10(a) {
    return a * 10;
}
// funkcija

function mult10(a) {
    return a * 30;
}

const mult10f = function(a) {
    return a * 10;
}
// anonimine funkcija

// const mult10a = (a) => {
//     return a * 10
// }

// const mult10a = (a) => a * 10;
// viena eilute.
// jei daugiau nei viena eilute, taip negalima rasyt

// const mult10a = a => a * 10;    
// kai vienas argumentas, tada be skliaustu


const mult10a = a => a * 10;
// arrow funkcija


console.log(mult10f);

console.log(mult10(4));

console.log(mult10f(4), typeof mult10f);

console.log(mult10a(4), typeof mult10a);