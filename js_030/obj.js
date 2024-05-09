class Fox {

    static allAge = 0;
    static allFoxes = 0;

    static addAge(age) {
        this.allAge += age;
    }

    constructor(color) {
        this.color = color;
        this.age = 0;
        this.constructor.allFoxes++;
    }

    foxAge(age) {
        this.age = age;
        this.constructor.addAge(age);
    }

}

const fox1 = new Fox('brown');
const fox2 = new Fox('white');
const fox3 = new Fox('Red');

fox1.foxAge(5);
fox2.foxAge(6);
fox3.foxAge(3);

console.log(Fox.allFoxes);



console.log(fox1, fox2, fox3);
console.log('average age: ', Fox.allAge / Fox.allFoxes);