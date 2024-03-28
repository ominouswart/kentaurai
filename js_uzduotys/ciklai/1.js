function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 1.

for (i = 0; i < 5; i++) {
    console.log('Labas');
}

console.clear();
// 2.

let a = 0;

// for (i = 0; i < 5; i++) {
//     a++;
//     console.log(a);
// }

console.clear();

// 3.

// for (i = 0; i < 5; i++) {
//     a = a + 10;
//     console.log(a);
// }

// 4.

let b = 48;

// for (i = 0; i < 5; i++) {
//     b = b + 1;
//     if (b == 49) {
//         console.log(b);
//     } else if (b == 50) {
//         console.log(b);
//     } else if (b == 51) {
//         console.log(b);
//     } else if (b == 52) {
//         console.log(b);
//     } else if (b == 53) {
//         console.log(b);
//     }
// }

// 5.

let c = 5;

// for (i = 0; i < 5; i++) {
//     c--
//     console.log(c);
// }

// 6.

let d = -2;

// for (i = 0; i < 5; i++) {
//     d = d + 2;
//     console.log(d);
// }

// 7.

let e;

// for (i = 0; i < 5; i++) {
//     e = rand(0, 10);
//     console.log(e);
// }

// 8.

// while (true) {
//     e = rand(0, 10);
//     if (e == 5) {
//         console.log(e);
//         break;
//     } else {
//         console.log(e);
//     }
// }

// var count = 0;
// var lastNumber;

// while (count < 4) { // Generate 4 random numbers
//     var num = Math.floor(Math.random() * 11); // Generate a random number between 0 and 10
//     console.log(num); // Print the generated number
//     count++;
//     lastNumber = num;
// }

// console.log(5);



// 9.

let suma = 0;

// do {
//     e = rand(0, 10);
//     suma = suma + e;
//     console.log(e);
// } while (suma <= 100);

// console.log(suma);


// 10.

while (true) {
    e = rand(0, 10);
    suma++
    if (e == 5 || e == 7) {
        console.log(e);
        break;
    } else {
        console.log(e);
    }
}

console.log('ciklai: ', suma);