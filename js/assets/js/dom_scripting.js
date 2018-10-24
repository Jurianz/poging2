// het gemmiddelde van de table op een nieuwe regel
const list = document.getElementsByTagName('tr');
let gradeArray = [];      //een array voor de getallen uit de array
let gradesArraySum = 0;   // een totaal die straks gebruikt voor de totaal uit de table getallen

for (let index = 0; index < list.length; index++) {
    let listItem = list[index];// hier pak je de eerder gedeclareerde rows
    let getGrade = listItem.lastElementChild.innerText;// door lastElementChild worden de getallen gepakt
    let parsedValue = parseFloat(getGrade); //maakt van de gehaalde getallen een float
    let generateArray = gradeArray.push(parsedValue);// er wordt een nieuwe array aangemaakt die de getallen pakt die hierboven door parsed value heen gaan en dus nu float zijn.
    let averageGrade = gradesArraySum += gradeArray[index];

};

let overallGrade = gradesArraySum / list.length;
//doormiddel van een for loop worden alle getallen bij elkaar opgeteld en gedeeld door het aantal getallen
const table = document.getElementById('table');
let row = table.insertRow(list.length);

var addFirstCell = row.insertCell(0);
var addSecondCell = row.insertCell(1);

addFirstCell.innerText = "gemiddelde cijfer";
addSecondCell.innerText = overallGrade;
// er wordt een nieuwe row toegevoegd met gemiddelde cijfer en daarachter het cijfer



//opdracht 2 Zorg ervoor dat alle even elementen een andere achtergrondkleur krijgen
const getList = document.getElementsByTagName('li');// je haalt de li uit de table
function colorForEven(getList) {
    for (let listIndex = 0; listIndex < getList.length; listIndex++) {

        const listElement = getList[listIndex];
        classNames = getList[listIndex].className;
        var getClassNameNumber = classNames.substr(6, 1);
        if (getClassNameNumber % 2 == 0) {
            listElement.classList.add("blue");
        }// in de for loop worden alle rows gegaan en wordt gekeken of het getal deelbaar is door 2 wel dan krijgt hij de kleur blauw
    }
}
colorForEven(getList);
//hier roep je de functie aan

//opdracht 3 3.	Maak een functie een functie createImageElement(‘imageSrcName’) die een plaatje in JS maakt
 
 function createImageElement(imageSrcName) {
    
    let imagePlace = document.getElementById('imageDiv');
    
    var createImage = document.createElement("IMG");
    imageSrcName = '../git/hz/js/assets/maxresdefault.jpg'; 
    //pad van de afbeelding aangeven
    createImage.src = imageSrcName; 
    //photo pushen naar dom
    imagePlace.appendChild(createImage);


// Functie aanroepen
createImageElement();
 }