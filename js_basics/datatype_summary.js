/*
---------------------------------NOTES----------------------------------
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
-------------------------------------------------------------------------
*/

/* 
2 types of Datatypes;

primitive types:
string, number, boolean, symbol, bigInt, null, undefined
*/
const string = "Ashwin"

const number = 23

let str1 = 23
let str2 = 23
// if (str1>str2)
//     {
// console.log("str1 is bigg");
// }
// else
// {
//     console.log("Both are equal");
// }

const str = Symbol("122")
const anotherstr = Symbol("122")

// console.log(str == anotherstr);



/*
non-primitive types:
array, function, objects
*/

const fruits = []
fruits.length = 10

fruits.push("Mango","Watermelon","Jackfruit")
fruits[5] = "peaches";
// console.log(fruits.length);
console.log(fruits);