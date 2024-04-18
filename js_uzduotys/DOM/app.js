// 1.

const h1 = document.querySelector('body h1');

console.log(h1.innerText);

// 2.

const address = document.querySelector('#contacts');

console.log(address.innerText);

// 3.

const starText = document.querySelector('body i + i');

console.log(starText.innerText);

// 4.

const newAnimals = document.querySelectorAll('#gyvates li');

newAnimals.forEach(a => {
    if (a.innerText != 'PATINKA') {
        console.log(a.innerText);
    }
});


// 5.

const animalType = document.querySelectorAll('.main');

const animalTypeSpan = document.querySelector('.main span');


// animalType.forEach(a => {
//     if (a.innerText == 'Gyvatės Atsinaujinom') {
//         a.innerText = 'Gyvatės';
//         console.log(a.innerText);
//     } else {
//         console.log(a.innerText);
//     }
// });


// 6.

const zirafos = document.querySelectorAll('#zirafos li');

let zirafuKiekis = 0;

zirafos.forEach(a => {
    if (a.innerText != 'PATINKA') {
        zirafuKiekis++;
    }
});

console.log('zirafu yra: ', zirafuKiekis);


// 7.

const newZirafos = document.querySelectorAll('#zirafos .new');

newZirafos.forEach(a => console.log(a.innerText));


// 8.

let typeCount = 0;

animalType.forEach(a => typeCount++);

console.log('rusiu yra: ', typeCount);


// 9.

// const tipas = document.querySelectorAll('div ul');

// let highestNmbr = 0;

// let tipasArray = [...tipas];
// console.log(tipasArray);

// tipasArray.forEach(a => {
//     for (i = 0; i < a.length; i++) {
//         if (a[i].length > highestNmbr.length) {
//             highestNmbr = a[i];
//             console.log(highestNmbr);
//         }
//     }
// });

// console.log('daugiausia gyvunu: ', highestNmbr);


// 10.

const prices = document.querySelectorAll('.prices h2');

// B.
// 1.

h1.innerText = 'Zoo parkas';

// 2.

const stars = document.querySelectorAll('body i');

stars.forEach(s => {
    if (s.innerText == '***') {
        s.innerText += '**';
    }
});


// 3.

const carn = document.querySelector('#plesrunai');

carn.innerHTML += '<li>Leopardas</li>';

// 4.

const gyv = document.querySelector('#gyvates');

const li = document.createElement('li');

const sliek = document.createTextNode('Juru sliekas');

li.appendChild(sliek);

gyv.insertBefore(li, gyv.childNodes[0]);

// 5.

const span = document.createElement('span');

const nauja = document.createTextNode(' Atsinaujinom');

span.appendChild(nauja);

animalType.forEach(a => {
    if (a.innerText == 'Žoliaėdžiai') {
        a.insertAdjacentElement("beforeend", span);
    }
});


// 6.

// const spanNew = document.querySelectorAll('.main span');

const anim = document.querySelectorAll('body .main');

anim.forEach(s => {
    const spanNew = s.querySelector('span');
    if (spanNew && s.innerText.trim() === 'Gyvatės') {
        span.remove();
    }
});