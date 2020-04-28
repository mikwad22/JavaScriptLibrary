/*
Ledger:
    variable for name whos value is currently undefined
    function called foo, that does {.. code stuff ..} 

*/
console.log(name);
foo();

var name = "testing";

// pretend there is lots of code in between

function foo() {
    console.log("I have been hoisted")
}
