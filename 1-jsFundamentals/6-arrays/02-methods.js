let food = ["Pecan pie", "Shrimp", "Quesadilla", "Cheesecake", "Hotdog"];

// for(let foodItem of food){
//    console.log(foodItem);
// }


food.push("Pizza");
console.log(food);

food.splice(1, 2, "Tacos") //deleting index 1, the 1 and 2 items, and replacing with tacos
console.log(food);

let removedFood = food.pop() //returning a value
console.log(removedFood);

food.unshift("Burritos");
console.log(food);