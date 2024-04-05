// A.
const A = [83, 55, 53, -73, 0, 8, 17, 76, 95, -1, 35, -16, -22, -94, 9, 54, 66, 30, -46, 9, 62, -9, -64, -55, 0, 19, 29, -70, 0, 51, -92, 46, 43, 58, -61, 3, -12, -58, -82, 5, 5, 97, 90, -51, 57, 72, -71, -6, 86, 34, 100, -94, 44, 80, 54, 60, 87, -94, -25, -59, -90, -3, 35, 7, -16, 26, -38, 82, 79, -61, -48, -3, 56, -32, -94, -87, -24, 86, -93, -21, 83, -71, -2, -45, 15, 39, 0, 29, -77, -97, 27, 77, 41, 0, 40, -54, 99, 70, -41, 91];
const B = [
    'the quick brown fox',
    'jumps over the lazy dog',
    'a bird in the hand',
    'is worth two in the bush',
    'an apple a day',
    'keeps the doctor away',
    'actions speak louder than words',
    'all good things must come to an end',
    'beauty is in the eye of the beholder',
    'better late than never',
    'birds of a feather flock together',
    'cleanliness is next to godliness',
    'dont bite the hand that feeds you',
    'dont count your chickens before they hatch',
    'dont put all your eggs in 1 basket',
    'every cloud has a silver lining',
    'every dog has its day',
    'every rose has its thorn',
    'fortune favors the bold',
    'good things come to those who wait',
    'a watched pot never boils',
    'haste makes waste',
    'history repeats itself',
    'cat got your tongue',
    'home is where the heart is',
    'if the shoe fits, wear it',
    'ignorance is bliss',
    'it takes two to tango',
    'arabs have 100 words for sand',
    'kill two birds with one stone',
    'laughter is the best medicine',
    'love is blind',
    'money doesnt grow on trees',
    'no pain no gain',
    'nothing ventured nothing gained',
    'once bitten twice shy',
    'practice makes perfect',
    'the early bird catches the worm',
    'the grass is always greener on the other side',
    'the pen is mightier than 10 swords',
    'theres no smoke without fire',
    'time heals all wounds',
    '5 second rule',
    'every dog has its day',
    'to err is human to forgive divine',
    '2 wrongs dont make a right',
    'when in Rome do as the Romans do',
    'where theres smoke, theres fire',
    'you cant judge a book by its cover',
    'you cant make an omelette without breaking eggs',
    'you reap what you sow',
    'youre never too old to learn'
];

const C = [94, true, 'technology', 'year', 34, true, 'flower', 13, 'future', undefined, 0, 12, 'water', 'false', 'school', 'cat', false, 'family', 70, undefined, 'life', 'government', 'mountain', 13, true, 'year', 'sun', 50, 'day', 'food', 0, 'health', 70, 31, 16, 85, 'car', 'internet', 100, 'money', 26, 'fire', 76, [], 45, 'time', 'music', 93, 0, 'love', 69, {}, 96, 0, false, 'air', 'star', 24, 9, 'thing', 19, 'house', 'way', 'true', 90, '0', 'woman', 'time', 'job', '72', '22', 'city', 'history', 47, 'man', 92, 'child', 73, '0', 16, 63, 48, 'country', 45, 'tree', true, 57, 'earth', 96, [], 'hope', 'dream', 39, 43, 'art', 27, 'friend', 'moon', '26', 'science', 74];


// 1.
let max = Math.max(...A);
console.log(max);

// 2.
let min = Math.min(...A);
console.log(min);

// 3.
let aukstNeg = -Infinity;
for (let i = 0; i < A.length; i++) {
    if (A[i] < 0 && A[i] > aukstNeg) {
        aukstNeg = A[i];
    }
}
console.log(aukstNeg);

// const largestNegative = Math.max(...A.filter(num => num < 0));

// 4.
let smallerThan50 = 0;
for (let i = 0; i < A.length; i++) {
    if (A[i] < 50 && A[i] > smallerThan50) {
        smallerThan50 = A[i];
    }
}
console.log(smallerThan50);

// 5.
let teigiamiSuma = 0;
for (let i = 0; i < A.length; i++) {
    if (A[i] > 0) {
        teigiamiSuma += A[i];
    }
}

let suma = 0;
A.forEach(element => {
    if (element > 0) {
        suma += element;
    }
}) 

console.log('teigiami: ', teigiamiSuma, suma);

// 6.
let kvadSuma = 0;
for (let i = 0; i < A.length; i++) {
    if (A[i] < 0) {
        kvadSuma += (A[i] * A[i]);
    }
}

let antrKvSuma = 0;
A.forEach(element => {
    if (element < 0) {
        antrKvSuma += (element * element);
    }
})


console.log(kvadSuma, antrKvSuma);

console.clear();

// 7.
let intervSuma = 0;

for (let i = 0; i < A.length; i++) {
    if (A[i] > 25 && A[i] < 75) {
        intervSuma++
    }
}


let antraIntervSuma = 0;

A.forEach(element => {
    if (element > 25 && element < 75) {
        antraIntervSuma++
    }
});


