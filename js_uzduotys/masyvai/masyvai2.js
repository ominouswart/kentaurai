function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const a = [];

for (i = 0; i <= 29; i++) {
    a.push(rand(5, 25));
}

console.log(a);

// a)

let desemtai = 0;

for (i = 0; i <= 29; i++) {
    if (a[i] == 10) {
        desemtai++
    }
}

console.log('desemtai: ', desemtai);

// b)

let highest = a[0];

for (i = 0; i <= 29; i++) {
    if ( a[i] > highest) {
        highest = a[i];
    }
}

console.log('highest: ', highest);

// c)

let poriniai = 0;

for (i = 0; i <= 29; i++) {
    if (a[i] % 2 == 0) {
        poriniai = poriniai + a.indexOf(a[i]);
    }
}

console.log(poriniai);


// d)

