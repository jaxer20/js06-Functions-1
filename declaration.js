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
// function calculate(name, yob){
// const age = new Date().getFullYear() - yob
// console.log (`${name}'s age is ${age}`);
// }
//
// const name = prompt("enter your name")
// const yob = prompt("yob")
//
// calculate("name", "yob")

// ÖRN4
// function oddOrEven (num){
// return num % 2 ? "ODD" : "EVEN"
// }
// // const number = +prompt("Please enter a number to check odd or even:")
// const oddEven = oddOrEven(number)
// console.log(`${number} is ${oddEven}`);

// ÖRN 5 function expression ile yazma
// let oddOrEven = function (num){
// return num % 2 ? "ODD" : "EVEN"
// }
// console.log(oddOrEven(5));
// console.log(oddOrEven(6));

// ÖRN 6 function expression ile girilen 3 sayının en büyüğünü bulalım
// const findBiggest = function (n1,n2,n3){
// let biggest = n1
// if(n2>= biggest){
// biggest = n2
// }
// if (n3>= biggest){
// biggest = n3
// }
// return biggest
// }
//
// // console.log(`The Biggest: ${findBiggest(2, 1, 4)}`);
// console.log(`The Biggest: ${findBiggest(2, 8,
// 4)}`);
// // console.log(`The Biggest: ${findBiggest(-12, -1, 0)}`);

// ÖRN 7 bir fonksiyon içersiinde başka fonksiyonlar çağrılabilir
const add = function (n1, n2) {
  return n1 + n2;
};
const sub = function (n1, n2) {
  return n1 - n2;
};
const div = function (n1, n2) {
  return n1 / n2;
};
const mul = function (n1, n2) {
  return n1 * n2;
};
const compute = function (n1, n2, op) {
  let result = 0;
  switch (op) {
    case "+":
      result = add(n1, n2);
      break;
    case "-":
      result = sub(n1, n2);
      break;
    case "/":
      result = div(n1, n2);
      break;
    case "*":
      result = mul(n1, n2);
      break;
    default:
      break;
  }
  return result;
};
console.log(compute(9, 3, "/"));
console.log(compute(40, 3, "*"));
console.log(compute(48, 3, "+"));
console.log(compute(446, 323, "-"));
