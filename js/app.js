'use strict';
// how to store values? using let
// how to know the result? console.log()
// how to check things in JavaScript? using if statement

let num1 = parseInt(prompt('enter first number'));
let num2 = parseInt(prompt('enter second number'));
console.log('sum = ', num1 + num2);
// parseFloat accepts number with decimals like -2.1 , 2.1
// parseInt accepts -2 , 2 (10.5=10) (10.1=10)
// Number accepts all types of number


let q1 = confirm('do you like football');
console.log(q1);
// it will appear a message for the user do you like football he can only press on either ok  or cansel if he clicks ok (true will appear in console) if he clicks on cancel(false will appear in console)



// IF statement
// if(condition){
// code
// } else{

// }
let q2 = Number(prompt('Kindly enter a number'));
if(q2===5){
  alert('correct');
  console.log(q2);
}else{
  alert('wrong');
  console.log(q2);
}


// This is a question to practice arrays and loops
// you have this an array of these numbers [100,20,33,45,44,37,10,2,3,5,15,12,31,32,88,94,62,63,77,66,27,1,7,8,9]
// write a function that return or console.log   'number of even numbers is ' and count the even numbers. if you want to count the odd number as well do the same return. after you finish it slack me with the answer in private message
// example of the output
// number of even numbers is 12
// number of odd numbers is 13

let numbers=[100,20,33,45,44,37,10,2,3,5,15,12,31,32,88,94,62,63,77,66,27,1,7,8,9];

