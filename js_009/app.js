function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const a = [];

for (i = 1; i <= 100; i++) {
    a.push(i);
}

console.log(a);

console.clear();

// for (i = 1; i <= 100; i++) {
//     a.push(i);
//     if (a[i] % 3 == 0) {
//         a[i] = 'C';
//     }
// }

console.log(a);

console.clear();

for (i = 1; i <= 100; i++) {
    if (a[i] % 3 == 0) {
        a[i] = 'C';
    }
    if (a[i] % 7 == 0) {
        a[i] = 'B';
    }
}

// console.log(a);

for (i = 1; i < a.length; i++) {
    if (typeof(a[i]) === 'number') {
        a[i] = a[i] * 5;
    }
}

// console.log(a)

for (i = 1; i < a.length; i++) {
    if (typeof(a[i]) == 'string') {
        a[i] = i;
    }
}

// console.log(a);

for (i = 1; i <= 100; i++) {
    if (a[i] % 3 == 0 && a[i] % 5 != 0) {
        a[i] = 'A'
    }
}

console.log(a);

let suma = 0;

for (i = 1; i < a.length; i++) {
    if (typeof(a[i]) == 'number') {
        suma += a[i];
    }
}

console.log('suma: ', suma);

let b = a.indexOf('A');
let c = a.indexOf('B');

b = a.lastIndexOf('A');

const rev = [...a].reverse();

console.log('A: ', b);
console.log('B: ', c);

console.log(rev);

