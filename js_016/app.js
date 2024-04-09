function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// DOM - dokumentinis objektinis modelis


const div1 = document.querySelector('div');
// querySelector paima tik pati pirma suradusi elementa
const div2 = document.querySelector('.ate');


console.log(div1, typeof div1);
// objektas, ne string'as

console.log(div2);


const h2 = document.querySelector('h2 + h2');

console.log(h2);


const iSpane = document.querySelector('span i + i');

console.log(iSpane);


let textInside = iSpane.innerText;

console.log(textInside, typeof textInside);

textInside += '------*';

iSpane.innerText = textInside;



h2.innerText = 'Pakeistas';


const pirmasH3 = document.querySelector('h3');

const antrasH3 = document.querySelector('h3 + h3');


pirmasH3.innerText = 'Vienas';

antrasH3.innerText = 'Du';



const valio = document.querySelector('.valio');

console.log(valio.innerHTML);

valio.innerHTML = '<b>888</b>'


const ulLi = document.querySelector('ul').innerHTML = '<li>Pirmasis</li>';


const olLi = document.querySelector('ol');



olLi.innerHTML = `
    <li>Zuikis</li>
    <li>Katinas</li>
`;



const big = document.querySelector('.big');

let z = '';

for (i = 0; i < 10; i++) {
    z += '<li>zuikis</li>';
}

big.innerHTML = z;



const random = document.querySelector('.random');

let r = '';

for (i = 0; i < 10; i++) {
    r += `<li> ${rand(10, 99)} </li>`;
}

random.innerHTML = r;