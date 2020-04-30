//runs keys in an object. only iterates over enumerable, non-Symbol properties. (better for objects)

let student = {
    name: "Parker",
    awesome: true,
    degree: "Javascript",
    week: 1
}

for (let item in student){
    console.log(item);
    console.log(student[item])
}

let catArray = ["tabby", "british shorthair", "burmese", "maine coon", "rag doll"];

for (let cat in catArray){
    console.log(cat);
    console.log(catArray[cat]);
}

let name = "mIkAeLa";
let capName;

for (let d in name){
    if (d == 0); {
        capName = name[d].toUpperCase();
    } else {
        capName += name[d].toLowerCase();
    }
}
console.log(capName);