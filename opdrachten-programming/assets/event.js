//const button = document.getElementById('submit');
//button.addEventListener('click',clickEventHandler);

//function clickEventHandler(event){
//     console.log(event);
// }
// window.addEventListener('load', init);

// function init() {
//     const sumbitButton = document.getElementById('submit-btn');
//     sumbitButton.addEventListener('click', clickEventHandler);
// }
// function clickEventHandler(event) {
//     event.preventDefault();
//     const textInput = document.getElementById('textInput').value;
//     if (textInput == '') {
//         console.log('lkfjldfjkalf');
//     } else {
//         console.log('textInput');
//     }
//     console.log(textInput);
// }
window.addEventListener('load', init);

function init() {
    const sumbitButton = document.getElementById('submit-btn');
    sumbitButton.addEventListener('click', clickEventHandler);
}

function clickEventHandler(event) {
    event.preventDefault();

    const inputText = document.getElementById('textInput').value;

    if (inputText == '') {
        console.log('please enter some info');
    } else {
        writeToDom(inputText);
    }
}

//  function clickEventHandler(event){
//      if (event.target.nodeName =='IMG'){
//          console.log(event.target.nodeName)
//      }
//  }

//1
const placeInDom = document.getElementById('result');
//2
const li = document.createElement('li');
li.innerText = textInput;
//3
placeInDom.appendChild(li);
