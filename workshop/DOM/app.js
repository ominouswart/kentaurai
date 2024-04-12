const count = document.querySelector('.count');
const subtract = document.querySelector('.substract');
const reset = document.querySelector('.reset');
const add = document.querySelector('.add');
const buttons = document.querySelector('.button')



// buttons.addEventListener('click', function(e) {
//     if (e.target.classlist.contains('add')) {
//         count.innerHTML++;
//         setColor();
//     } else if (e.target.classlist.contains('substract')) {
//         count.innerHTML--;
//         setColor();
//     } else if (e.targer.classlist.contains('reset')) {
//         count.innerHTML = 0;
//         setColor();
//     }
// });








add.addEventListener('click', function() {
    count.innerHTML++;
    setColor();
});

const subtractFunc = () => {
    count.innerHTML--;
    setColor()
}

subtract.addEventListener('click', subtractFunc);


reset.addEventListener('click', function() {
    count.innerHTML = 0;
    setColor();
});

const setColor = () => {
    if (count.innerHTML > 0) {
        count.style.color = 'yellow';
    } else if (count.innerHTML < 0) {
        count.style.color = 'red';
    } else {
        count.style.color = 'white';
    }
}