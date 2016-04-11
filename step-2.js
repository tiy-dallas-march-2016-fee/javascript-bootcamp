var test = require('./util/test.js');

// =============================================================
// Building On Basic Array Knowledge
// =============================================================

var words = ['the', 'cowardly', 'rabid', 'cow', 'quickly', 'ate', 'the', 'quiche', 'twice', 'after', 'transferring', 'treeward'];

//Write a function that gets all the words that start with 'c'
function allWordsThatStartWithLowercaseC(arr) {
}

test.equal({ shouldBe: ['cowardly', 'cow'], actual: allWordsThatStartWithLowercaseC(words), msg: 'allWordsThatStartWithLowercaseC' });
// -------------------------------------------------------------


//That works but we should be creating more generic functions. Implement it with the letter passed in.
function filter(arr, letter) {
}

test.equal({ shouldBe: ['cowardly', 'cow'], actual: filter(words, 'c'), msg: 'filter' });
test.equal({ shouldBe: ['the', 'the', 'twice', 'transferring', 'treeward'], actual: filter(words, 't'), msg: 'filter' });
test.equal({ shouldBe: ['quickly', 'quiche'], actual: filter(words, 'q'), msg: 'filter' });
// -------------------------------------------------------------


//Get all the words that do NOT begin with the supplied letter.
function reject(arr, letter) {
}

test.equal({ shouldBe: ['cowardly', 'rabid', 'cow', 'quickly', 'ate', 'quiche', 'after'], actual: reject(words, 't'), msg: 'reject' });
test.equal({ shouldBe: ['the', 'cowardly', 'rabid', 'cow', 'ate', 'the', 'twice', 'after', 'transferring', 'treeward'], actual: reject(words, 'q'), msg: 'reject' });
// -------------------------------------------------------------


//Return the count of all the words that begin with the supplied letter.
function countOfWordsThatStartWithLetter(arr, letter) {
}

test.equal({ shouldBe: 2, actual: countOfWordsThatStartWithLetter(words, 'c'), msg: 'countOfWordsThatStartWithLetter' });
test.equal({ shouldBe: 5, actual: countOfWordsThatStartWithLetter(words, 't'), msg: 'countOfWordsThatStartWithLetter' });
test.equal({ shouldBe: 2, actual: countOfWordsThatStartWithLetter(words, 'q'), msg: 'countOfWordsThatStartWithLetter' });
// -------------------------------------------------------------


//Return the count of all the letters in the word that begin with the supplied letter.
function countOfLettersInWordsThatStartWithLetter(arr, letter) {
}

test.equal({ shouldBe: 11, actual: countOfLettersInWordsThatStartWithLetter(words, 'c'), msg: 'countOfLettersInWordsThatStartWithLetter' });
test.equal({ shouldBe: 31, actual: countOfLettersInWordsThatStartWithLetter(words, 't'), msg: 'countOfLettersInWordsThatStartWithLetter' });
test.equal({ shouldBe: 13, actual: countOfLettersInWordsThatStartWithLetter(words, 'q'), msg: 'countOfLettersInWordsThatStartWithLetter' });
// -------------------------------------------------------------


//Reverse the supplied array
function reverse(arr) {
}

test.equal({ shouldBe: ['treeward', 'transferring', 'after', 'twice', 'quiche', 'the', 'ate', 'quickly', 'cow', 'rabid', 'cowardly', 'the'], actual: reverse(words), msg: 'reverse' });
// -------------------------------------------------------------


//Concatenate and delimit the array with the supplied delimiter.
function delimit(arr, delimiter) {
}

test.equal({ shouldBe: 'the,cowardly,rabid,cow,quickly,ate,the,quiche,twice,after,transferring,treeward', actual: delimit(words, ','), msg: 'delimit' });
test.equal({ shouldBe: 'the|cowardly|rabid|cow|quickly|ate|the|quiche|twice|after|transferring|treeward', actual: delimit(words, '|'), msg: 'delimit' });
// -------------------------------------------------------------


//Find all the words that start with the supplied letter then delimit them with the supplied delimiter
function filterThenDelimit(arr, letter, delimiter) {
}

test.equal({ shouldBe: 'cowardly|cow', actual: filterThenDelimit(words, 'c', '|'), msg: 'filterThenDelimit' });
// -------------------------------------------------------------


//Find all the words that start with the supplied letter, reverse the array, then delimit them with the supplied delimiter
function filterReverseThenDelimit(arr, letter, delimiter) {
}

test.equal({ shouldBe: 'cow|cowardly', actual: filterReverseThenDelimit(words, 'c', '|'), msg: 'filterReverseThenDelimit' });
test.equal({ shouldBe: 'treeward,transferring,twice,the,the', actual: filterReverseThenDelimit(words, 't', ','), msg: 'filterReverseThenDelimit' });
// -------------------------------------------------------------





test.summary();
