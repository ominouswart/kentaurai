function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let a = rand(5, 25);
let b = rand(5, 25);
let c = rand(5, 25);

console.log(a, b, c);

// A.
console.log(a + b + c);

// B.
console.log(''  + (a + b + c));

// C.
console.log('' + a, '' + b, '' + c);

// D.
console.log('' + a + '+' + '' + b + '+' + '' + c + '=' + '' + (a + b + c));