
// Array methods (e.g., forEach, map, filter, reduce)

const arr = [1, 2, 3, 4, 5];
console.log({arr});
// map
// Array.prototype.map
// Creates a new array with the results of calling a provided function on every element in the array.
const squares = arr.map(x => x * x);
console.log("map Result",squares); // [1, 4, 9, 16, 25]

// forEach
// Array.prototype.forEach
// Executes a provided function once for each array element.
arr.forEach((el)=>console.log('forEach',{el}))

//filter
// Array.prototype.filter
// Creates a new array with all elements that pass the test implemented by the provided function.
const filterArr=arr.filter((el)=>el%2==0)
console.log({filterArr});

// reduce
// Array.prototype.reduce
// Executes a reducer function on each element of the array, resulting in a single output value.
const SumByReduce=arr.reduce((acc,curr)=>acc+curr,0)
console.log({SumByReduce});

// reduceRight
// Array.prototype.reduceRight
// Applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.

const SumByReduceRight=arr.reduceRight((acc,curr)=>acc+curr,0)
console.log({SumByReduceRight});

// every
// Array.prototype.every
// Tests whether all elements in the array pass the test implemented by the provided function.
// Its test every element is grater than 0 is true 
const everyTestResult=arr.every((everyEl)=>everyEl>0)
console.log({everyTestResult})

// some
// Array.prototype.some
// Tests whether at least one element in the array passes the test implemented by the provided function.
const someTestResult=arr.some((el)=>el==4)
console.log({someTestResult});

// find
// Array.prototype.find
// Returns the value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
const findResult=arr.find((el)=>el>1)
console.log({findResult});

// findIndex
// Array.prototype.findIndex
// Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, -1 is returned.
const findIndexResult=arr.findIndex((x)=>x==1)
console.log({findIndexResult});

// includes
// Array.prototype.includes
// Determines whether an array includes a certain value among its entries, returning true or false.
const includesResult=arr.includes(15)
console.log({includesResult});

// indexOf
// Array.prototype.indexOf
// Returns the first index at which a given element can be found in the array, or -1 if it is not present.
const arr1=[1,2,3,1,2,3]
const indexOfResult=arr1.indexOf(3)
console.log({indexOfResult});

// lastIndexOf
// Array.prototype.lastIndexOf
// Returns the last index at which a given element can be found in the array, or -1 if it is not present.
const lastIndexOfResult=arr1.lastIndexOf(3)
console.log({lastIndexOfResult});

// concat
// Array.prototype.concat
// Merges two or more arrays. This method does not change the existing arrays but returns a new array.

const mergeArrByConcat=arr.concat(arr1)
console.log({mergeArrByConcat});

// slice
// Array.prototype.slice
// Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).

const sliceArr=arr1.slice(2,4)
console.log({sliceArr});

// splice
// Array.prototype.splice
// Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
const removedArrBySplice=arr1.splice(0,2,10,100,1000,20)
console.log({removedArrBySplice});
console.log({arr1});

//join
// Array.prototype.join
// Joins all elements of an array into a string and returns this string.

const joinedArrResult=arr1.join('Singh')
console.log({joinedArrResult});

//reverse
// Array.prototype.reverse
// Reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
const reverseArrResult=arr1.reverse()
console.log({reverseArrResult});

//sort
// Array.prototype.sort
// Sorts the elements of an array in place and returns the sorted array.
const arr2=[10,5,100,2,17]
arr2.sort((a,b)=>a-b)
console.log({arr2});
arr2.sort((a,b)=>b-a)
console.log({arr2});

// flat
// Array.prototype.flat (ES10)
// Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const arr3=[1,2,[3,[4,[5]]]]
const flatArrDepth1=arr3.flat(3)
console.log({flatArrDepth1});

// flatMap
// Array.prototype.flatMap (ES10)
// First maps each element using a mapping function, then flattens the result into a new array.
const array = [1, 2, 3,10];
const flatMapped = array.flatMap(x => [x, x * 2]);
console.log({flatMapped}); // Output: [1, 2, 2, 4, 3, 6]


// fill
// Array.prototype.fill
// Changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
console.log({"fillAll":array.fill(9)});
console.log({"FillFromIndex2":array.fill(8,2)});
console.log({"FillFromIndex2To3":array.fill(99,2,3)});

// copyWithin
// Array.prototype.copyWithin
// Shallow copies part of an array to another location in the same array and returns it, without modifying its length.
const array1=[1,2,3,4,5,6]
console.log({withoutCopy:array1}); 
array1.copyWithin(1, 2);
console.log({copyWithin:array1}); 

// toString
// Array.prototype.toString
// Returns a string representing the specified array and its elements.
console.log({toString:array1.toString()});

// toLocaleString
// Array.prototype.toLocaleString
// Returns a localized string representing the elements of the array.

const array3 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const localeString = array3.toLocaleString('en', { timeZone: 'UTC' });
console.log({array3}); // Output: "1,a,12/21/1997, 2:12:00 PM"

// at
// Array.prototype.at (ES12)
// Takes an integer value and returns the item at that index, allowing for positive and negative integers.
// -ve from the end
//+ve from start
console.log({ItemAtIndex:array3.at(-2)});