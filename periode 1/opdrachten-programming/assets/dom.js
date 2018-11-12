const allListItems = document.getElementsByTagName('li');
console.log(allListItems)
const ul = document.getElementById('groceries');
console.log(ul)
const firstChild = groceries.firstElementChild;
console.log(firstChild);
firstChild.classList.add('standOut');
const ph = document.getElementById('groceries');
const newListItem = document.createElement('li');
newListItem.innerText = 'Krop Sla';
ph.appendChild(newListItem);



const groceryList = [
    {
        name: "Tandenborstel",
        price: 2.88
    },
    {
        name: "Bakmeel",
        price: 1.00
    },
    {
        name: "Wortel",
        price: 0.5
    },
    {
        name: "Krop Sla",
        price: 0.60
    }
]

console.table(groceryList);

for (let index = 0; index < groceryList.length; index++) {
    const element = groceryList[index];
    console.log(element);
}

function createMyAwesomeTable() {
    const table = document.createElement('table');
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    tdName.innerText = 'Tandenborstel';
    const tdPrice = document.createElement('td');
    tdPrice.innerText = '2.88';

    tr.appendChild(tdName);
    tr.appendChild(tdPrice);
    table.appendChild(tr);

    const body = document.getElementById('body');
    body.appendChild(table);
}

const table = document.createElement('table');
for (let index = 0; index < groceryList.length; index++) {
    const element = groceryList[index].name;
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    tdName.id = 'name';
    tdName.innerText = groceryList[index].name;
    const tdPrice = document.createElement('td');
    tdPrice.id ='name';
    tdPrice.innerText =groceryList[index].price;
    
    tr.appendChild(tdName);
    tr.appendChild(tdPrice);
    table.appendChild(tr);
}

const body = document.getElementById('body');
body.appendChild(table);

