function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let zvakes = rand(5, 3000);

console.log(zvakes)

if (zvakes < 1000) {
    console.log('Zvakes kainuos ' + zvakes);
} else if (1000 <= zvakes && zvakes < 2000) {
    console.log('Zvakes kainuos ' + (zvakes - (zvakes * 0.03)));
} else {
    console.log('Zvakes kainuos ' + (zvakes - (zvakes * 0.04)));
}