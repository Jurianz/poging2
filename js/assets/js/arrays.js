// les 7 arrays
// opdracht 1 Random numbers uit laprounds doormiddel van een functie
const lapRounds = [2.99, 3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12];
const randomNumbers = function (lapRounds) {
    return lapRounds[Math.floor(Math.random() * lapRounds.length)];

}
console.log(randomNumbers(lapRounds));

//opdracht 2 allmyrecords wordt geprint doormiddel van 2 loopjes 
const allMyRecords = [
    ["The Who - Pinball Wizard",
        "Rolling Stones - Exile on main street",
        "Police - Message in a bottle"],
    ["De Dijk - Alle 40 Goed",
        "Het Goede Doel - Belgie",
        "Doe Maar - skunk"]
];
for (let i = 0; i < allMyRecords.length; i++) {
    for (let j = 0; j < allMyRecords[i].length; j++) {
        console.log(allMyRecords[i][j])
    }
}

//opdracht 3 filteren laprounds doormiddle van .filter
/*const filteredLapRoundsWithForLoop = function () {
    let newArray = [];
    for (let i = 0; i < lapRounds.length; i++) {
 
        if (lapRounds[i] < 4) {
            newArray.push(lapRounds[i]);
        }
    }
    return newArray;
 }
console.log(filteredLapRoundsWithForLoop(lapRounds));*/
const filteredRounds = lapRounds.filter(function(lapRounds){
    return lapRounds < 4;
});
console.log(filteredRounds);
// de filter functie maakt het een stuk overzichtelijker ook is het minder type werk