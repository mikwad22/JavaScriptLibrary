let listTitle = document.getElementById("listTitle");
console.log(listTitle);

let listItem = document.querySelector("ul li");
console.log(listItem);

listTitle.style.textAlign = "center";

listItem.style.color = "red"; //only turns one li red

let grocery = document.getElementsByClassName("groceryItem"); //string that interacts like a array
console.log(grocery);
console.log(grocery[2]);
console.log(grocery.item(2)); //same as above, just written out different

let listItems = document.getElementsByTagName("li"); //HTML collection
console.log(listItems);

// let unorderedListItems = document.querySelectorAll("ul li"); //node list, node is a thing that attatches to the DOM; text and tags, also comments
console.log(listItems);

console.log(document.body.childNodes);
console.log(document.body.children); //different from childNodes, if you don't want to see comments and extras

let listDiv = document.getElementById("list"); // grabs all the div list items
console.log(listDiv.firstChild); //lists first child; h1; child node
console.log(listDiv.firstChild.nextSibling.nextSibling); //child node

// Challenge: Select the input box and assign it to a variable called todoTitle
let todoTitle = document.getElementById("listInput");
console.log(todoTitle);



document.getElementsByClassName("listItem")[4].innerText = "Visit Grindelwald"; //changing Visit Jacob to Visit Grindelwald

// select first item in grocery list and change it to Moondew Drops
document.getElementsByClassName("groceryItem")[0].innerText = "Moondew Drops";

document.getElementById("clickMe").addEventListener("click", (event) => { //callback function
    event.target.style.backgroundColor = "lightblue"; // adding a list name to button click me
});

document.getElementById("listInput").addEventListener("keyup", (event) => {
    console.log(event.target.value); //tracks characters; every key typed, even backspaces
});

let newGroceryItem = document.createElement("li");
console.log(newGroceryItem);

let groceryList = document.getElementById("groceryList");

groceryList.appendChild(newGroceryItem); //will add new bullet to the end of the list

newGroceryItem.innerText = "Ginger Root"; //adds "Ginger Root" to the grocery list but as same style

let unorderedListItems = document.querySelectorAll("ul li");

for(tag of unorderedListItems) { // loop through all 
    tag.style.textDecoration = "underline"; // and change to underline
    tag.style.fontSize = "10px"; //change text size
}