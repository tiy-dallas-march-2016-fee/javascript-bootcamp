var test = require('./util/test.js');


function createAnEmptyObject() {
}

test.equal({ shouldBe: {}, actual: createAnEmptyObject(), msg: 'createAnEmptyObject' });
// -------------------------------------------------------------


function createAnArrayWithTwoEmptyObjects() {
}

test.equal({ shouldBe: [{}, {}], actual: createAnArrayWithTwoEmptyObjects(), msg: 'createAnArrayWithTwoEmptyObjects' });
// -------------------------------------------------------------


var people = [
  { firstName: 'Raistlin', lastName: 'Majere', age: 26, hairColor: 'gray'},
  { firstName: 'Tanis', lastName: 'Half-Elven', age: 32, hairColor: 'red'},
  { firstName: 'Kitiara', lastName: 'uth Matar', age: 29, hairColor: 'black'},
  { firstName: 'Laurana', lastName: 'Kanan', age: 36, hairColor: 'blond'},
  { firstName: 'Sturm', lastName: 'Brightblade', age: 47, hairColor: 'black'},
  { firstName: 'Tasslehoff', lastName: 'Burrfoot', age: 52, hairColor: 'brown'},
  { firstName: 'Goldmoon', lastName: '', age: 32, hairColor: 'blond'},
  { firstName: 'Riverwind', lastName: '', age: 33, hairColor: 'brown'},
  { firstName: 'Caramon', lastName: 'Majere', age: 26, hairColor: 'brown'},
  { firstName: 'Flint', lastName: 'Fireforge', age: 120, hairColor: 'brown'},
]


//Write a function to return an objects last name
function lastName(obj) {
}

test.equal({ shouldBe: 'Majere', actual: lastName(people[0]), msg: 'lastName Majere' });
test.equal({ shouldBe: 'Burrfoot', actual: lastName(people[5]), msg: 'lastName Burrfoot' });
// -------------------------------------------------------------


//Write a function to return a supplied property of an object
function getProperty(obj, propertyName) {
}

test.equal({ shouldBe: 'Half-Elven', actual: getProperty(people[1], 'lastName'), msg: 'getProperty lastName' });
test.equal({ shouldBe: 'Flint', actual: getProperty(people[9], 'firstName'), msg: 'getProperty firstName' });
test.equal({ shouldBe: 'black', actual: getProperty(people[4], 'hairColor'), msg: 'getProperty hairColor' });
// -------------------------------------------------------------


//Write a function that will return a filtered array based on the object's first name.
function filterByFirstName(arr, letter) {
}

test.equal({ shouldBe: [{ firstName: 'Goldmoon', lastName: '', age: '32', hairColor: 'blond'}], actual: filterByFirstName(people, 'G'), msg: 'filterByFirstName G' });
test.equal({ shouldBe: [{ firstName: 'Raistlin', lastName: 'Majere', age: '26', hairColor: 'gray'}, { firstName: 'Riverwind', lastName: '', age: '33', hairColor: 'brown'}], actual: filterByFirstName(people, 'R'), msg: 'filterByFirstName R' });
// -------------------------------------------------------------


function filterByLastName(arr, letter) {
}

test.equal({ shouldBe: [{ firstName: 'Tasslehoff', lastName: 'Burrfoot', age: '52', hairColor: 'brown'}, { firstName: 'Sturm', lastName: 'Brightblade', age: '47', hairColor: 'black'}], actual: filterByLastName(people, 'B'), msg: 'filterByLastName B' });
test.equal({ shouldBe: [{ firstName: 'Flint', lastName: 'Fireforge', age: '120', hairColor: 'brown'}], actual: filterByLastName(people, 'F'), msg: 'filterByLastName F' });
// -------------------------------------------------------------


function filterByNoLastName(arr) {
}

test.equal({ shouldBe: [{ firstName: 'Goldmoon', lastName: '', age: '32', hairColor: 'blond'}, { firstName: 'Riverwind', lastName: '', age: '33', hairColor: 'brown'}], actual: filterByNoLastName(people), msg: 'filterByNoLastName' });
// -------------------------------------------------------------


//Sum the ages of the people passed in
function sumAges(arr) {
}

test.equal({ shouldBe: 433, actual: sumAges(people), msg: 'sumAges' });
// -------------------------------------------------------------


//Create a function to filter by hair color.
function filterByHairColor(arr, hairColor) {
}

test.equal({ shouldBe: [{ firstName: 'Kitiara', lastName: 'uth Matar', age: 29, hairColor: 'black'}, { firstName: 'Sturm', lastName: 'Brightblade', age: 47, hairColor: 'black'}], actual: filterByHairColor(people, 'black'), msg: 'filterByHairColor black' });
test.equal({ shouldBe: [], actual: filterByHairColor(people, 'blue'), msg: 'filterByHairColor blue' });
// -------------------------------------------------------------


//Get the total age of everyone with a certain color of hair
function totalAgeBasedOnHairColor(arr, hairColor) {
}

test.equal({ shouldBe: 76, actual: totalAgeBasedOnHairColor(people, 'black'), msg: 'totalAgeBasedOnHairColor black' });
test.equal({ shouldBe: 68, actual: totalAgeBasedOnHairColor(people, 'blond'), msg: 'totalAgeBasedOnHairColor blond' });
// -------------------------------------------------------------


//Get the youngest person with a supplied hair color.
function youngestPersonWithHairColor(arr, hairColor) {
}

test.equal({ shouldBe: { firstName: 'Goldmoon', lastName: '', age: 32, hairColor: 'blond'}, actual: youngestPersonWithHairColor(people, 'blond'), msg: 'youngestPersonWithHairColor blond' });
test.equal({ shouldBe: { firstName: 'Caramon', lastName: 'Majere', age: 26, hairColor: 'brown'}, actual: youngestPersonWithHairColor(people, 'brown'), msg: 'youngestPersonWithHairColor brown' });
// -------------------------------------------------------------


function lastNameOfYoungestPersonWithHairColor(arr, hairColor) {
}

test.equal({ shouldBe: 'Majere', actual: lastNameOfYoungestPersonWithHairColor(people, 'brown'), msg: 'lastNameOfYoungestPersonWithHairColor brown' });
test.equal({ shouldBe: 'uth Matar', actual: lastNameOfYoungestPersonWithHairColor(people, 'black'), msg: 'lastNameOfYoungestPersonWithHairColor black' });
// -------------------------------------------------------------


test.summary();
