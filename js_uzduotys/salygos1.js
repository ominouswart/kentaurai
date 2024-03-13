function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let a = rand(0, 4);
let b = rand(0, 4);

if (a >= b) {
    console.log(a / b)
} else {
    console.log(b / a)
}

let result;

if (a >= b) {
    // let result;
    result = a / b;
} else {
    result = b / a;
}

console.log(result)