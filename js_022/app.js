const animal1 = 'Antis';
const animal2 = 200;
const animal3 = {
    a: 'Antis',
    w: 200
}

const zoo = document.querySelector('.zoo');

zoo.dataset.a1 = animal1;
zoo.dataset.a2 = animal2;
zoo.dataset.a3 = JSON.stringify(animal3);

const readAnimal1 = zoo.dataset.a1;
const readAnimal2 = parseFloat(zoo.dataset.a2);
const readAnimal3 = JSON.parse(zoo.dataset.a3);

console.log(readAnimal1, typeof readAnimal1);
console.log(readAnimal2, typeof readAnimal2);
console.log(readAnimal3, typeof readAnimal3);

