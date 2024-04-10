function pavadinimas() {
    console.log('Labas Pasauli');
}

pavadinimas();


const rodykline = () => {
    console.log('Labas Pasauli 2');
}

rodykline();



function add(a, b) {
    return a + b;
}

console.log(add(10, 34));

const suma = add(13, 41);

console.log(suma);


const add2 = (a, b) => a + b;

console.log(add2(33, 2));



function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(10));


function greeting(name) {
    return console.log(`Labas ${name}`);
}

greeting('Vaaaaaa');


function factorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    } else {
        return number * factorial(number - 1);
    }
}

console.log(factorial(5));


function celsToFahr(celsius) {
    return (celsius * 9/5) + 32;
}

console.log(celsToFahr(32));



function getMaxNumber(numbersFromArr) {
    return Math.max(...numbersFromArr);
}

console.log(getMaxNumber([5, 100, -15, 200, 1, 3]));


function getRandom(min, max) {
    return Math.floor(Math.random() * (max-min + 1) + min);
}


console.log(getRandom(9, 11));



function getUnique(array) {
    return [...new Set(array)];
}


console.log(getUnique([1, 1, 2, 2, 30, 2, 15, 2, 14, 14, 20]));


const unique = getUnique([1, 1, 2, 2, 30, 2, 15, 2, 14, 14, 20]);

console.log(unique);



const arr = [1, 1, 2, 2, 30, 2, 15, 2, 14, 14, 20];


function squareValues(arr) {
    return arr.map((item) => {
        return item * item
    });
}

console.log(squareValues(arr));



function sumAllElements() {
    let sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}


let result = sumAllElements(1, 15, 4);

console.log(result);