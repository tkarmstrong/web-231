/*
============================================
; Title:  Assignment 5.4 - Filtering/Reducing Complex Data Structures
; Author: Tyler Armstrong
; Date:   13 January 2019
; Modified By: N/A
; Description: Showcases filtering/reducing complex data structures.
;===========================================
*/

/**
* Params: firstName, lastName, assignment
* Response: output 
* Description: Returns a well-formatted string header
*/
const header = require('../armstrong-header');

console.log(header.display("Tyler", "Armstrong", "Assignment 5.4") + '\n');

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

const composersByRating = composers.map(function(composer) {
  return {rating: composer.rating, lastName: composer.lastName}
}); 

const composersByGenre = composers.map(function(composer) {
  return {genre: composer.genre, lastName: composer.lastName}
});

console.log("-- COMPOSER BY RATING --");
const composerListByRating = composersByRating.forEach(function(composer){
  console.log("Rating: " + composer.rating);
  console.log("Composer: " + composer.lastName + '\n');
});

console.log("\n-- COMPOSER BY GENRE --");
const composerListByGenre = composers.forEach(function(composer) {
  console.log("Genre: " + composer.genre);
  console.log("Composer: " + composer.lastName + '\n');
});