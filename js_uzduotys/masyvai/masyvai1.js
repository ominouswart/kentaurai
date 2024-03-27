function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const a = [];
let b = rand(5, 25);

for (i = 0; i <= 29; i++) {
    a.push(rand(5, 25));
}

console.log(a);