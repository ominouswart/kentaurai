class Stikline {

    constructor(turis) {
        this.kiekis = 0;
        this.turis = turis;
    }

    ipilti(kiekis) {
        this.kiekis = Math.min(this.turis, kiekis + this.kiekis);
        return this;
    }

    ispilti() {
        const viskas = this.kiekis;
        this.kiekis = 0;
        return viskas;
    }

    stiklinejeYra() {
        console.log(`${this.turis} turio sklineje yra ${this.kiekis} ml vandens`);
    }
}

const s1 = new Stikline(200);
const s2 = new Stikline(150);
const s3 = new Stikline(100)

s3.ipilti(s2.ipilti(s1.ipilti(500).ispilti()).ispilti());

s1.stiklinejeYra();
s2.stiklinejeYra();
s3.stiklinejeYra();