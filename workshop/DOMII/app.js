const count = document.querySelector('.count');

const input = document.querySelector('input');


function counts() {
    count.innerHTML = input.value.length
}

input.addEventListener('keyup', counts);