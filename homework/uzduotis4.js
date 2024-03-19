function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var a = rand(5, 10);

console.log(a);

console.clear();



for (var i = 0; i < 7; i++) {
    console.log(a);
}