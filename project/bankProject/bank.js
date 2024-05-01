const firstButton = document.querySelector('header .moveForward .scamMaybe');
const header = document.querySelector('header');
const main = document.querySelector('main');

firstButton.addEventListener('click', () => {
    header.style.display = 'none';
    main.style.display = 'flex';
});