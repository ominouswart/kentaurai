window.addEventListener('load', _ => {





const h1 = document.querySelector('h1');
const addInput = document.querySelector('input.add');
const addButton = document.querySelector('button.add');
const delButton = document.querySelector('button.del');

if (localStorage.getItem('myH1') !== null) {
    h1.innerText = localStorage.getItem('myH1'); // jeigu nera grazina null
}

console.log(JSON.parse(localStorage.getItem('arrayGood')));


addButton.addEventListener('click', _ => {
    const addValue = addInput.value;
    localStorage.setItem('myH1', addValue);
    localStorage.setItem('array', [1, 2, 3]);
    localStorage.setItem('arrayGood', JSON.stringify([1, 2, 3]));
    const d = '400';
    localStorage.setItem('d', d);
    localStorage.setItem('d2', JSON.stringify(d));
    h1.innerText = addValue;
});

delButton.addEventListener('click', _ => {
    localStorage.removeItem('myH1');
    h1.innerText = '---';
});

const color = document.querySelector('.color');

if (localStorage.getItem('color') !== null) {
    color.value = localStorage.getItem('color');
}

color.addEventListener('change', _ => {
    localStorage.setItem('color', color.value)
});


let from = 10;

let timerId;

const h5 = document.querySelector('h5');

const timer = document.querySelector('.timer');

h5.innerText = from

timer.addEventListener('click', _ => {

    clearInterval(timerId);

    timerId = setInterval(_ => {
        from--;
        if (from <= 0) {
            clearInterval(timerId);
        }
        h5.innerText = from;
    }, 1000);
});






});