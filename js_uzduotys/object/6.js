class Pinigine {

    constructor() {
        this.popieriniaiPinigai = [];
        this.metaliniaiPinigai = [];
    }

    ideti(kiekis) {
        if (kiekis <= 2) {
            this.metaliniaiPinigai.push(kiekis);
        } else {
            this.popieriniaiPinigai.push(kiekis);
        }
    }

    monetos() {
        const kiekis = this.popieriniaiPinigai.length;
        const visoSuma = this.popieriniaiPinigai.reduce((suma, m) => suma + m);
        return `banknotu kiekis: ${kiekis}, o suma ${visoSuma}`;
    }

    banknotai() {
        const kiekis = this.metaliniaiPinigai.length;
        const visoSuma = this.metaliniaiPinigai.reduce((suma, m) => suma + m);
        return `Monetu kiekis: ${kiekis}, o suma ${visoSuma}`;
    }

    skaiciuoti() {
        console.log(`wallet got ${this.banknotai()} and ${this.monetos()}`);
        console.log(this);
    }
}

const wallet = new Pinigine();

wallet.ideti(2);

wallet.ideti(0.2);

wallet.ideti(1.5);

wallet.ideti(12);

wallet.skaiciuoti();


