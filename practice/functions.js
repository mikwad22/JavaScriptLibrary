// print if number is even or odd
function oddOrEven (num) {
    return num % 2 === 0 ? "even" : "odd";
}
oddOrEven();
console.log(oddOrEven(15));

// print if number is even or odd using if/else
function isEvenorOdd (num) {
    if (num % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}
isEvenorOdd();
console.log(isEvenorOdd(20));

