function hi() {
    console.log('HI');
}
hi; 
hi(); 
console.log(hi); //HI
console.log(hi()); //undefined

/*
CHALLENGE
************
    - Create a function that, when invoked, lists out the numbers 1-10
*/

function count() {
    for(let i = 0; i <= 10; i++){
    console.log(i);
    }
}
count();


let arr = ['This', 'is', 'really', 'cool'];

function list() {
    for(let item of arr){
        console.log(item);
    }
}
list();