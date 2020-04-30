let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(long.length); //10, length adds 1 to property

let colors = ["blue", "green", "yellow", "red", "orange", "purple"];

console.log(colors.toString()); //strings the values in array
console.log(typeof colors); //arrays are considered objects



let colors = ["blue", "green", "yellow", "red", "orange", "purple"];

// console.log(colors.reverse());

// console.log(colors instanceof Array);
// const reverse = colors.reverse();
// console.log(reverse);

if (colors instanceof Array) {
    let newArr = colors.reverse();
    newArr.forEach(color => console.log(color));
} else {
    console.log("Not an array!");
}

let colors = ["BlUe", "grEen", "yElLow", "rEd", "oRanGe", "PuRple"];


// using the forEach method, capitalize the first letter of each color, then lowercase the rest.
​
let colors = ["BlUe", "grEeN", "yElLoW", "REd", "oRanGe", "pURPle"];
    
colors.forEach(color => {
    let newColor = color[0].toUpperCase() + color.slice(1).toLowerCase();
    console.log(newColor);
});
