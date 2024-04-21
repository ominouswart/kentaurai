function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const figures = [
    {id: 1, name: 'one', color: 'red', figure: 'circle'},
    {id: 2, name: 'two', color: 'green', figure: 'triangle'},
    {id: 3, name: 'three', color: 'blue', figure: 'square'},
    {id: 4, name: 'four', color: 'yellow', figure: 'circle'},
    {id: 5, name: 'five', color: 'orange', figure: 'triangle'},
    {id: 6, name: 'six', color: 'gray', figure: 'square'},
    {id: 7, name: 'seven', color: 'black', figure: 'circle'},
    {id: 8, name: 'eight', color: 'brown', figure: 'triangle'},
    {id: 9, name: 'nine', color: 'skyblue', figure: 'square'},
];


// A.

// 1.

const h1 = document.querySelector('h1');

console.log(h1.innerText);

// 2.

const address = document.querySelector('#contacts');

console.log(address.innerText);