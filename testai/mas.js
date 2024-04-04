function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


const bitGirls = ['Edita', 'Lina', 'Brigita', 'Deimantė', 'Justė'];
const cats = ['Murka', 'Rainius', 'Meilutė', 'Bosas', 'Dičkis'];


// 1.
bitGirls.unshift('Nauseda');

console.log(bitGirls);

// 2. + 3.
let bitCats = [['Murka'], ['Rainius'], ['Meilutė'], ['Bosas'], ['Dičkis']];
let stori = 0;
let normalus = 0;

for (i = 0; i < bitCats.length; i++) {
    let svoris = rand(0, 1);
    console.log(svoris);
    if (svoris == 1) {
        bitCats[i].push('storas');
        stori++
    } else {
        bitCats[i].push('normalus');
        normalus++
    }
}
console.log(bitCats);
console.log('storu yra: ', stori);
console.log('normaliu yra: ', normalus);



// 5.
// const happyCats = bitGirls.concat(cats);
// console.log(happyCats)

// bitCats.unshift('Barsukas');

// for (i = 0; i < bitCats.length; i++) {
//     bitCats[i].splice(1, 1, bitGirls[i]);
// }

// console.log(bitCats);


const happyCats = [];

for (let i = 0; i < bitGirls.length; i++) {
    if (i == 0) {
        happyCats.push([bitGirls[i], 'Barsukas']);
    } else {
        happyCats.push([bitGirls[i], bitCats[i - 1][0]]);
    }
}


console.log(happyCats);