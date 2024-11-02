// function definition and function call
function add(a, b) {
	return a + b;
}
console.log(add(5, 3));

// predefined
console.log("Hello");

// arrow
const multiply = (x, y) => x * y;
console.log(multiply(4, 5));

// callback
function sayHello() {
	console.log("Hello!");
}
function greet(callback) {
	callback();
}
greet(sayHello);

// anonymous
const myFunction = function () {
	console.log("This is an anonymous function.");
};
myFunction();

// recursive
function factorial(n) {
	if (n === 0) return 1;
	return n * factorial(n - 1);
}
console.log(factorial(5));

// nested
function outerFunction() {
	function innerFunction() {
		console.log("This is the inner function.");
	}
	innerFunction();
}
outerFunction();