console.log('intervalu suma: ', intervSuma, antraIntervSuma);

// 8.
let nuliai = 0;
for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) {
        nuliai++;
    }
}

let antriNuliai = 0;
A.forEach(element => {
    if (element === 0) {
        antriNuliai++;
    }
})

console.log(nuliai, antriNuliai);



// 9.
let beLiekanosIsTriju = 0;
for (let i = 0; i < A.length; i++) {
    if (A[i] % 3 == 0) {
        beLiekanosIsTriju++
    }
}

let AntrasBeLiekanosIsTriju = 0;

A.forEach(element => {
    if (element % 3 == 0) {
        AntrasBeLiekanosIsTriju++
    }
})

console.log(beLiekanosIsTriju, AntrasBeLiekanosIsTriju);

// 10.
let nmrKiekis = 0;
let vidurkioSuma = 0;
let vidurkis;

for (let i = 0; i < A.length; i++) {
    if (A[i] < 0) {
        vidurkioSuma += A[i];
        nmrKiekis++;
    }
}
vidurkis = (vidurkioSuma / nmrKiekis);

let antrasNmrKiekis = 0;
let antraVidurkioSuma = 0;
let antrasVidurkis;

A.forEach(element => {
    if (element < 0) {
        antraVidurkioSuma += element;
        antrasNmrKiekis++
    }
})
antrasVidurkis = antraVidurkioSuma / antrasNmrKiekis;


console.log(nmrKiekis, vidurkioSuma, vidurkis, antrasVidurkis);


// B.

// 1.

let longString = '';

for (let i = 0; i < B.length; i++) {
    if (B[i].length > longString.length) {
        longString = B[i];
    }
}


let secLongString = '';
B.forEach(element => {
    if (element.length > secLongString.length) {
        secLongString = element;
    }
});

console.log(longString, '__', secLongString);


// 2.
let shortString = 'blablablablablablablablablablablablablablabla';

for (let i = 0; i < B.length; i++) {
    if (B[i].length < shortString.length) {
        shortString = B[i];
    }
}



let secondShortString = 'blablablablablablablablablablablablablablabla';

B.forEach(element => {
    if (element.length < secondShortString.length) {
        secondShortString = element;
    }
});

console.log(shortString, '___', secondShortString);


// 3.

// for (let i = 0; i < B.length; i++) {
//     if (B[i][0] === 'a') {
//         console.log(B[i]);
//         break
//     }
// }

// B.forEach(element => {
//     if (element[0] === 'a') {
//         console.log(element);
//     }
// })

const startsWithA = B.filter((a) => a[0] === "a");
console.log(startsWithA);


// 4.
let mostWords = B[0];

for (let i = 1; i < B.length; i++) {
    if (B[i].split(" ").length > mostWords.split(" ").length) {
        mostWords = B[i];
    }
}


let secMostWords = 'hh';
B.forEach(element => {
  element.split();
  if (element > secMostWords) {
    secMostWords = element;
  }  
})

console.log(mostWords, secMostWords);


// 5.
let leastWords = B[0];

for (let i = 0; i < B.length; i++) {
    if (B[i].split(" ").length < leastWords.split(" ").length) {
        leastWords = B[i];
    }
}


let secLeastWords = B[0];
B.forEach(element => {
    if (element.split(" ").length < secLeastWords.split(" ").length) {
        secLeastWords = element;
    }
});

console.log(leastWords, secLeastWords);


// 6.
let moreThanFour = 0;

// for (let i = 0; i < B.length; i++) {
//     if (B[i].split(" ").length > 4) {
//         moreThanFour++;
//     }
// }

// let secMoreThanFour = 0;
// B.forEach(element => {
//     if (element.split(" ").length > 4) {
//         secMoreThanFour++;
//     }
// })
// console.log(moreThanFour, secMoreThanFour);

const fourWords = B.filter((a) => a.split(" ").length > 4);
 
console.log(fourWords.length);

// 7.
let words;
let wordCount = 0;
for (let i = 0; i < B.length; i++) {
    words = B[i].split(" ");
    wordCount += words.length;
}

let secWords;
let secWordCount = 0;
B.forEach(element => {
    secWords = element.split(" ");
    secWordCount += secWords.length;
})

console.log(wordCount, secWordCount);


// 8.
let letterSCount = 0;
for (let i = 0; i < B.length; i++) {
    for (let j = 0; j < B[i].length; j++) {
        if (B[i][j] === 's') {
            letterSCount++;
        }
    }
}

let secLetterSCount = 0;
B.forEach(element => {
    for (let i = 0; i < element.length; i++) {
        if (element[i] === 's') {
            secLetterSCount++;
        }
    }
})

console.log(letterSCount, secLetterSCount);


// 9.
let totalLetterCount = 0;
let tarpai = 0;

for (let i = 0; i < B.length; i++) {
    for (let j = 0; j < B[i].length; j++) {
        if (B[i][j] === ' ') {
            tarpai++;
        } else {
            totalLetterCount++;
        }
    }
}

let secTotalLetterCount = 0;
let secTarpai = 0;

