// declaration and initialization
const arr = [10, 2, 50, 66, 23, 5];
console.log(arr);

// push
arr.push(22);
console.log(arr);

// pop
arr.pop();
console.log(arr);

// shift
arr.shift();
console.log(arr);

// unshift
arr.unshift(13);
console.log(arr);

// sort
arr.sort((a, b) => a - b);
console.log(arr);

// forEach
arr.forEach((num) => console.log(num));

// filter
newArr = arr.filter((num) => num > 10);
console.log(newArr);

// find
val = arr.find((num) => num == 2);
console.log(val);

// map
mapArr = arr.map((num) => num ** 2);
console.log(mapArr);

// reduce
val = arr.reduce((acc, num) => (acc += num), 0);
console.log(val);

// some
val = arr.some((num) => num % 2 == 0);
console.log(val);

// every
val = arr.every((num) => num % 2 == 0);
console.log(val);

// flat
arr2 = [[10, 3], 23, 4, 5, [45, [22, 6], 7]];
console.log(arr2.flat(Infinity));

// includes
console.log(arr.includes(13));

// splice
arr.splice(2, 1);
console.log(arr);

// reverse
arr.reverse();
console.log(arr);

// concat
newArr = arr.concat(arr2);
console.log(newArr);

// join
console.log(arr.join(", "));
