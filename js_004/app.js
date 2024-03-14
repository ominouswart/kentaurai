console.log('Welcome to the CYCLE world!');

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// nuo ko pradet; iki kada baigt; kaip pakeist/kiek pridet

let word = 'Hello Mr. Raccoon!';

for (let w = 0; w < word.length; w+=2) {
    console.log(word[w] + (word[w+1] !== undefined ? word[w+1] : ''));
}

// reverse

for (let w = word.length - 1; w >=0; w--) {
    console.log(word[w]);
}

console.log('%c  RACCOON ', 'color: skyblue; background-color: crimson; font-size: 20px; font-weight: bold; padding: 10px');

// '%c' stiliui

for (let w = 0; w < word.length; w++) {
    if (w % 2 === 0) {
        console.log('%c' + word[w], 'color: skyblue');
    } else {
        console.log('%c' + word[w], 'color: crimson');
    }
}

// 'for' naudojama kai ciklo skaicius zinomas, 'while' naudojama kai nezinomas
// n = 10, 'for'        n = x(0...infinity), 'while'             n = x(1...infinity), 'do while'


console.clear();



// console.log(m);

let m;

do {

    m = rand(0, 1) ? 'H' : 'S';
    console.log(m);

} while (m != 'S');

// == --- !=
// === --- !==
// > --- <=
// < --- >=
// || --- &&
// && --- ||

let r;

r = rand(20, 300);

console.log(r, 'gimtadienis!!!!!');

while (r < 200) {
    r = r + rand(20, 50);
    console.log(r);
}

// atvirksciai rasyt