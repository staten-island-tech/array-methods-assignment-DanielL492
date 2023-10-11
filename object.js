/*let year = date.getFullYear();
const date = new Date();*/
const character = 
[
   {
    Name: "Master Chief",
    Primaryweapon: "Assault Rifle",
    Race: "Human",
   },
   {
    Name: "Arbiter",
    Primaryweapon: "Energy Sword",
    Race: "Sangheili",
   },
   {
    Name: "Didact",
    Primaryweapon: "Unknown",
    Race: "Forerunner",
   },
];

character.forEach((character) => console.log(character.Name));

console.log(character);

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