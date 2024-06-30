//basically all primitive datatypes are stored in stack memory
//while the non-primitive are stored in heap memory

//example

let myName = "Ashwin"

let anotherName = myName

// console.log(myName);
// console.log(anotherName);


let userOne = {
    email: "user@gmail.com",
    number: "233444"
}
let userTwo = userOne
userTwo.email = "ashwin@google.com"

console.log(userTwo.email);
console.log(userOne.email);