/*
============================================
; Title:  Assignment 3.2 - Pattern Matching Functions
; Author: Tyler Armstrong
; Date:   16 December 2018
; Modified By: N/A
; Description: Showcases pattern matching functions.
;===========================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 3.2
  Today's Date

  // output from the match() function
  false
  true

  // output from the if...else blocks
  Truck and Car do not match!
  Bike and Bike do match!
  Four and Three do not match!
*/

/**
* Params: firstName, lastName, assignment
* Response: output 
* Description: Returns a well-formatted string header
*/
const header = require('../armstrong-header');

console.log(header.display("Tyler", "Armstrong", "Exercise 3.2"));

// local test variables
const bike1 = "Bike";     //1
const bike2 = "Bike";     //2
const truck = "Truck";    //3
const car = "Car";        //4
const four = "Four";      //5
const three = "Three";    //6

/**
* Params: any, any
* Response: output 
* Description: Returns a true if arguments match, else return false if they don't.
*/
function match(arg1, arg2) {
  if (arg1 === arg2) {
    return true;
  } else {
    return false;
  }
}

/**
* Params: any, any
* Response: output 
* Description: Returns a string message if they arguments do not match.
*/
function logMismatch(arg1, arg2) {
  return console.log(`${arg1} and ${arg2} do not match!`);
}

/**
* Params: any, any
* Response: output 
* Description: Returns a string message if they arguments do match.
*/
function logMatch(arg1, arg2) {
  return console.log(`${arg1} and ${arg2} do match!`);
}

//match() output tests
console.log('\n' + match(truck, car));
console.log(match(bike1, bike2));
console.log(match(four, three) + '\n');

// Test case 1 using truck & car variables.
if (match(truck, car)) {
  logMatch(truck, car);
} else {
  logMismatch(truck, car);
}

// Test case 2 using bike1 & bike2 variables.
if (match(bike1, bike2)) {
  logMatch(bike1, bike2);
} else {
  logMismatch(bike1, bike2);
}

// Test case 3 using four & three variables.
if (match(four, three)) {
  logMatch(four, three);
} else {
  logMismatch(four, three);
}