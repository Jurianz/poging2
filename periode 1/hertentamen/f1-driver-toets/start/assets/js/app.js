/**
 * Declare let to use for storing laprounds from the drivers
 */


let lapRoundsRic = [];
let lapRoundsVer = [];
let lapTimeRicTotal = 0;
let laptTimeVerTotal = 0;
/**
 * Using DOM to pickup elements from html to use in functions en if else  
 */
const lapTime = document.getElementById('lapTime');
const driver = document.getElementById('driver');





window.addEventListener('load', init);

//global vars

/**
 * Function to initialize the application
 * @param {*} event 
 */
function init(event) {
    console.log('in init');
    const button = document.getElementById('submit');
/**
 * Function to initialize the submit button 
 * @param {*} e
 * If else statment to sort the times to put them with te right driver
 * @param {driver.value == 'Ricciardo'}
 * @param {*}
  */    
    button.addEventListener('click', function (e) {
        event.preventDefault()
        console.log(lapTime.value)
        console.log(driver.value);
        let laps = document.getElementById('laps')
        if (driver.value == 'Ricciardo') {
            lapRoundsRic.push(lapTime.value);
            for (let index = 0; index < lapTimeRicTotal.length; index++) {
                const element = lapRoundsRicTotal[index];
                 let addedTimes = lapTimeRic[index] + lapRoundsRic[index];
                 lapTimeRicTotal.push(addedTimes);
                
            }
        } else {
            totalTimeVer.push(lapTime.value)
        }
        console.log(lapRoundsRic)
        console.log(lapRoundsVer)
        console.log(lapTimeRicTotal)
/**
 * Getting laps from html to use to print new laprounds on page
 */
        let tr = document.getElementById('laps')
        let td = document.createElement('td')
        td.innerHTML = driver.value + lapTime.value;
        tr.appendChild(td);


    })
}
