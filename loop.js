// while
let count = 0;
while (count < 3) {
	console.log("Count is: " + count);
	count++;
}

// for
for (let j = 0; j < 5; j++) {
	console.log("Value of j is: " + j);
}

// nested
for (let p = 0; p < 3; p++) {
	for (let q = 0; q < 2; q++) {
		console.log(`Outer Loop: ${p}, Inner Loop: ${q}`);
	}
}

const array = [10, 2, 50, 66, 23, 5];

// for-of
for (const element of array) {
	console.log(element);
}

// for-in
for (const element in array) {
	console.log(element, array[element]);
}
