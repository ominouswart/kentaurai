const closedButton = document.querySelector('.oneButton');
const closedModal = document.querySelector('.annoyingAsf');

const openButton = document.querySelector('.arrowOrng button');
const openModal = document.querySelector('.popOut');

closedButton.addEventListener('click', _ => {
    closedModal.style.display = 'none';
    openModal.style.display = 'flex';
});

openButton.addEventListener('click', _ => {
    openModal.style.display = 'none';
    closedModal.style.display = 'flex';
});