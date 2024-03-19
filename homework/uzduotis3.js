function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let word = 'Labas';

for (var a = 0; a < 5; a++) {
    console.log(word);
}


console.clear();

let what1 = rand(5, 10);

for (let i = 0; i < what1; i++) {
    console.log(word);
}