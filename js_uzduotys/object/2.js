class Pinigine {

    constructor() {
        this.popieriniaiPinigai = 0;
        this.metaliniaiPinigai = 0;
    }

    ideti(kiekis) {
        if (kiekis <= 2) {
            this.metaliniaiPinigai += kiekis;
        } else {
            this.popieriniaiPinigai += kiekis;
        }
    }

    skaiciuoti() {
        console.log(`wallet got ${this.metaliniaiPinigai + this.popieriniaiPinigai} money`);
        console.log(this);
    }
}

const wallet = new Pinigine();

wallet.ideti(2);

wallet.ideti(12);

wallet.skaiciuoti();

