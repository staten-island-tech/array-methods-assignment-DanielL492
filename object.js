/*let year = date.getFullYear();
const date = new Date();*/
const character = 
[
   {
    Name: "Master Chief",
    Primaryweapon: "Magnum",
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

//character.forEach((character) => console.log(character.Name));


//

//character.forEach((character) => console.log(character.appearance));
character.forEach( function (hi) {
    for (var i = 0; i < character.appearance.length; i++) {
        console.log(appearance.length)
    }
})

/*for (var i = 0; i < character.appearance.length; i++) {
    console.log()
}*/

//


//const graduates = students.filter((student) => student.graduated === true);

//students.forEach((students) => console.log(students.firstName))

//let nums = [1, 2, 3, 4, 5];
//()=> arrow functions auto return, this key word points global
//access individual element from array/List index, starts at 0
//console.log(nums[0]);
//nums.forEach((el) => console.log(el));

/*firstName: "Dennis",
lastName: "Unknown",
DOB: 2007,
graduated: false,
age: function () {
    //subtract his DOC from current year
    return year - this.DOB;
},
siblings: [],
spouse: null,*/