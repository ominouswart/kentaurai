function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// let a;

// for (i = 0; i <= 100; i++) {
//     a = a + 1;
//     console.log(a);
// }

// for (i = 100; i >= 1; i--) {
//     console.log(i);
// }

// for (i = 0; i <= 100; i += 2) {
//     console.log(i);
// }

// let suma = 1;
// let galas;

// for (i = 1; i < 9; i++) {
//     suma = suma * 10 + 1;
//     galas = suma + 3
// }

// console.log(galas);

// console.clear();

// for (i = 1; i <= 100; i++) {
//     if (i % 3 === 0) {
//         console.log('Fizz');
//     } else {
//         console.log(i);
//     }
// }

// // i % 3 === 0 reiskias i dalinant is 3

// console.clear();

// let bam = 0;

// for (i = 1; i <= 100; i++) {
//     bam += i;
// }

// console.log(bam);

// console.clear();

// let bal = 0;

// for (i = 1; i <= 100; i++) {
//     bal += i % 2 ? i : 0;
// }

// console.log(bal);



for (i = 1; i <= 10; i++) {

    let random = rand(0, 7);

    console.log('metimas: ', i, 'rezultatas: ', random);

    if (random == 2) {
        break;
    }


}

console.clear();


let count = 0;
let number = 0;

do {
    number = rand(0, 7);
    count++
    console.log('metimas: ', count, 'rezultatas: ', number);


} while (count != 10 && number != 2);

console.clear();


for (let i = 1; i <= 10; i++) {

    let random = rand(0, 7);

    console.log('metimas: ', i, 'rezultatas: ', random);

    if (random == 2) {
        continue;
    }

    console.log('Imame');
} 

console.clear();


hello: for (let i = 1; i <= 3; i++) {

    console.log('BIG: ', i);

    for (let i = 1; i <= 3; i++) {
        console.log('small: ', i);
        
        if (i == 2) {
            break hello;
        }
    }
}

