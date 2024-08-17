// `undefined` means a variable has been declared but has not yet been assigned a value.

let exampleVariable;
console.log(exampleVariable);
console.log(typeof exampleVariable);

console.log("===========");

// `null` is an assignment value. It can bhe assigned to a variable as a representation of no value.
let nullExample = null;
console.log(nullExample); // null
console.log(typeof nullExample); // object

console.log("===========");

console.log(null === undefined); // false
console.log(undefined === null); // false

console.log(undefined == null); // true
console.log(null == undefined); // true

console.log(null === null); // true

console.log("===========");
