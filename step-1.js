var test = require('./util/test.js');

// =============================================================
// Basic Array Usage
// =============================================================

//You should be able to figure out how to do all of this by reading the JavaScript Array Guide.


//Create a function that returns an empty array.
function createEmptyArray() {
}

test.equal({ shouldBe: [], actual: createEmptyArray(), msg: 'createEmptyArray' });
// -------------------------------------------------------------


//Create an array with the numbers 1 and 3 in it.
function createArrayWithTwoNumbers() {
}

test.equal({ shouldBe: [1, 3], actual: createArrayWithTwoNumbers(), msg: 'createArrayWithTwoNumbers' });
// -------------------------------------------------------------


//Add the numbers 2 and 7 to the supplied array.
function addTwoAndSevenToThisArray(arr) {
}

test.equal({ shouldBe: [2, 7], actual: addTwoAndSevenToThisArray([]), msg: 'addTwoAndSevenToThisArray' });
// -------------------------------------------------------------


//Return the length of the supplied array.
function whatIsTheLength(arr) {
}

test.equal({ shouldBe: 0, actual: whatIsTheLength([]), msg: 'whatIsTheLength #1' });
test.equal({ shouldBe: 2, actual: whatIsTheLength(['hello', 'student']), msg: 'whatIsTheLength #2' });
test.equal({ shouldBe: 5, actual: whatIsTheLength([7, 5, 3, 12, 9]), msg: 'whatIsTheLength #3' });
// -------------------------------------------------------------
//Add the number zero to the beginning of the array.
function addAtTheBeginning(arr) {
}

test.equal({ shouldBe: [0, 1, 2, 3, 4], actual: addAtTheBeginning([1, 2, 3, 4]), msg: 'addAtTheBeginning' });
// -------------------------------------------------------------


//It's not uncommon to have to perform an action on each element of an array.
//In this case, increment each number of the array passed in.
function increment(arr) {
}

test.equal({ shouldBe: [57, 7, 103, 4, 13], actual: increment([56, 6, 102, 3, 12]), msg: 'increment' });
// -------------------------------------------------------------


//Grab the third element from the array and return it.
function grabTheThird(arr) {
}

test.equal({ shouldBe: 90, actual: grabTheThird([5, 6, 90, 2, 1]), msg: 'increment' });
// -------------------------------------------------------------


//What is the position of "Inconceivable!" in the array?. You cannot use the array indexer. Look for some other way to find something.
function inconceivableLocation(arr) {
}

test.equal({ shouldBe: 3, actual: inconceivableLocation(["He", "didn't", "fall!?!", "Inconceivable!"]), msg: 'inconceivableLocation'})
// -------------------------------------------------------------


//Retrieve all the numbers in the array but the first and the last
function retrieveAllButFirstAndLast(arr) {
}

test.equal({ shouldBe: [2, 3, 4], actual: retrieveAllButFirstAndLast([1, 2, 3, 4, 5]), msg: 'retrieveAllButFirstAndLast'})
// -------------------------------------------------------------


//Remove all the numbers in the array but the first and the last
function removeAllButFirstAndLast(arr) {
}

test.equal({ shouldBe: [1, 5], actual: removeAllButFirstAndLast([1, 2, 3, 4, 5]), msg: 'removeAllButFirstAndLast'})
// -------------------------------------------------------------


//If you pass a variable containing a Number to a function and you change the parameter
//  within the function, it will not change the original variable. This is because it copies
//  the value of the variable when it passed into the function. People describe this behavior
//  by saying the variable is _passed by value_.

var aNumber = 5;
function incrementIt(num) {
  num++;
  return num;
}
var newNumber = incrementIt(aNumber);
//old is still 5, new is 6
console.assert(aNumber !== newNumber);


//If you pass a variable containing an array to a function and you change the parameter
//  within the function, it changes the original variable. It does not copy. Rather, it
//  holds a reference to the original variable. People describe this behavior
//  by saying the variable is _passed by reference_. As a result, you could say that this
//  function has _side effects_ outside of it.

//The following method
var originalArray = [0, 1, 2, 3, 4, 5];
function incrementWithoutSideEffects(arr) {
  //TODO: This changes the array outside. Change anything within this method to keep that from happening.
  for (var i = 0; i < arr.length; i++) {
    arr[i]++;
  }
  return arr;
}

var newArray = incrementWithoutSideEffects(originalArray);
test.equal({ shouldBe: [0, 1, 2, 3, 4, 5], actual: originalArray, msg: 'incrementWithoutSideEffects - original' });
test.equal({ shouldBe: [1, 2, 3, 4, 5, 6], actual: newArray, msg: 'incrementWithoutSideEffects - new' });






test.summary();
