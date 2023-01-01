// ÖRN 1
// console.log("DECLARATION");
// function printHello() {
    // console.log("Hello");
// }
// printHello()
// printHello()
// 
// ÖRN 2
// function greet(firstName, lastName){
// console.log(`Hi, ${firstName} ${lastName}`);
// }
// 
// const firstName = prompt("your name:")
// const lastName = prompt("your surname:")
// greet (lastName, lastName)

// ÖRN 3
function calculate(name, yob){
    const age = new Date().getFullYear() - yob
    console.log (`${name}'s age is ${age}`);
}

const name = prompt("enter your name")
const yob = prompt("yob")

calculate("name", "yob")