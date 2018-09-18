//De eerste opdracht:variables
const getal = 6
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

let cijfer = 8;
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

if(purchasedBook =)