B.forEach(element => {
    for (let i = 0; i < element.length; i++) {
        if (element[i] === ' ') {
            secTarpai++;
        } else {
            secTotalLetterCount++;
        }
    }
})

console.log(totalLetterCount, secTotalLetterCount);

// 10.
let longestWord = '';
let wordsInString;

for (let i = 0; i < B.length; i++) {
    wordsInString = B[i].split(" ");
    for (let j = 0; j < wordsInString.length; j++) {
        if (wordsInString[j].length > longestWord.length) {
            longestWord = wordsInString[j];
        }
    }
}

let secLongestWord = '';
let secWordsInString;

B.forEach(element => {
    secWordsInString = element.split(" ");
    for (let i = 0; i < secWordsInString.length; i++) {
        if (secWordsInString[i].length > secLongestWord.length) {
            secLongestWord = secWordsInString[i];
        }
    }
});

console.log(longestWord, secLongestWord);


// C

// 1.
let numberArr = C.filter(element => typeof element === 'number');
let highestNmr = Math.max(...numberArr);
console.log(highestNmr);
console.log(numberArr);

// 2.
let shortestStringInC = '.................................';
let stringArr = C.filter(element => typeof element === 'string');
for (let i = 0; i < stringArr.length; i++) {
    if (stringArr[i].length < shortestStringInC.length) {
        shortestStringInC = stringArr[i];
    }
}

let secShortestStringInC = '.................................';
C.forEach(element => {
    if (typeof element === 'string' && element.length < secShortestStringInC.length) {
        secShortestStringInC = element;
    }
})
console.log(stringArr);
console.log(shortestStringInC, secShortestStringInC);

// 3.
let nuliaiSkaiciai = 0;

for (let i = 0; i < numberArr.length; i++) {
    if (numberArr[i] === 0) {
        nuliaiSkaiciai++;
    }
}

// let antriNuliaiSkaiciai = 0;
// C.forEach(element => {
//     if (typeof element === 'number' && element === 0) {
//         antriNuliaiSkaiciai;
//     }
// })

console.log(nuliaiSkaiciai);

// 4.
let teigiamiSk = 0;

for (let i = 0; i < numberArr.length; i++) {
    if (numberArr[i] > 0) {
        teigiamiSk += numberArr[i];
    }
}

let antriTeigiamiSk = 0;

numberArr.forEach(element => {
    if (element > 0) {
        antriTeigiamiSk += element;
    }
});

console.log(teigiamiSk, antriTeigiamiSk);

// 5.
let stringLength = 0;

for (let i = 0; i < stringArr.length; i++) {
    stringLength += stringArr[i].length;
}

let secStringLength = 0;

stringArr.forEach(element => secStringLength += element.length);

console.log(stringLength, secStringLength);

// 6.
let vidutinisString;
let stringsSum = 0;

for (let i = 0; i < stringArr.length; i++) {
    stringsSum++;
}

vidutinisString = stringLength / stringsSum;


let secStringsSum = 0;


stringArr.forEach(element => secStringsSum++);

let secVidutinisString = secStringLength / secStringsSum;

console.log(vidutinisString, secVidutinisString);


// 7.
let noneOfTheAbove = 0;

for (let i = 0; i < C.length; i++) {
    if (typeof C[i] != 'string' && typeof C[i] != 'number') {
        noneOfTheAbove++;
    }
}

let secNoneOfTheAbove = 0;

C.forEach(element => {
    if (typeof element != 'string' && typeof element != 'number') {
        secNoneOfTheAbove++;
    }
})

console.log(noneOfTheAbove, secNoneOfTheAbove);

// 8.
let sum = 0;
let convert;

for (let i = 0; i < C.length; i++) {
    if (typeof C[i] === 'string' && !isNaN(Number(C[i]))) {
        convert = Number(C[i]);
        // console.log(convert)
        sum += convert
    }
}


let secSum = 0;
let secConvert;

C.forEach(element => {
    if (typeof element === 'string' && !isNaN(Number(element))) {
        secConvert = Number(element);
        secSum += secConvert;
    }
})

console.log(sum, secSum);

// 9.
let stringuKiekis = 0;
let skaiciuKiekis = 0;

for (let i = 0; i < C.length; i++) {
    if (typeof C[i] === 'string') {
        stringuKiekis++;
    } else if (typeof C[i] === 'number') {
        skaiciuKiekis++;
    }
}
console.log(skaiciuKiekis)
console.log(stringuKiekis)

if (stringuKiekis > skaiciuKiekis) {
    console.log('stringu daugiau')
} else {
    console.log('skaiciu daugiau')
}

// 10.
let tiesa = 0;
let netiesa = 0;

for (let i = 0; i < C.length; i++) {
    if (typeof C[i] === 'boolean' && C[i] === true) {
        tiesa++;
    } else if (typeof C[i] === 'boolean' && C[i] === false) {
        netiesa++;
    }
}

console.log(tiesa);
console.log(netiesa);

if (tiesa > netiesa) {
    console.log('true daugiau');
} else {
    console.log('false daugiau')
}