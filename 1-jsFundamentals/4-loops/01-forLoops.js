//quick and easy way to repeat something. Loops through a block of code a number of times. There are 3 main parts:

 let i = 7;

//     (1)     (2)   (3)
 for (i = 0; i < 10; i++){ //for parts set up between ;
    console.log(i);
}

/*
1- initial expression - run once before the loop starts
2- condition - loop runs until the condition evaluations to false
3- increment expressions - run once after each interation of the loop
*/

for (n = 0; n <= 20; n += 2) {
    console.log(n);
}

for (x = 10; x >= 0; x--) {
    console.log(x);
}

for (y = 0; y >= -24; y -= 2) {
    console.log(y);
}
 
//Challenge: using a for loop, go through a name and display each letter individually
let name ="Mikaela";

for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
}

//Challange: make a for loop where you add up all the numbers from 1 to 50 (should equal 1275)
let sum = 0; //global scope variable

for (let i = 1; i <= 50; i++) {
    sum += i
}
console.log(sum);

