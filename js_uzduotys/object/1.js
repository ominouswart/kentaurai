// 1.

class Kibiras1 {

    constructor(akmenuKiekis) {
        this.akmenuKiekis = 0;
    }

    prideti1Akmeni() {
        this.akmenuKiekis ++;
    }
    
    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis += kiekis;
    }

    kiekPririnktaAkmenu() {
        console.log(this.akmenuKiekis);
    }

    perpiltiVisusAkmenis() {
        const kibireBuvo = this.akmenuKiekis;
        this.ispiltiVisusAkmenis();
    }

    ispiltiVisusAkmenis() {
        this.akmenuKiekis = 0;
    }
}

const akmenysKibire = new Kibiras1;

const akmenys2 = new Kibiras1;

akmenysKibire.prideti1Akmeni();

akmenysKibire.pridetiDaugAkmenu(23);

akmenysKibire.kiekPririnktaAkmenu();

akmenysKibire.ispiltiVisusAkmenis();

akmenysKibire.kiekPririnktaAkmenu();

akmenysKibire.pridetiDaugAkmenu(34);

akmenys2.pridetiDaugAkmenu(akmenysKibire.perpiltiVisusAkmenis());

akmenys2.kiekPririnktaAkmenu();

// 2.