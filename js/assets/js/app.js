//De eerste opdracht:variables
/*const getal = 6
if (getal % 2 == 0) {
    console.log('even');
} else {
    console.log('oneven');
}
const zin = 'programming is not so cool';
console.log(zin);
console.log(zin.replace('not', ''));

const a = 1400;
const b = 'Ik woon in Naboo';
if (a == b) {
    console.log('de variables zijn gelijk');
} else {
    console.log('de variables zijn niet gelijk');
}
// Het is niet handig om te vergelijken omdat a een nummer en b is een string.

//De tweede opdracht:Conditionals

/*slet cijfer = 8;
if (cijfer < 6) {
    console.log('onvoldoende');
} else if (cijfer >= 6 && cijfer <= 7) {
    console.log('Voldoende');
} else if (cijfer >= 7 && cijfer <= 9) {
    console.log('Goed')
} else if (cijfer > 9) {
    console.log('uitmuntend');
}

let tekst;
switch (cijfer) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        text = 'Onvoldoende';
        break;
    case 7:
        text = 'Voldoende';
        break;
    case 8:
    case 9:
        text = 'Goed';
        break;
    case 10:
        text = 'Uitmuntend'
        break;
    default:
        text = 'Error';
        break;
}
console.log(text);

purchasedBook = true;
job = 'teacher';
inTrain = false;

// Opdrachten over loops
// Reeks met getallen deelbaar of niet deelbaar
/*x = 1;
while (x <= 20) {
    if (x % 4 === 0) {
        console.log(x, 'deelbaar door 4');
    } else {
        console.log(x, 'is niet deelbaar door 4');
    }
    x = x + 1;

    // Fibonacci reeks
    /*let firstNumber = 0;
    let secondNumber = 1;
    let firstAndSecond = firstNumber + secondNumber;

    while (firstAndSecond < 1000) {
        console.log(firstAndSecond);
        secondNumber = firstNumber;
        firstNumber = firstAndSecond;
        firstAndSecond = firstNumber + secondNumber;
    }*/

// array
/*let Getallen = [2, 4, 8, 9, 12, 13];
let totalOffAll = 0;

for (z = 0; z < Getallen.length; z++) {
    console.log(Getallen[z]);
    totalOffAll = totalOffAll + Getallen[z];
}
console.log(totalOffAll);
}*/

/*// fibonaccisequence in function
function fibonacci(startNum, maxNum) {
    let secondNumber = 0;
    let firstAndSecond = startNum + secondNumber;
    while (firstAndSecond < maxNum) {
        console.log(firstAndSecond);
        secondNumber = startNum;
        startNum = firstAndSecond;
        firstAndSecond = startNum + secondNumber;
    }
}
// dit geeft de parameters aan van de functie
fibonacci(1, 900);

/*function countdown(seconds) {
    if (seconds) {
        console.log(seconds + ' seconden te gaan...');
        setTimeout(countdown, 1000, --seconds);
    } else {
        var d = new Date;
        var currentYear = d.getFullYear();
        console.log(`Happy ${currentYear}!`);
    }
}
countdown(10)*/
// Functie expressie en declaratie
/*function declar(){
   a =12;
   b =13;
   console.log(`${a},${b}`);
   var a;
   var b;
}
declar();

//expressie functie
function expression(){
    var y = 12;

    var calc= z + y;
    console.log(calc);
    var z = 13;
}
expression()
// resultaat geef NaN*/




