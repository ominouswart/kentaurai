const btn = document.querySelector('button');
const para = document.querySelector('p');
const url = "https://api.chucknorris.io/jokes/random";


btn.addEventListener('click', getJoke => {
    function getJoke() {
        fetch(url)
        .then(res => res.json())
        .then(data => para.innerText = data.value);
    }
    getJoke();
});