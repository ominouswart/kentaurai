function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let a = rand(5, 10);

if (a > 7) {
    for (i = 0; i < a; i++) {
        console.log(a);
    }
} else {
    console.log('numeris lygus arba mazesnis nei 7')
}