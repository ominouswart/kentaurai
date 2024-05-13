class Troleibusas {

    static visiKeleiviai = 0;

    static bendrasKeleiviuSkaicius(keleiviuSkaicius) {
        this.visiKeleiviai += keleiviuSkaicius;
    }

    constructor() {
        this.keleiviuSkaicius = 0;
    }

    ilipa(keleiviuSkaicius) {
        this.keleiviuSkaicius += keleiviuSkaicius;
        this.constructor.bendrasKeleiviuSkaicius(keleiviuSkaicius);
    }

    islipa(keleiviuSkaicius) {
        const islipo = this.keleiviuSkaicius < keleiviuSkaicius ? this.keleiviuSkaicius : keleiviuSkaicius;
        this.keleiviuSkaicius -= islipo;
        this.constructor.bendrasKeleiviuSkaicius(-1 * islipo);
    }

    keleiviuSkaiciusVisuoseTroleibusuose() {
        console.log(`visuose troileibusuose keleiviu yra ${this.constructor.visiKeleiviai}`);
    }

    vaziuoja() {
        console.log(`troleibuse vaziuoja ${this.keleiviuSkaicius} keleiviu`);
    }
}

const trol1 = new Troleibusas();
const trol2 = new Troleibusas();
const trol3 = new Troleibusas();

trol1.ilipa(10);
trol2.ilipa(5);
trol3.ilipa(20);

trol1.islipa(3);
trol2.islipa(20);
trol3.islipa(15);

trol3.vaziuoja();
trol3.keleiviuSkaiciusVisuoseTroleibusuose();



