/*
============================================
; Title:  Exercise 6.3 - Object Literals
; Author: Tyler Armstrong
; Date:   20 January 2019
; Modified By: N/A
; Description: Showcases object literals.
;===========================================
*/

/**
* Params: firstName, lastName, assignment
* Response: output 
* Description: Returns a well-formatted string header
*/
const header = require('../armstrong-header');

console.log(header.display("Tyler", "Armstrong", "Exercise 6.3") + '\n');

// object 
const ticket1 = {
  id: 101,
  name: "Help Desk Support",
  requestor: "Bob Jones"
}

// output to match starter code
console.log(`{id: ${ticket1.id}, name: ${ticket1.name}, requester: ${ticket1.requestor}}`);



  
  
  