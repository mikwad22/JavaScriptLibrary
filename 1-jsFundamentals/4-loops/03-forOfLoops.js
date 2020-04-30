//for of loops are used on elements of indices. numbers. grabs values (better for arrays)

 let student = {
//  keys    values
    name: "Parker",
   awesome: true,
   degree: "Javascript",
   week: 1
 }
// for (let item of student) {
//    console.log(item); // not iterable, we get an error
// }

let catArray = ["tabby", "british shorthair", "burmese", "maine coon", "rag doll"];

for (let cat of catArray){
    console.log(cat);
}

