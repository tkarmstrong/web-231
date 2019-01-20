/*
============================================
; Title:  Exercise 6.2 - Try Catch
; Author: Tyler Armstrong
; Date:   20 January 2019
; Modified By: N/A
; Description: Showcases try catch block.
;===========================================
*/

/**
* Params: firstName, lastName, assignment
* Response: output 
* Description: Returns a well-formatted string header
*/
const header = require('../armstrong-header');

console.log(header.display("Tyler", "Armstrong", "Exercise 6.2") + '\n');

try {
  // Variable to use
  let x = 0.09;

  // Checks for valid value
  if (x < 1) {
    throw "Error: x is less than 1";
  }
  // Output
  console.log(x);
// Catches and logs error
} catch (error) {
  console.log(error);
} finally {
  console.log("Finally clause reached...")
}



  
  
  