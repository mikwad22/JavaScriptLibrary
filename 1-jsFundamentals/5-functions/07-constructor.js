//uses objects {} as a data generator.

let myTv = {
    screenSize: 27,
    screenType: "plasma",
    refreshRate: 140,
    manufacturer: "Sony",
};

let yourTv = {
    screenSize: 60,
    screenType: "lcd",
    refreshRate: 60,
    manufacturer: "Samsung",
}

function TV(screenSize, screenType, refreshRate, manufacturer) { // needs to have the keys for the parameters
    this.screenSize = screenSize; //this makes the screenSize different (left side vs right side)
    this.screenType = screenType;
    this.refreshRate = refreshRate;
    this.manufacturer = manufacturer;
}
console.log(myTv.refreshRate); //140
                //envoke to call it
let firstTV = new TV(80, "led", 80, "LG"); //new keyword working with class or constructor

console.log(firstTV.screenType); //led