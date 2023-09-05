// confirm
const isTrue = confirm("Are you sure?");

/**
 * Okay -> User jodi okey press kore tahole amra kono akta task perform korbo.
 * Okay will gaves us : true
 *
 * Cancel -> User jodi amader cancel(false) tahole amra onno kono akta kaj korbo
 */

console.log(isTrue);
// true | false

// prompt
const name = prompt("Give me your name: ");
const age = prompt("Give me your age: ");
const youClass = prompt("Tell me your class");

console.log(`Name is: ${name}. Age is: ${age}. And the class is ${youClass}`);

console.log(typeof age);

console.log("Name is: " + name);
console.log("Age is: " + age);
console.log("Class is: " + youClass);
