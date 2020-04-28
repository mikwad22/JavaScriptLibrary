/*
falsy values:
1. false
2. 0
3. "", '', `` (empty strings)
4. null
5. undefined
6. NaN (Not a Number)

*/

let isOn = true;

if (isOn) {
    console.log("The light is on!");
}

if (isOn == false); {
console.log("the light is off");
}

let weather = 60;

if (weather > 70) {
    console.log("Wear a jacket"); //does not execute because it is not true
}