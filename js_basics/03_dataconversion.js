/*
Data conversion can be from many forms.
to use the conversion use the syntax

let variableName = typeToConvert(variableName)
*/

let loggedIn = null


let details = String(loggedIn)
console.log(details);
console.log(typeof details);

//Note That: "typeof" is used for the conversion of the string
//for boolean
let booleanValue = Boolean(loggedIn)
console.log(booleanValue);
console.log(typeof booleanValue);

//for the empty string
let newNum = Boolean(loggedIn)
console.log(typeof newNum);
console.log(newNum);

//for the undefined in number conversion
let numConv = Number(loggedIn)
console.log(typeof numConv);
console.log(numConv);


//for the empty string the Boolean value is False
/*
Similarly value of number conversions 
true => 1
false => 0
undefined => NaN
null => 0
*/
