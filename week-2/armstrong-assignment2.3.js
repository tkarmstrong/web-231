/*
============================================
; Title:  armstrong-assignment2.3.js
; Author: Tyler Armstrong
; Date:   05 December 2018
; Modified By: N/A
; Description: Showcases a function property
;===========================================
*/

/**
* Params: None
* Response: output 
* Description: Returns value of the function property and logs in the console.
*/

//Start Program
const header = require('../armstrong-header');

console.log(header.display("Tyler", "Armstrong", "Exercise 2.3") + '\n');

myName.Tyler = "Tyler Armstrong";

function myName() {
    return myName.Tyler;
}

console.log("Hello " + myName.Tyler + "!");

//End Program