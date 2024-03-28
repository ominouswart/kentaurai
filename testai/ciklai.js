function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// 1.


let ratai = 10;

// for (i = 0; i < 10; i++) {
//     console.log(ratai);
//     ratai = ratai - 1;
// }

// 2.

// let greitis;
// let greicioSuma = 0;

// for (i = 0; i < 10; i++) {
//     greitis = rand(120, 220);
//     console.log(greitis);
//     greicioSuma = greicioSuma + greitis;
// }

// let vidutinis = greicioSuma / 10;
// console.log('vidutinis greitis: ', vidutinis);

// 3.

// let kuras;
// let kuroKiekis = 0;

// for (i = 0; i < 10; i++) {
//     kuras = rand(3, 6);
//     kuroKiekis = kuroKiekis + kuras;
//     console.log(kuras);
//     if (kuroKiekis > 44) {
//         console.log('Kuro neuzteks');
//         break
//     }
// }
// console.log('kuro sunaudota: ', kuroKiekis);


// 4.

let minSpeed = 121;
let ziedai;
let posukiai;

for (i = 0; i < 10; i++) {
    for (let j = 0; j < 5; j++) {
        const speed = rand(20, 120);
        if (speed < minSpeed) {
            minSpeed = speed;
        }
    }
}

console.log('min: ', minSpeed);

console.clear();


let km = 1;
let kangaroo;
let steering;
let brakes;

do {
    kangaroo = !!rand(0, 1);
    steering = !!rand(0, 1);
    brakes = !!rand(0, 1);
    console.log(km, kangaroo, steering, brakes);
    km++;
} while (!kangaroo || steering || brakes);

console.clear();




let as = {
    vardas: 'neganas',
    pavarde: 'mcneganas',
    amzius: 22
};

console.log(as);

as.amzius = as.amzius + 5;

console.log(as);

const person1 = {
    name: 'Briedis',
    surname: 'Miškinius',
    age: 15
};
 
const person2 = {
    name: 'Vilkas',
    surname: 'Miškinius',
    age: 53
};
 
const person3 = {
    name: 'Lapė',
    surname: 'Miškinius',
    age: 34
};
 
const people = [person1, person2, person3];

console.log(people);

for (i = 0; i < people.length; i++) {
    people[i].age = people[i].age + 5;
}

console.table(people);

console.clear();

let vidurkis = 0;

for (i = 0; i < people.length; i++) {
    vidurkis = vidurkis + people[i].age;
}

vidurkis = vidurkis / 3;

console.log('vidurkis: ', vidurkis);

// let ab = rand(0, 1);


// if (ab == 0) {
//     console.log('A');
// } else {
//     console.log('B');
// }


// let vau = rand(0, 4);

// if (vau <= 2) {
//     console.log(vau);
//     console.log('MAZESNIS');
// } else {
//     console.log(vau);
//     console.log('DIDESNIS')
// }

let maxAmzius = people[0];

for (i = 0; i < people.length; i++) {
    if (people[i].age > maxAmzius.age) {
        maxAmzius = people[i];
    }
}

console.log('vyriausias: ', maxAmzius.name);


const person4 = {
    name: 'Ziurke',
    surname: 'Miškinius',
    age: 143
};

people.unshift(person4);

console.log(people);

console.clear();

const colors = ['crimson', 'gold', 'pink', 'purple', 'skyblue', 'orange'];


let eggs = [];


for (i = 0; i < 10; i++) {
    eggs.push(colors[rand(0, colors.length - 1)]);
}

console.log(eggs);

for (let i = 0; i < eggs.length; i++) {
    console.log(eggs[i]);
}