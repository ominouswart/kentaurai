function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let a = rand(0, 25);
let b = rand(0, 25);
let c = rand(0, 25);

// a b c    b a c    c a b    b c a    a c b      c b a      

console.log(a, b, c);



if ((a > b && c > a) || (a > c && b > a)) {
    result = a;
} else if ((b > a && c > b) || (a > b && b > c)) {
    result = b;
} else {
    result = c;
}

console.log(result);
