function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let vidinis;
let kartai = 0;
let kartaiDidelis = 0;
let kartaiMazas = 0;

do {
    kartaiDidelis++
    vidinis = rand(5, 10);

    if (vidinis === 5) {
    kartai++
    } else {
        kartai = 0;
    }

    console.log('Vidinis: ', vidinis);

    for (let i = 0; i < vidinis; i++) {
        kartaiMazas++
        // console.log('A');
    }

    // if (kartai == 3) {
    //     break;
    // } else {
    //     vidinis = 6;
    // }


} while (kartai != 3) //(vidinis != 5)//




console.log('Kartai didelis: ', kartaiDidelis);
console.log('Kartai mazas: ', kartaiMazas);
