class Kibiras1 {

    #pridetiDaugAkmenu = 0;

    constructor(akmenuKiekis = 0) {
        this.akmenuKiekis = akmenuKiekis;
    }

    get prideti1Akmeni() {
        return this.akmenuKiekis += 1;
    }

    get pridetiDaugAkmenu() {
        return this.#pridetiDaugAkmenu;
    }
    
    set pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis += kiekis;
    }

    get kiekPririnktaAkmenu() {
        return this.akmenuKiekis;
    }
}

const akmenysKibire = new Kibiras1();

akmenysKibire.prideti1Akmeni;

akmenysKibire.pridetiDaugAkmenu = 54;

console.log(akmenysKibire.kiekPririnktaAkmenu);