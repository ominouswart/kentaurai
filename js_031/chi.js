class Tevas {

    constructor() {
        this.pinigai = 5000;
        this.religija = 'daunas';
    }

    svilpti() {
        console.log('svvvvvvvvv');
    }

    scrolinti() {
        console.log('FB');
    }
}

class Vaikas extends Tevas {

    constructor() {
        super();
        this.islaidos = 1000;
        this.religija = 'irgi daunas';
    }

    scrolinti() {
        console.log('xujokas');
    }

}


const vaikas = new Vaikas();

vaikas.svilpti();

vaikas.scrolinti();


console.log(vaikas);