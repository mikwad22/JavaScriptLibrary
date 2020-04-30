//store multiple sets of data in key value format

let netflix = {
    //properties of id: seperated by commas, keys are strings behind the scene
    id: 1, //number
    name: "The office", //string
    seriesInfo: {   //nested object in the object
        seasons: 9,
        seasonInfo: [ //list 
            {
                season: 1,
                episodes: 6,
                episodeInfo: [ //holding an array
                    {
                        episode: 1,
                        episodeName: "Pilot",
                    },
                    {
                        episode: 2,
                        episodeName: "Diversity Day",
                    }
                ]

            },
            {
                season: 2,
                episodes: 22,
                episodeInfo: [
                    {
                        episode: 1,
                        episodeName: "The Dundies"
                    }
                ]
            }
        ],
    },
};   

// console.log("Whole Object", netflix); //grabbing whole oject
// console.log("Just Series Info:", netflix.seriesInfo); //use dot notation
// console.log("Just Season Info:", netflix.seriesInfo.seasonInfo[0].episodeInfo[0]); //grabbing season 1 info
               
                //comment
// console.log("Season 2, Episode 1:", netflix.seriesInfo.seasonInfo[0].episodeInfo[1].episodeName);

let spaceJam = {
    toonSquad: {
        human: "Michael Jordan",
        rabbit1: "Bugs Bunny",
        rabbit2: "Lola Bunny",
        duck: "Daffy Duck",
        tDevil: "Tasmanian Devil",
        bird: "Tweety",
        cat: "Sylvester",
        pig: "Porky Pig"
    },
    monstars: {
        0: "Bupkus",
        1: "Bang",
        2: "Nawt",
        3: "Pound",
        4: "Blanko",
    },
    nbaPlayers: {
        phoenixSuns: "Charles Barkley",
        newJerseyNets: "Shawn Bradley",
        newYorkKnicks: "Patrick Ewing",
        charlotteHornets1: "Larry Johnson",
        charlotteHornets2: "Muggsy Bogues",
    }
}

// console.log(Object.keys(spaceJam)); //left side of our assignment
// console.log(Object.keys(spaceJam.toonSquad))
// console.log(spaceJam.monstars[0]); //we can use square bracket notations on objects as well
// console.log(Object.values(spaceJam.toonSquad));

let garden = {
    vegetable: "zucchini",
    flower: "sun flowers",
    fruit: "grapes",
    water: true,
    sun: true,
    size: 10,
}

let keys = Object.keys(garden);
console.log(keys); //array of all our keys
console.log(typeof keys[0]); //string

// let zucchini = garden.vegetable;
// console.log(zucchini);

let zucchini = garden["vegetable"];
console.log(zucchini);

let baking = {};
//bunch of code here

baking.zucchini = "Better make some bread!"; //assigning it a value of "better make some bread"
console.log(baking);

baking["flour"] = "Batter up!"; //you can assign values outside of properties
console.log(baking);

console.log(baking[garden["vegetable"]]); //digging into baking and grabbing the zucchini key