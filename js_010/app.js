function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const m = [5, 15, 25];


const r = m.push(6);

// 1. do: add 6 to the end of the array
// 2. return: array length

console.log(m, r);

const r2 = m.splice(2, 1);

// 1. do: deletes an element based on the index given
// 2. return: puts deleted elements in a new array and returns it

console.log(m, r2);



const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log([...animals]);

const r3 = animals.slice(2, 4);

// 1. do: does nothing
// 2. return: cuts out from the given index to the end of the array and puts it in a new array
// first number is index, second number is amount of elements from the start


console.log(r3, animals);

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);

// concat is used to merge different arrays together
// 1. do: changes nothing
// 2. return: returns a new array consisting of two other arrays


const array4 = [1, 2, 3, 4];

const r4 = array4.fill('A', 1, 3);

r4[1] = 'B';

console.log(r4, array4);

const m10 = Array(10).fill('A');

console.log(m10);

// 1. do: changes all array elements into shown element
// 2. return: returns the same array



const elements = ['Fire', 'Air', 'Water'];

const r5 = elements.join('***');

console.log(r5, elements);

// 1. do: changes nothing
// 2. return: returns a string, that is made up of the joined elements from the array, spaced between whatever was shown

const r6 = r5.split('***');

console.log(r6, r5);

// using split, you can reverse the join part

console.clear();


const md1 = [
    [1, 2, 3],
 [4, 5, ['a', 'b'], 10],
 [7, 9],
[11, 12]];

console.table(md1);

// console.log(md1[1][1]);

for (let i = 0; i < md1.length; i++) {
    for (let j = 0; j < md1[i].length; j++) {
        if (Array.isArray(md1[i][j])) {
        for (let k = 0; k < md1[i][j].length; k++) {
            console.log(md1[i][j][k]);
        }
      } else {
        console.log(md1[i][j]);
      }
    }
}


console.clear();


const animals2 = [
    ['ant', 'bison', 'camel'],
    ['duck', 'elephant', 'giraffe'],
    ['hippo', 'iguana']
];

for (let i = 0; i < animals2.length; i++) {
    for (let j = 0; j < animals2[i].length; j++) {
        console.log(animals2[i][j]);
    }
}

// const newMD = [];


// for (let i = 0; i < 3; i++) {
//     const row = [];
//     for (let j = 0; j < 4; j++) {
//         row.push(i * 4 + j + 1);
//     }
//     newMD.push(row);
// }

// console.log(row);


const penki = [];
let aukstas = penki[0];

for (let i = 0; i < 5; i++) {
    const row = [];
    for (let j = 0; j < 4; j++) {
        row.push(rand(10, 99));
    }
    penki.push(row);
    // if (penki[row][i] < aukstas) {
    //     aukstas = penki[row][i];
    // }
}


const min = Math.min(...penki.flat());


console.table(penki);
console.log(min);