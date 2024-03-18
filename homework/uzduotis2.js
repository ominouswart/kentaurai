function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function middle(a, b, c) {
    return (a + b + c) - Math.min(a, b, c) - Math.max(a, b, c)
}


let a = rand(0, 25);
let b = rand(0, 25);
let c = rand(0, 25);

console.log(a, b, c);

// let middle = (a + b + c) - Math.min(a, b, c) - Math.max(a, b, c)

console.log(middle(a, b, c));



for (let w = 0; w < 10; w++) {
    console.log(rand(0, 25));
}