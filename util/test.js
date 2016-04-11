var chalk = require('chalk');
var compareArrays = require('./arrays.js').compareArrays;
var isArray = require('./core.js').isArray;

var correctCount = 0;
var incorrectCount = 0;

function fieldCount(obj) {
  var count = 0;
  for (var f in obj) {
    count++;
  }
  return count;
}

function shallowCompareObjects(obj0, obj1) {
  var obj0FieldCount = fieldCount(obj0);
  var obj1FieldCount = fieldCount(obj1);

  if (fieldCount(obj0) !== fieldCount(obj1)) {
    return false;
  }

  for (var field in obj0) {
    if (obj0[field] !== obj1[field]) return false;
  }

  return true;
}


function compareGeneral(parms) {

  var actual = parms.actual,
    shouldBe = parms.shouldBe,
    msg = parms.msg;

  //console.log('compareGeneral', 'shouldBe', shouldBe, 'actual', actual);
  if (shouldBe === actual) {
    return true;
  }
  else {
    var surroundChar = "";
    if (typeof actual === 'string') {
      surroundChar = "'";
    }


    console.log(chalk.red(msg));
    console.log(chalk.red(' - was       --> '), chalk.grey(surroundChar), chalk.grey(actual), chalk.grey(surroundChar));
    console.log(chalk.red(' - should be --> '), chalk.grey(surroundChar), chalk.grey(shouldBe), chalk.grey(surroundChar));
  }
}

function equal(parms) {

  var areEqual = equalImpl(parms);

  if (areEqual) {
    //console.log(parms.msg, 'incrementing', correctCount);
    correctCount = correctCount + 1;
  }
  else {
    incorrectCount = incorrectCount + 1;
  }
}

function equalImpl(parms) {
  var result;

  if (isArray(parms.shouldBe)) {
    result = compareArrays(parms)
  }
  else {
    result = compareGeneral(parms);
    //console.log(parms.msg, result);
  }

  return result;
}

/*
function notEqual(parms) {
  var areEqual = equalImpl(parms);

  console.log('notEqual - areEqual value =', areEqual);

  if (areEqual === true) {
    incorrectCount += 1;
  }
  else {
    correctCount += 1;
  }
}
*/

function summary() {
  console.log('');
  console.log(chalk.gray('Test Results:'));
  if (incorrectCount > 0) {
    console.log(chalk.red(' - Incorrect:'), chalk.red(incorrectCount));
  }
  console.log(chalk.green(' - Correct:'), chalk.green(correctCount));
  console.log('');
}

module.exports = {
  equal: equal,
  summary: summary
}
