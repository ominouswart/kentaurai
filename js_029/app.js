
const obj = {
    animal: 'Fox',
    tail: '30'
}




class Fox {

    #age = '';

    constructor(tail, c) {
        this.tail = tail;
        this.color = c;
    }

    get niceColor() {
        return 'Fox color: ' + this.color;
    }

    get age() {
        return this.#age;
    }

    set age(a) {
        if (a > 20) {
            a = 20;
        }
        this.#age = a + ' years';
    }

    add10() {
        this.tail += 10;
    }

}

const obj2 = new Fox(30, 'Brown');
const obj3 = new Fox(20, 'White');

obj3.add10();

obj2.add10();
obj2.add10();

obj2.age = 5;


console.log(obj, obj2, obj3);

obj3.color = 'Blue';

console.log(obj3.color);

console.log(obj2.niceColor);

console.log(obj2.age);

