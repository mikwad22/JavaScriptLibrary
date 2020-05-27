// Grab specific values from the starting array and assign those values to new variables.
const array = ['thing', 42, false, {key: 'value'}, [1,2,3,4,undefined], NaN];


let stringVar = array[0];
let numVar = array[1];
let objVar = array[3];
let nanVar = array[array.length - 1];

console.log(stringVar, numVar, objVar,nanVar);

// same as above just shortened
let [string, num,, obj,, nan] = array;  // double commas to skip certain values we don't care about

console.log(string, num, obj, nan);

// Spread operator = spread out the values of an array (or object) into individual values that can be read in context.
let newArr = ['a', 1, undefined, ...array];

console.log(newArr);


const testObj = {
    testString: 'stringy thingy',
    testNum: 23,
    testBool: true,
    testObject: {key: 'waluigi'},
    testNan: NaN
}

const objString = testObj.testString;
const objNum = testObj.testNum;
const objObj = testObj.testObject;
const objNan    = testObj.testNan;

console.log(objString, objNum, objObj, objNan);

// Desructuring to speed up the process
let {testString, testObject, testNum, testNan} = testObj;
console.log(testString, testObject, testNum, testNan);

// insert all the properties in our 'testObj' into a new object
let newObj = {newString: 'more strings', anotherString: 'this is a string', ...testObj};
console.log(newObj);