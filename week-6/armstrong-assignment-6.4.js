/*
============================================
; Title:  Assignment 6.4 - Nested Object Literals
; Author: Tyler Armstrong
; Date:   20 January 2019
; Modified By: N/A
; Description: Showcases nested object literals.
;===========================================
*/

/**
* Params: firstName, lastName, assignment
* Response: output 
* Description: Returns a well-formatted string header
*/
const header = require('../armstrong-header');

console.log(header.display("Tyler", "Armstrong", "Assignment 6.4") + '\n');

// object 
const ticket = {
  id: 105,
  name: "Help Desk Support",
  dateCreated: new Date().toLocaleDateString('en-US'),

  person: {
    id: 1,
    firstName: "Bob",
    lastName: "Jones",
    jobTitle: "Programmer I"
  }
}

// output to match starter code
console.log(`Ticket ${ticket.id} was created on ${ticket.dateCreated} and assigned to employee ${ticket.person.firstName} ${ticket.person.lastName} (${ticket.person.jobTitle}).`);


  
  
  