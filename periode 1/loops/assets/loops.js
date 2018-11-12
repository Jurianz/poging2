let cijfer=0;
while(cijfer<10){
    cijfer++;
    console.log(cijfer);
}
message = 'Het is maandag'
var i = message.length;
while(i>=0){
    i--;
    console.log(message.charAt(i));
}

var myName ='jurian';
var reversedName='';
var counter = myName.length;

while(counter> 0){
    reversedName = reversedName + myName.charAt(counter -1);
    console.log(reversedName);
    counter--;
}
console.log(reversedName);

for (let c = 0; c <= 10; c++) {
    console.log(c);    
}

const sentence ='het is maandag';

for(var i = 0; i < sentence.length; i++){    
console.log(sentence.charAt(i));
}
for (let i = 1; i <= 25; i++) {
    if(i % 3 == 0){
        console.log(`${i} is deelbaar door 3`);
    }else{
        console.log(`${i} is niet deelbaar door 3`);
    }
    
}

let firstNumber = 0;
let secondNumber = 1;
let firstAndSecond = firstNumber + secondNumber

while(firstAndSecond <1000){
    console.log(firstAndSecond);
    secondNumber = firstNumber;
    firstNumber = firstAndSecond;
    firstAndSecond = firstNumber + secondNumber;
}