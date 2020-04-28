//execute block of code with a break keyword - whatever the case if looking in the paranthesis

let officeCharacter = "Pam";

switch (officeCharacter) {
    case "Michael":
        console.log("My mind is going a mile an hour");
        break; 
    case "Dwight":
        console.log("Perfectenschlag");
    break;
    case "Jim":
        console.log("Bears, Beets, Battlestar Galactica");
        break;
        default:
            console.log(`I'm sorry, ${officeCharacter}, but do I know you`);
}

let dessert = "cake";

switch (dessert) {
    case "pie":
        console.log("Pie, pie, me oh my!");
        break;
    case "cake":
        console.log("Cake is great!");
        break;
    case "ice cream":
        console.log("I scream for ice cream!");
        break;
    default:
        console.log(`not on the menu`);

}