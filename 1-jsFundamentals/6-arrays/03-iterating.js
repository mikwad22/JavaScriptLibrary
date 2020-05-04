let food = ["Pecan pie", "Shrimp", "Quesadilla", "Cheesecake", "Hotdog"];

// for (let i = 0; i < food.length; i++) {
//    console.log(food[i]);
//  }

food.forEach(foodItem => console.log(foodItem)); //concise body supplying a function for each value in array

/*
CHALLENGE
************
​
    - (Go look at MDN docs to remind you):
    - Create an array containing movies
    - Use .forEach() to list your movies
    - Add another movie at the end
    - And replace one of your existing movies with another one
*/

let movies = ["The Sandlot", "Step Brothers", "Black Hawk Down", "Home Alone",];


movies.push("Friends With Benefits");
movies.splice(3, "It");

movies.forEach((movie, i) => console.log(i, movie));

let movie = {
    nameOfMovie: "Home Alone",
    runTime: 103,
    characters: [
      {
        name: "Kevin",
        age: 8,
        items: [
          {
            itemOne: "BB Gun",
            itemTwo: "Hot Iron",
          }]
      },
          {
        name: "Harry",
        age: 40,
        items: [
          {
            itemOne: "Gun",
            itemTwo: "Crowbar",
          }
        ]
      },
  ]
  };    

  console.log(movie.characters);