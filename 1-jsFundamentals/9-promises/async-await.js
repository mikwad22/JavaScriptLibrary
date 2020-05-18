//an alternate way to write promises .then and .catch
async function myFn() {   
    return "hello";
}

// const myFn = async () => {   //same as above in an arrow funcion

// }

// myFn().then(data => console.log(data))
myFn().then(console.log)  // .then is the promise resolver


// myFn()
// .then(console.log)
// .catch(console.log) // .catch is a catch all that will show errors

//fetch function, fetch is a browser function and can only ran in an HTML document
fetch('https://random.dog/woof.json')
    .then(response => response.json) //returns a promise
    .then(json => console.log(json))
    .catch(error => console.log(error))

async function myFn() {
    const response = await fetch("https://random.dog/woof.json");
    const json = await response.json();
    return json;
}
myFn()
    .then(console.log)
    .catch(console.log)