function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const animals = [
    {animal: 'Raccoon', color: 'skyblue'},
    {animal: 'Fox', color: 'orange'},
    {animal: 'Wolf', color: 'gray'},
    {animal: 'Rabbit', color: 'pink'},
];


// const body = document.querySelector('body');

// let list = '<ul></ul>';

// body.innerHTML = list;

// const bodyUl = document.querySelector('body ul');

// let li = '';

// for (i = 0; i < animals.length; i++) {
//     li += '<li></li>';
// }

// bodyUl.innerHTML = li;

// const ulLi = document.querySelectorAll('body ul li');

// for (i = 0; i <ul animals.length; i++) {
//     ulLi.innerText = animals[i];
// }


let html = '<ul>';

animals.forEach(a => html += `<li style = 'color:${a.color};'>` + a.animal + '</li>');

html += '</ul>';

const test = document.querySelector('.test');

// test.innerHTML = html;



test.classList.add('back');

test.classList.remove('test');


console.log(test.classList.contains('test'));
console.log(test.classList.contains('back'));

// setInterval(_ => {
//     test.classList.toggle('back');
// }, 1000);


const topas = document.querySelector('.top');
// const topas2 = document.querySelector('.top2');

// top.innerHTML = '<h1>labas</h1>';


const h1 = document.createElement('h1');
// const h2 = document.createElement('h2');


const text = document.createTextNode('labas');
// const text2 = document.createTextNode('ate');


h1.appendChild(text);
// h2.appendChild(text2);

topas.appendChild(h1);
// topas.appendChild(h2);

h1.remove();

topas.appendChild(h1);

// topas2.appendChild(h1);
// h1 yra perrasomas is topas i topas2


const ul = document.createElement('ul');

animals.forEach(a => {
    const li = document.createElement('li');
    const textas = document.createTextNode(a.animal);
    li.appendChild(textas);
    li.style.color = a.color;
    ul.appendChild(li);
});

test.appendChild(ul);