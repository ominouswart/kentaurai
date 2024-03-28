

const m1 = [
    [1, 2, 3],
    [4, 5, 6]
];


const m2 = m1;

m2[0][0] = 1000;

console.log('m1 === m2', m1 === m2);

const m3 = [...m1];
// viduje esantys masyvai nenusikopjijuoja, lieka tokie patys. 'shallow copy'

console.log('m1 === m3', m1 === m3);

m3[0][1] = 2000;


m4 = structuredClone(m1);
// 'deep copy', viska nukopijuoja

console.log('m1 === m4', m1 === m4);

m4[0][2] = 3000;

console.table(m1);