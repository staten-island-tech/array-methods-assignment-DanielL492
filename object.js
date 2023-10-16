/*let year = date.getFullYear();
const date = new Date();*/
const character = 
[
   {
    Name: "Master Chief",
    Primaryweapon: "Assualt Rifle",
    Race: "Human",
    Alive: true,
    appearance: [1, 2, 3, 4, 5],
   },
   {
    Name: "Arbiter",
    Primaryweapon: "Energy Sword",
    Race: "Sangheili",
    Alive: true,
    appearance: [2, 3, 5],
   },
   {
    Name: "Didact",
    Primaryweapon: "Unknown",
    Race: "Forerunner",
    Alive: true,
    appearance: [4, 5],
   },
   {
    Name: "Sergeant Johnson",
    Primaryweapon: "Assualt Rifle",
    Race: "Human",
    Alive: false,
    appearance: [1, 2, 3],
   },
];

//1.
character.forEach((character) => console.log(character.Name));

//2.

//character.forEach((character) => console.log(character.appearance));
/*character.forEach( function (hi) {*/

character.forEach((character) => character.appearance.forEach((num) => console.log(num)));


/*for (var i = 0; i < character.appearance.length; i++) {
    console.log()
}*/

//3.

const weapon = character.filter((find) => find.Primaryweapon === "Assualt Rifle")
console.log(weapon);