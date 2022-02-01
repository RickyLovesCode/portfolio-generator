// FILTER. ARRAY FUNCTIONS EX.

const { kebabCase } = require("lodash");

const numbers = [1, -1, 2, 3];
//FILTERING 'NUMBERS' WITH FUNCTION VALUE, TO RETURN A VALUE OF (OPTIONAL) LESS THAN 'NUMBER' OR GREATER THAN.
numberarr = numbers.filter(function (value) {
    return value >= 2;
});

console.log(numberarr);





//ARRAY OF RANDOM, NAME & POSITION
const team = [
    { name: "ricky", position: "developer" },
    { name: "rick", position: "ui designer" },
    { name: "richie", position: "developer" },
    { name: "rickie", position: "content manager" },
    { name: "ricc", position: "cto" },
    { name: "sticky", position: "backend engineer" },
    { name: "slickrick", position: "developer" },
]

//FILTER OUT ITEMS OF AN ARRAY[] 'TEAM' FOR EX.
var developers = team.filter(person => person.position == "developer");

//DIFFERENT APPROACH, FILTER OUT 'TEAM' BUT FOR A SPECIFIC PROPERTY
let nondevelopers = team.filter(people => people.position !== "ui designer")

console.log(developers);
console.log(nondevelopers);

