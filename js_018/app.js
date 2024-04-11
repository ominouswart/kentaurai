function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const animals = document.querySelectorAll('.test ul li');

animals.forEach(a => console.log(a.innerText));

// PIGESNIS

const lastLi = document.querySelector('.test ul li:last-child');

lastLi.insertAdjacentHTML('afterend', '<li>Beaver</li>');



// BRANGUS

const ul = document.querySelector('.test ul');

ul.innerHTML += '<li>Wolf</li>';

const animals2 = document.querySelectorAll('.test ul li');


animals2.forEach((a, i) => {
    if (i % 2 == 0) {
        a.style.color = 'blue';
    } else {
        a.style.fontSize = '20px';
    }
});


animals2.forEach(a => {
    if (a.innerText == 'Raccoon' || a.innerText == 'Fox') {
        a.innerText += '------*';
    }
});




const button = document.querySelector('button');


button.addEventListener('click', e => {
    console.log('ku ku', e.target);
});

button.addEventListener('mouseenter', e => {
    console.log('opa', e.target);
});


const redToOrange = document.querySelector('.red');

redToOrange.addEventListener('click', _ => {
    if (redToOrange.dataset.squareColor == 'orange') {
        redToOrange.dataset.squareColor = 'red';
        redToOrange.style.backgroundColor = '#da441e';
        redToOrange.style.borderColor = '#ff4500';
    } else {
        redToOrange.dataset.squareColor = 'orange';
        redToOrange.style.backgroundColor = '#87ceeb66';
        redToOrange.style.borderColor = '#87ceeb';
    }

});