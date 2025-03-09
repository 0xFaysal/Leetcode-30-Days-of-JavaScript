function addOne(num) {
    return num + 1;
}
function square(num) {
    return num * num;
}
function double(num) {
    return num * 2;
}

function compose(...functions) {
    return function (x) {
        return functions.reduceRight((acc, func) => func(acc), x);
    };
}

const composedFunction = compose(addOne, square, double);
console.log(composedFunction(4)); // Output: 65
// Explanation:
// Starting with x = 4.
// double(4) = 8
// square(8) = 64
// addOne(64) = 65
// The final result is 65.
//
// The compose function takes an array of functions and returns a new function that applies the functions in reverse order.

let String = "Hello, World!";
let newArr = Array.from(String);
console.log(newArr); // Output: ['H', 'e', 'l', 'l', 'o', ',', ' ', 'W', 'o', 'r', 'l', 'd', '!']

let fruits = ["apple", "banana", "cherry"];
let f = fruits.entries();

let key = fruits.keys();
let value = fruits.values();
console.log(key); // Output: [0, 1, 2]
console.log(value); // Output: ['apple', 'banana', 'cherry']

for (let x of f) {
    console.log(x);
}
for (let x of key) {
    console.log(x);
}
for (let x of value) {
    console.log(x);
}

var argumentsLength = function (...args) {
    return args.length;
};
console.log(argumentsLength(1, 2, 3)); // Output: 3
