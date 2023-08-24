
// Object destructuring 1

let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846}; 
let {numPlanets, yearNeptuneDiscovered} = facts; 

console.log(numPlanets); // 8 
console.log(yearNeptuneDiscovered); //1846

// Object destructuring 2

let planetFacts = {
    numPlanets: 8, 
    yearNeptuneDiscovered: 1848, 
    yearMarsDiscovered: 1659
};

let {numPlanets, ...discoveryYears} = planetFacts; 

console.log(discoveryYears); 
// { yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659 }

//Object destructuring 3

function getUserData({firstName, favoriteColors="green"}){
    return `Your name is ${firstName} and you like ${favoriteColors}`;
}

console.log(getUserData({firstName: "Alejandro", favoriteColors: "purple"})); 
// your name is Alejandro and you like purple

console.log(getUserData({firstName: "Melissa"}));
// Your name is Melissa and you like green

console.log(getUserData({}));
// Your name is undefined and you like green

//Array Destructing 1

let [first,second, third] = ["Maya", "Marisa", "Chi"]; 

console.log(first); //Maya
console.log(second); //Marisa
console.log(third); //Chi

//Array destructuring 2 

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
]

console.log(raindrops); // Raindrops on roses
console.log(Whiskers); // Whiskers on kittens
console.log(aFewOfMyFavoriteThings); //"Bright copper kettles","warm woolen mittens","Brown paper packages tied up with strings"