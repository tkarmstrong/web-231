/*
============================================
; Title:  Assignment 5.3 - Object Collections
; Author: Tyler Armstrong
; Date:   13 January 2019
; Modified By: N/A
; Description: Showcases object collections.
;===========================================
*/

/**
* Params: firstName, lastName, assignment
* Response: output 
* Description: Returns a well-formatted string header
*/
const header = require('../armstrong-header');

console.log(header.display("Tyler", "Armstrong", "Exercise 5.3") + '\n');

const composers = [
  {
    lastName: "Beethoven", genre: "Classical", rating: 8
  },
  {
    lastName: "Mozart", genre: "Classical", rating: 10
  },
  {
    lastName: "Bach", genre: "Classical", rating: 9
  },
  {
    lastName: "Haydn", genre: "Classical", rating: 6
  },
  {
    lastName: "Schubert", genre: "Classical", rating: 5
  }
];

console.log("-- COMPOSERS --");

composers.forEach(composer => console.log
  (
  "Last Name: " + composer.lastName + ", Genre: " + composer.genre + ", Rating: " + composer.rating
  )
);


  
  
  