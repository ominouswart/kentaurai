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

// 7.

const grass = document.querySelectorAll('#zoliaedziai li');

grass.forEach(g => {
    if (g.innerText == 'Laukinė kiaulė') {
        g.remove();
    }
});

// 8.

const h3 = document.createElement('h3');

const h3No = document.createTextNode('Neglostyti!');

h3.appendChild(h3No);

anim.forEach(a => {
    if (a.innerText == 'Plėšrūnai') {
        a.insertAdjacentElement('afterend', h3);
    }
});

// 9.

const h2 = document.createElement('h2');

const priceKid = document.createTextNode('Studentas 3eur');

h2.appendChild(priceKid);

prices.forEach(p => {
    if (p.innerText == 'Vaikas: 2eur') {
        p.insertAdjacentElement('afterend', h2);
    }
});

// 10.

const carnList = carn.querySelectorAll('li');

// let likeButton;

// for (i = 0; i < carnList.length; i++) {
//     if (carnList[i].className === "like-button") {
//         likeButton = carnList[i];
//         carn.removeChild(className("like-button"));
//         break;
//     }
// }

// let carnSort = Array.from(carnList).sort((a, b) => a.textContent.localeCompare(b.textContent));

// if (PATINKA) {
//     carn.insertBefore('PATINKA', carn.firstChild);
// }

// carnSort.forEach(i => {
//     carn.appendChild(i);
// });


// C.

// 1.

h1.style.color = 'crimson';

// 2.

if (address != span) {
    address.style.color = 'gray';
}

// 3.

// animalType.style.color = 'cyan';

// 4.

// likeButton = document.querySelectorAll('.like-button');

const allList = document.querySelectorAll('li').forEach(a => {
    if (a.innerText == 'PATINKA') {
        a.style.border = '1px solid black';
    }
});

// 5.

newRats = document.querySelectorAll('.new').forEach(r => {
    r.style.color = 'yellow';
    r.style.backgroundColor = 'gray';
});

// 6.

grass.forEach(g => {
    if (g.innerText == 'Zuikis') {
        g.style.display = 'none';
    }
});

// 7.

const bbz = document.querySelectorAll('li').forEach(a => {
    a.style.listStyle = 'none';
});

// 8.

const listParent = document.querySelectorAll('ul li').forEach(a => {
    a.style.margin = '1rem';
});

// 9.

const naujiena = document.querySelectorAll('.main span');
naujiena.forEach(n => {
    n.style.color = 'crimson';
});

// 10.

const blable = document.querySelectorAll('.main span');

const flashing = _ => {
    blable.forEach(b => {
    if (b.style.color == 'crimson') {
        b.style.color = 'white'
    } else {
        b.style.color = 'crimson';
    }
});
}

setInterval(flashing, 300);