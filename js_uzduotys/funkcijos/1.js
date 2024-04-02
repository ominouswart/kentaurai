function text(word) {
    console.log(word);
}


text('blabla');


function textAndTimes(word, times = 0) {
    console.log(word);
    times++
    console.log(times);
}

textAndTimes('vauvau');



function amountOfNumbers(a) {
    if (a <= 2) {
        return 0;
    }
    
    let amount = 0;
    for (let i = 2; i < a; i++) {
        if (a % i === 0) {
            amount++
        }
    }
    return amount;
}

console.log('kiek numeriu dalijasi: ', amountOfNumbers(200));