//Schrijf de volgende array om in JSON. De array beschrijft rondetijden van een hardloper. Wat zijn de namen (keys) van de properties?
//const lapRounds = [55.99, 63.00, 63.01, 54.01, 62.79, 52.88, 53.10, 54.12]; 
/*const lapRounds = [
    {
        eersteRonde: 55.99,
        tweedeRonde: 63.00,
        derdeRonde: 63.01,
        vierdeRonde: 54.01,
        vijfdeRonde: 62.79,
        sesdeRonde: 52.88,
        zevendeRonde: 53.10,
        achsteRonde: 54.12
    }
]
console.table(lapRounds);*/
//const lapRounds = [55.99, 63.00, 63.01, 54.01, 62.79, 52.88, 53.10, 54.12];

//opdracht 2 Gebruik een for-loop of foreach-loop en print voor elk object de regel
/*const teachers = [
    {
        name: 'Loek',
        profession: 'Teacher',
        brand: 'Linux'
    },
    {
        name: 'Daan',
        profession: 'Teacher',
        brand: 'Arduino'
    },
    {
        name: 'Rimmert',
        profession: 'Teacher',
        brand: 'Apple'
    }
]
teachers.forEach(function(teachers) {
    console.log(`I have a ${teachers.profession} named ${teachers.name} and he likes to work on ${teachers.brand} computer`);
});
*/
//opdracht 3 Voeg twee properties “hoursPerWeek” en “salary” toe een functie toe tevoegen en die in een for loop te gebruiken print hij de zin inclusief salery per hour.
//const printSaleryPerHour = function(){
//    console.log(`${this.name} earns ${this.salaryPerHour}per hour`);
//}

const teachers = [
    {
        name: 'Loek',
        profession: 'Teacher',
        brand: 'Linux',
        hoursPerWeek: 60,
        salary: 1200,
        salaryPerHour: function () {
            return this.salary / this.hoursPerWeek
        }
    },
    {
        name: 'Daan',
        profession: 'Teacher',
        brand: 'Arduino',
        hoursPerWeek: 60,
        salary: 1200,
        salaryPerHour: function () {
            return this.salary / this.hoursPerWeek
        }
    },
    {
        name: 'Rimmert',
        profession: 'Teacher',
        brand: 'Apple',
        hoursPerWeek: 60,
        salary: 1200,
        salaryPerHour: function () {
            return this.salary / this.hoursPerWeek
        }
    }
]

for (index = 0; index < teachers.length; index++) {
    // Zet de benodigde informatie in variabelen
    teacherName = teachers[index].name;
    teacherProfession = teachers[index].profession;
    teacherBrand = teachers[index].brand;
    teacherSalary = teachers[index].salaryPerHour();
    // Geef de informatie weer in een zin
    console.log(`I have a ${teacherProfession} called ${teacherName} and he likes to work on a ${teacherBrand} computer. He earns € ${teacherSalary} per hour.`);
}


