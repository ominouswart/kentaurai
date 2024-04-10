function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// const body = document.querySelector('body');

// let z = '';
// let randa = rand(0, 1);

// for (i = 0; i < 1; i++) {
//     if (randa === 1) {
//         z = '<h1>DOM 2</h1>';
//     } else {
//         z = '<h2>Sub DOM 2</h2>';
//     }
// }

// body.innerHTML = z;


// body.innerHTML = rand(0, 1) ? '<h1>DOM 2</h1>' : '<h2>Sub DOM 2</h2>';


// let valio = '<span>Valio</span>';

// body.innerHTML = valio;


// if (document.querySelector('h1')) {
//     document.querySelector('h1').innerHTML = valio;
// } else {
//     document.querySelector('h2').innerHTML = valio;
// }



const animals = document.querySelectorAll('.animals span');

console.log(animals);

animals.forEach( a => console.log(a.innerText));


const animalsArray = [...animals];

console.log(animalsArray);



// animals.forEach(a => a.innerText == 'Rabbit' && (a.innerText = 'Bunny'));

animals.forEach(a => {
    if (a.innerText == 'Rabbit') {
        a.innerText = 'Bunny';
    }
});


const h1 = document.querySelector('h1');

h1.style.color = 'skyblue';
h1.style.display = 'flex';
h1.style.justifyContent = 'center';
h1.style.fontSize = '102px';



// setInterval(_ => {
//     h1.style.color = h1.style.color == 'skyblue' ? 'crimson' : 'skyblue'
// }, 50);


const blueRed = _ => {
    if (h1.style.color == 'skyblue') {
        h1.style.color = 'crimson';
    } else {
        h1.style.color = 'skyblue';
    }
}

setInterval(blueRed, 100);

const bin = document.querySelector('.bin');

let divs = '';

for(i = 0; i < 222; i++) {
    divs += '<div></div>';
}

bin.innerHTML = divs;


const circle = document.querySelectorAll('.bin div');

const circleGo = _ => {
    circle.forEach(b => {
        if (rand(0, 1)) {
        b.style.top = rand(0, 450) + 'px';
        b.style.left = rand(0, 450) + 'px';
        }
    })
}

setInterval(circleGo, 300);