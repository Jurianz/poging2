let currentAction = 'booleans';
if (currentAction == 'calculating') {
    console.log('in Calculating')
    const a = 12;
    const b = 22;
    console.log('optellen', a + b);
} else if (currentAction == 'strings') {
    console.log('in strings');
    const myString = 'My little pony';
    console.log(myString.substring(1, 5));
    console.log(myString.toLocaleUpperCase());
    console.log(myString.repeat(4))
    console.log(myString.length)
} else if (currentAction == 'booleans') {
    console.log('in booleans');
    let score = 1;
    if (score >= 6) {
        console.log('master');
    } else {
        console.log('oooooh boi');
    }
    let gewicht = 65;
    let lengte = 1.2;
    let lengtek = lengte * lengte;
    let bmi = gewicht / lengtek;
    console.log(bmi);
    if (bmi < 18.5) {
        console.log('te dun boii');
    } else if (bmi >= 25 && bmi <= 29.9){
        console.log('te goede bois');
    }else if (bmi >= 30 ){
        console.log('te dik gast');
    }
}

else {
    console.error('error');
}

