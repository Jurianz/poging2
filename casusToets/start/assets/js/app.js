window.addEventListener('load', init);

function init() {
    console.log('DOM is loaded');
}

var reeksen = ['01101000 01100101 01101100 01101100 01101111',
    '01010111 01100101 01101100 01101011 01101111 01101101',
    '01010100 01101111 01110100 00100000 01111010 01101001 01100101 01101110 01110011',
    '01000111 01110010 01101111 01100101 01110100 01101010 01100101 01110011']
//console.log(reeksen);

var randomReeksen = reeksen[Math.floor(Math.random() * reeksen.length)];

console.log(randomReeksen);

let question = document.getElementById('question').innerHTML = randomReeksen;

var correctAnswers = ['Hello', 'Welkom', 'Tot ziens', 'Groetjes']
//console.log(correctAnswers);


let inputAnswer = document.getElementById('inputAnswer')
let answer = document.getElementById('answerText')
let answerForm = document.getElementById('answerForm')
let answerText = document.getElementById('answerText')


if (inputAnswer == correctAnswers) {

   answerText.innerHTML = `Je antwoord ${inputAnswer} is helemaal goed.`
} else {
   answerText.innerHTML = `Helaas ${inputAnswer} is niet juist,probeer het nog eens` 
}

document.getElementById('submit').addEventListener('click', console.log, function () {
    ;

    randomReeksen[0] = 'Hello';
    randomReeksen[1] = 'Welkom';
    randomReeksen[2] = 'Tot ziens';
    randomReeksen[3] = 'Groetjes';

    // let answerText = document.getElementById('answerText')
    // answerText.innerText = event.target

    // if (randomReeksen.src === event.target.src) {
    //     answerText.innerText = 'Goed geraden'
    // }else {
    //     answerText.innerText ='verkeerd'
    // }




})
