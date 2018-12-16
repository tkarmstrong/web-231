/*
============================================
; Title:  Assignment 3.3 - Control Statements
; Author: Tyler Armstrong
; Date:   16 December 2018
; Modified By: N/A
; Description: Showcases the switch statement in JavaScript.
;===========================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 3.3
  Today's Date

  // Expected output
  The enter key was pressed
*/

/**
* Params: firstName, lastName, assignment
* Response: output 
* Description: Returns a well-formatted string header
*/
const header = require('../armstrong-header');

console.log(header.display("Tyler", "Armstrong", "Exercise 3.3"));

// eventKeyCode to check
let eventKeyCode = 13;

// start of switch to replace if, else statements
switch (eventKeyCode) {
  case 13:
    console.log('The enter key was pressed.')
    break;
  case 16:
    console.log('The shift key was pressed.')
    break;
  case 32:
    console.log('The spacebar key was pressed.')
    break;
  case 8:
    console.log('The backspace / delete key was pressed.')
    break;    
  default:
    console.log('Unrecognized key.')
    break;
}
