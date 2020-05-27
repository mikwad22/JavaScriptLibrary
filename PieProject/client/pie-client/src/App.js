import React, {useState} from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';

function App() {

  const [sessionToken, setSessionToken] = useState(5);

  let string = 'this is a string'
  let number = 4
  let obj = {
    test: 'test'
  }

  return (
    <div className="App">
      <Navbar token={sessionToken} string={string} num={number} object={obj} />
      <Auth />
    </div>
  );
}

export default App;

// ARRAY DESTRUCTURING - simplified method to extract parts of array

// destructuring in JavaScript is a simplified method of extracting multiple properties from an array by taking the structure of the array, and then deconstructing it down into individual parts by assigning them variables.

// let [first, second, third] = ['Fellowship of the Ring', 'Two Towers', 'Return of the King'];
// console.log(first, second, third); // should show in order

// let [a, , c] = ['Mercury', 'Venus', 'Mars']; // b is skipped so Venus will also be skipped
// console.log(a);
// console.log(c);

// let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
// let [first, , third, ...others] = planets
// // ... = spread operator
// console.log(first); // calls Mercury
// console.log(third); // calls Earth
// console.log(others); // assiging others to new array