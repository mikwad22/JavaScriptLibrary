//Boolean -true or false
let on = true;
console.log(on);

let off = false;

//Null -an empty value. Think of it as an empty container; nothing is in there but it still exists as a space to fill.

let empty = null;
console.log(empty);

//Undefined - default value when a variable is not initialized

let undef = undefined;
let correct;

console.log(undef, correct);

//Numbers

let degrees = 90;
console.log(degrees);

let precise = 999999999999999
console.log(precise);

let rounded = 9999999999999999; //at 16 chars numbers will auto round
console.log(rounded); 

let notQuite = 0.1 + 0.2; //js rounds at a certain number, be aware
console.log(notQuite);

let aNumber = Number("123");
console.log(aNumber); //typeof will define the data type

//Strings - strings are datatypes used to represent text and are either wrapped in single quotes(''), double quotes(""), or string interpalation(``)
let stringOne = 'single quotes';
let stringTwo = "double quotes";
let stringThree = `backticks`;

console.log(stringOne, stringTwo, stringThree);

let first = 1050 + 100;
let second = "1050" + "100";
console.log(first);
console.log(second); //when strings are added together, they just get mushed together
console.log(typeof first);

let third = 1050 + "100";
console.log(third);
console.log(typeof third);

//Objects - objects are used to store many values instead of a singular value {}

let frodo = { //used rather than creating seperate variables
    race: "hobbit", 
    rings: 1,
    cloak: true
}

console.log(frodo);

//Arrays - containers that hold lists of items
/*
    let list = [    "item1",    "item2",    "item3"];
        (1)    (2)        (3)

    1- name of Array
    2- arrays are donoted by square brackets []
    3- notice each value is seperated by a comma
*/

let burritos = ["large, 4, true"];
console.log(burritos);
console.log(typeof burritos); //arrays are objects that have indices assigned to the values


let firstName = "Mikaela";
let lastName = "Wade";
let houseNumber = 6421;
let street = "Concord Dr";
let city = "Zionsville";
let state = "IN";
let zipcode = 46077;

console.log(firstName + " " + lastName + "," + houseNumber + " " + street + " " + city + "," + state + " " + zipcode);
console.log(`${firstName} ${lastName}, ${houseNumber} `)

let myName = "Mikaela";
console.log(myName.length); //spaces count as character numbers

console.log(myName.toUpperCase()) //to run the function in the code envoke it with parantheses

let home = "My home in Zionsville";
console.log(home.includes("Zionsville")) //returns a boolean

let sent = 'This sentence will be split into individual parts ';
console.log(sent.split(" "));

