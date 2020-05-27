//ES6 JS Classes - blueprint for making objects
class User {
    constructor(name){
        this.name = name;
        this.type = "Trial User"
    }
    // Method 1
    greet(){
        console.log('Welcome back, ' + this.name);
    }
    // Method 2
    status(){
        console.log('Current status: ' + this.type);
    }
}

// Instance of the class/new object
var anonDude = new User("Anonymous dude");

//we can now use the instance and the . operator to access the 2 methods
anonDude.greet();
anonDude.status();

// Another instance of the class
var anonLady = new User("Anonymous Lady");
anonLady.greet();
anonLady.status();

// Another instance of the class
var jeff = new User("Jeff");
jeff.greet();
jeff.status();

var cory = new User('Cory');
cory.greet();
cory.status();

var littleguy = new User('Camden');
littleguy.greet();
littleguy.status();