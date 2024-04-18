function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const africa = ['Zebras', 'Liūtas',  '', 'Raganosis', '','Raganosis', 'Begemotas'];
const australia = ['Kengūra', 'Ančiasnapis', 'Dingo', 'Atsirado', 'Strutis'];

// 1.

const button = document.querySelector('button');

const h2 = document.querySelectorAll('h2');


button.addEventListener('click', _ => {
    h2.forEach(h => {
        h.innerText = rand(1, 6);
    });
    if (h2[0].innerText == h2[1].innerText) {
        h2.forEach(h => {
            h.style.color = 'red';
        });
    } else {
        h2.forEach(h => {
            h.style.color = '';
        });
    }
});


// 2.

let nmr = [];

const h3Btn = document.querySelector('.h3Btn');

const h3 = document.querySelector('h3');

h3Btn.addEventListener('click', _ => {
    nmr.push(rand(1, 10));
    console.log(nmr);
    let sum = 0;
    for (i = 0; i < nmr.length; i++) {
            sum += nmr[i];
        }
    h3.innerText = sum;
});


// 3.

const ul = document.querySelector('ul');

africa.forEach(a => {
    if (a.length > 0) {
        const li = document.createElement('li');
        const animal = document.createTextNode(a);
        li.appendChild(animal);
        ul.appendChild(li);
    }
});


// 4.

// const h5 = document.querySelector('h5');

// let added = 0;

// const plus = document.querySelector('.plus').addEventListener('click', _ => {
//     document.querySelectorAll('input').forEach(i => {
//         added += i;
//     });
// });

// const minus = document.querySelector('.minus');


const h5 = document.querySelector('h5');
const i1 = document.querySelector('.i1');
const i2 = document.querySelector('.i2');
const u41 = document.querySelector('.u41');
const u42 = document.querySelector('.u41');

u41.addEventListener('click', _ => {
    const value1 = parseFloat(i1.value);
    const value2 = parseFloat(i2.value);
    
    const rez = value1 + value2;

    h5.innerText = rez;
});

u42.addEventListener('click', _ => {
    const value1 = parseFloat(i1.value);
    const value2 = parseFloat(i2.value);
    
    const rez = value1 - value2;

    h5.innerText = rez;
});


// 5.

const australiaUl = document.querySelector('.australia');

let html = '';

australia.forEach(a => {
    if (a != 'Dingo') {
        html += `<li>${a}</li>`;
    } else {
        html += `<li style=:color:skyblue;">${a}</li>`;
    }
});

australiaUl.innerHTML = html;