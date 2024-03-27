function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let a = rand(0, 100);
let b = rand(0, 100);
let c = rand(0, 100);

console.log(a, b, c);

let d = (a + b + c) / 3;

console.log('Vidurkis yra ' + d);

if (10 < d && d < 90) {
    console.log('Vidurkis nera maziau nei 10 ar daugiau nei 90: ' + d);
} else {
    console.log('Vidurkis atmestas');
}