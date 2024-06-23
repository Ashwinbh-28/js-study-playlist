/*
use of var, let and const

Prefer not to use the var nowadays
"let" is used for  the declaration and can be changed.

Note That - In JS, no need to declare the type and JS will pick them type on its own.
*/


const accountId = "280503"
let accountName = "Ashwin Bhanage"
var accountSalary = "28000"
accountCity = "Pune"

/*
If any name is declared and not assign any value
then JS show the value as "Undefined" in the output 
*/
let accountState;

// accountId = 2 //use for single line comments

accountName = "Hitesh Kumar"
accountSalary = "300000"
accountCity = "Mumbai"

/*
used for the multiple line comments 
*/

console.log(accountId);

// "Table" keyword used for the showing the outputs of multiple declaration. 
console.table([accountId, accountName, accountSalary, accountCity, accountState])