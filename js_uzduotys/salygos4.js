function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let a = rand(0, 2);
let b = rand(0, 2);
let c = rand(0, 2);
let d = rand(0, 2);

console.log(a, b, c, d);

let nuliai = 0;
let vienetai = 0;
let dvejetai = 0;

if (a == 0) {
    nuliai++;
} else if (a == 1) {
    vienetai++;
} else {
    dvejetai++;
}
if (b == 0) {
    nuliai++;
} else if (b == 1) {
    vienetai++;
} else {
    dvejetai++;
}
if (c == 0) {
    nuliai++;
} else if (c == 1) {
    vienetai++;
} else {
    dvejetai++;
}
if (d == 0) {
    nuliai++;
} else if (d == 1) {
    vienetai++;
} else {
    dvejetai++;
}

console.log('nuliai:', nuliai,'vienetai:', vienetai,'dvejetai:', dvejetai);