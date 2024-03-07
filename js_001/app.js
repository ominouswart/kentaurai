console.log('Hello from far away!');

let g;

let a = 10;
// number
let b = '10';
// string
let c = 'Hello';
// tekstas = string

let x = 'An';
let y = 'tis';

let l1 = 'B';
let l2 = 'a';

console.log(b + a);

let rez = x + y;

console.log(rez);

console.log(a + +b);

console.log(l1 + l2 + +l2 +l2);

console.log(+b + a);
// galima pridet + pries variable kad paverst i skaiciu
console.log(+c);
// NaN = nesekmingas bandymas paverst string'a i number'i (not a number)

console.log(a + '' + a);
// galima pridet '' pries skaiciu kad paverst i string'a

console.log(typeof a);
// number
console.log(typeof b);
// string
console.log(typeof +c);
// number

console.log(a - b);
// minuso atveju, visada vercia i skaicius

console.log((0.3 + 0.6).toFixed(1));
// suapvalinimas

a = 50;

console.log(a + g);
// a yra perrasoma is 10 i 50. antra karta 'let' nereikia rasyti

console.log(g, typeof g);
// jei nera variable parasytas, jis bus 'undefined'

console.log(g + a);
// undefined + skaicius = NaN

console.log(g + b);
// undefined + string = undefined[String]

let t = true;
let f = false;

console.log(typeof t);

console.log(t + f);
// t = 1, f = 0

console.log(!!b);
// !! prieki kad paversti i boolean
// vienintelis numeris kuris false yra nulis
// vienintelis string'as kuris false yra '' tuscias laukas

console.log(t && f);
// && yra AND
// ! yra NOT
// || yra OR

console.log(t || f);

