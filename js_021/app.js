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

const colors = ['skyblue', 'orange', 'crimson', 'gray'];

const vz = document.querySelector('a');


vz.addEventListener('click', e => {
    e.preventDefault();
    console.log('valio');
});

document.querySelector('button.select').addEventListener('click', _ => {
    const value = document.querySelector('select').value;
    console.log(value);
});

document.querySelector('button.cb').addEventListener('click', _ => {
    document.querySelectorAll('[type="checkbox"]').forEach(c => {
        if (c.checked) {
            console.log(c.value);
        }
    });
});

document.querySelector('button.ra').addEventListener('click', _ => {
    document.querySelectorAll('[type="radio"]').forEach(c => {
        if (c.checked) {
            console.log(c.value);
        }
    });
});

document.querySelector('button.color').addEventListener('click', _ => {
    const value = document.querySelector('[type="color"]').value;
    document.querySelector('.box.color').style.backgroundColor = value;
    console.log(value);
});

document.querySelector('button.ta').addEventListener('click', _ => {
    const value = document.querySelector('textarea').value;
    console.log(value);
});

let selectHtml = '<select>';

colors.forEach(c => {
    selectHtml += `<option value="${c}">${c}</option>`;
});

selectHtml += '</select>';

document.querySelector('.my-colors').innerHTML = selectHtml;


document.querySelector('.go').addEventListener('click', _ => {
    const value = document.querySelector('.my-colors select').value;
    document.querySelector('.go').style.backgroundColor = value;
    console.log(value);
});

document.querySelector('button.add').addEventListener('click', _ => {
    const sumTag = document.querySelector('.digits .sum');
    let sum = parseInt(sumTag.innerText);
    document.querySelectorAll('.digits [type="radio"]').forEach(c => {
        if (c.checked) {
            const value = parseInt(c.value);
            sum += value;
        }
    });
    sumTag.innerText = sum;
});