/*//De eerste opdracht:variables
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
// Het is niet handig om te vergelijken omdat a een nummer is en b is een string.

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

function giveMeSomeNiceName(gender) {
    let myNewName = '';
    if (gender == 'male') {
        myNewName = 'Arnold';

    } else {
        myNewName = 'sophioe';

    }
    return myNewName;
}
const myName = giveMeSomeNiceName('fmelalf');
console.log('myNewname is', myName);

var pigs = function (numberOfPigs) {
    var pigs = '';
    var counter = 0;
    while (counter <= numberOfPigs) {
        pigs += '\uD83D\uDC37'
        counter++;
    }
    pigs += 'knor!';
    return pigs;
};
console.log(pigs(3));

function facorial(num) {
    var result= num;
    if (num === 0 || num === 1)
    return 1;
    while (num > 1){
        num--;
        result = result * num;
    }
    return result;
}
console.log('5!', facorial(5));


const writeASound = function (animal){
    if (animal == 'cat') {
        console.log('miauwww');
    }else if (animal == 'dog'){
        console.log('wroeffff');
    }else if(animal == 'horse'){
        console.log('hikhinnink');
    }else{
        console.log('ghghghghghghghghghghghghgghgghghghgh')
    }

}
writeASound('horse')


const handleAnimalSounds= function(func, animal){
    func(animal);
}
handleAnimalSounds(writeASound, 'dog')

function countdown(seconds){
    if(seconds){
        console.log(seconds+ 'seconden te gaan...');
        setTimeout(countdown,1000, --seconds);
    }else{
        var d = new Date;
        var currentYear = d.getFullYear();
        console.log('Happy ${currentYear}!🎊🎊🎊')
    }
}
countdown(10);*/

//array declaration
const productList = [];
productList[0] = 'Tandenborstel';
productList[1] = 'Deodorant';
productList[2] = 'Bakmeel';
productList[3] = 'Wortels';
productList[4] = 'Tandpasta';
productList[5] = 'Krop sla';
productList[6] = 'Maggi';
productList[7] = 'Croky chips';
productList[8] = 'WC papier';
productList[9] = 'Shampoo';

console.log(productList[4]);

productList.push('Frikandel');
console.table(productList);

productList.forEach(function (elem,index,array) {
    //console.log(elem);
    //console.log(index);
    //console.log(array);
});

for (let index = 0; index < productList.length; index++) {
    const element = productList[index];
    console.log("Op " + index  +" staat product "+  element);
    
}

const newProductsList = productList.map(function(element,index){
    const newElement = `Product ${index +1}: ${element}`;
    return newElement;
})
//console.table(newProductsList);

const productPrices =[2.10,4.99,5.60,0.40,5.44,7.33,2.33,2.49,2.10];

const totalSum = function(anArray){
    let totalSum = 0;
    for (let index = 0; index < anArray.length; index++) {
         totalSum = totalSum + anArray[index];      
    }
    return totalSum;
}
console.log(totalSum(productPrices));


const average = function(anArray){
    let newAverage = totalSum(anArray) / anArray.length;
    return newAverage;
}
console.log(average(productPrices));
