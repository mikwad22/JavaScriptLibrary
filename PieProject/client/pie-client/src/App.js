import React, {useState} from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';

function App() {

  const [sessionToken, setSessionToken] = useState(undefined);

  return (
    <div className="App">
       <Navbar />
      <p>This is a test of React!</p>
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