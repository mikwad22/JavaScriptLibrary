//  variable    fat arrow  
    let hi   =  () => {
        console.log(`Hi`);
    }

    // arrow functions were introduced in ES6. They are basically concise way to write function expressions - NOT declaratons
    // this means arrow functions do not get hoisted

    //BLOCK BODY
    let hi = () => {
        console.log('hi');
        //Lots of code goes here

        //return goes here
    }
//NOTE: block body arrow functions must have a return (if you want to get back information) in the body of the function
// (return must be in between the curly braces)

// CONSICE BODY
let hi = () => {console.log('hi')};
// NOTE: concise body arrow functions return by default; they automatically give back the information.

let greeting = name => { //if only have one paramater do not need paranthesis, it's optional
    console.log(`Greetings, ${name}`)
}

// NOTE: when you have no or multiple parameters, you must include parentesis;
greeting('Mikaela');