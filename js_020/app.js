function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const obj = {
    smartAnimal32: 'fox',
    funnyAnimal88: 'raccoon',
    bigAnimal105: 'wolf'
}

// const regex = /\d+/g;

// for (const a in obj) {

//     const found = a.match(regex);

//     console.log(obj[a], found[0]);
// }


const i1 = document.querySelector('.i1');

const btn = document.querySelector('button');


btn.addEventListener('click', _ => {
    const v = i1.value;

    console.log('CLICK', v);
});

i1.addEventListener('input', _ => {
    const v = i1.value;
    console.log(v);
})

const a1 = document.querySelector('.a1');

const a2 = document.querySelector('.a2');

const btn2 = document.querySelector('.calc button');

btn2.addEventListener('click', _ => {
    const mult = (parseFloat(a1.value) * parseFloat(a2.value));

    if (isNaN(a1.value) || isNaN(a2.value)) {
        console.log('ivesti ne skaiciai');
        if (isNaN(a1.value)) {
            a1.style.borderColor = 'crimson';
        }
        if (isNaN(a2.value)) {
            a2.style.borderColor = 'crimson';
        }
    } else {
        console.log(mult);
    }
});

const parent = document.querySelector('.parent');

const child = document.querySelector('.child');


parent.addEventListener('click', _ => {
    parent.style.backgroundColor = 'crimson';
});

child.addEventListener('click', event => {

    event.stopPropagation();

    child.style.backgroundColor = 'darkred';
});