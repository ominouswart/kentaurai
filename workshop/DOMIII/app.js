const container = document.querySelector('.container');

const button = document.querySelector('button');

const span = document.querySelector('span');


const generateColor = () => {
    const randomColor = Math.random().toString(16).substring(2,8);
    console.log(randomColor);
    
    setInterval(_ => {
        container.style.backgroundColor = '#' + randomColor;
        span.innerText = '#' + randomColor;
    }, 500);
}


button.addEventListener('click', generateColor)