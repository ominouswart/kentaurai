function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let a = rand(-10, 10);
let b = rand(-10, 10);
let c = rand(-10, 10);

console.log(a, b, c);

if (a === 0) {
    console.log('*' + a + '*');
} else if (a < 0) {
    console.log('+' + a + '+');
} else {
    console.log('-' + a + '-');
}
if (b === 0) {
    console.log('*' + b + '*');
} else if (b < 0) {
    console.log('+' + b + '+');
} else {
    console.log('-' + b + '-');
}
if (c === 0) {
    console.log('*' + c + '*');
} else if (c < 0) {
    console.log('+' + c + '+');
} else {
    console.log('-' + c + '-');
}