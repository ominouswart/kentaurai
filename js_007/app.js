// let a = 5;
// let b = 'ABC';
// let o = {
//     a : 5
//     b : 'ABC'
// }
// objektai



let obj = {
    name: 'Antanas',
    age: 99
}

obj.color = 'red';

delete obj.age;

let name = 'Jonas';
let age = 88;

console.log(obj, obj.name, obj.age);

console.log(name, age);


console.clear();

let A = 5;
const B = 10;
const C = {
    name: 'Jonas'
}

// const apsaugo savo kintamajo pakeitimo. constant variable

A++;
// B++;
// negalima pakeist ^
C.name = 'Antanas';
// galima pakeist ^


console.log(A, B, C);


console.clear();

let V = 5;

let V2 = V;
// by value

V2++;

console.log(V, V2);

let O = {
    sk: 5,
    name: 'Jonas'
}

let O2 = O;
// by reference
// O2 ir O yra tas pats, duotas tik kitas vardas

const O3 = { ...O } ;
 // copy by value
// {} - zymi objekta, ... - zymi tepima

// const O4 = Object.assign({}, O); OLD WAY

const O4 = { ...O, salt: 99};

const O5 = { ...O, salt: 99, name: 'Antanas'}

const O6 = { salt: 99, name: 'Antanas', ...O };

delete O6.sk;



const { sk, salt } = O5;
// tampa paprastais kintamais, jei {} yra kairej pusej

O2.sk++;
O.sk++;

console.log(sk, salt);

console.log(O, O2, O3, O4, O5, O6);

