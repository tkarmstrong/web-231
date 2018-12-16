/*
============================================
; Title:  Assignment 3.4 - Loops
; Author: Tyler Armstrong
; Date:   16 December 2018
; Modified By: N/A
; Description: Showcases the for loop statement.
;===========================================
*/

/**
* Params: firstName, lastName, assignment
* Response: output 
* Description: Returns a well-formatted string header
*/
const header = require('../armstrong-header');

console.log(header.display("Tyler", "Armstrong", "Assignment 3.4"));

// variable to check
const numberToCheck = 4;

// Start game
console.log("\n" + "-- DO THE NUMBERS MATCH GAME --");

for (let index = 0; index < 10; index++) {
  const randomNumberToCheck = randomNumber();
  if (match(numberToCheck, randomNumberToCheck)) {
    logMatch(numberToCheck, randomNumberToCheck);
  } else {
    logMismatch(numberToCheck, randomNumberToCheck);
  }
}

// End game


// Functions called in for loop

/**
* Params: any, any
* Response: output 
* Description: Returns true if arguments match, else return false if they don't.
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

/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 */
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}