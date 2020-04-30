let hi = () => {
    //1
    return 'hi';
}
//      2       3
let greeting = hi();

/*
    1- the keyword that brings our data out of our function
    2- a new variable to hold the value of the return
    3- when called, the function becomes the value of the return
*/

console.log(greeting);


function name(firstName) { //taking in information
    return `Hello, ${firstName}`; //give back (return)
}

let greetedName = name('Leia Organa')

console.log(greetedName);


function capitalizeName(name) {
    return name[0].toUpperCase() + name.slice(1).toLowerCase()
}
let correctName = capitalizeName('mIkaEla');
console.log(correctName);


function areaOfRectangle(length, width) {
    let area = length * width;
    return area;
}
​
let width = 5;
let length = 5;
​
let newArea = areaOfRectangle(length, width);
// let newArea = 25;
console.log(newArea);


/*
CHALLENGE
************
    Make a tip calculator using a function
    Have it RETURN the value
    Capture that returned value in a VARIABLE
    Print that variable
*/
function tip(bill, twentyPercent) {
    let tip = bill * twentyPercent;
    return tip;
}
let myBill = 100; // you do not need to call the variable the same as the paratmeter about
let myTax= .2;
let totalTip = "$" + tip(myBill, myTax);
console.log(totalTip);

