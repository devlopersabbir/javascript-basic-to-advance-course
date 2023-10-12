const a = 4;
const b = 3;

console.log(a + b); // 7

/**
 * Precedence
 * (*)
 * (/)
 */
console.log(a + b * 5); // 4 + 3 * 5 =>
// 3 * 5 -> 15 + 4
console.log("Expression", 8 / (4 - 3)); // ? - 3 => -1

// starting with left
console.log(7 * 3 * a - b + 20); // 7 * 3 = ? * 4 => ? - 3 => ? + 20

console.log(5 ** (5 - 2)); // 3
