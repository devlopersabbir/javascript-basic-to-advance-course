1. `undefined` means a variable has been declared but has not yet been assigned a value :

```js
var testVar;
console.log(testVar); //shows undefined
console.log(typeof testVar); //shows undefined
```

2. `null` is an assignment value. It can be assigned to a variable as a representation of no value :

```js
var testVar = null;
console.log(testVar); //shows null
console.log(typeof testVar); //shows object
```

From the preceding examples, it is clear that `undefined` and `null` are two distinct types: `undefined` is a type itself (undefined) while `null` is an object.

3. Proof :

```js
    console.log(null === undefined) // false (not the same type)
    console.log(null == undefined) // true (but the "same value")
    console.log(null === null) // true (both type and value are the same)

// and

    null = 'value' // Uncaught SyntaxError: invalid assignment left-hand side
    undefined = 'value' // 'value'

```
