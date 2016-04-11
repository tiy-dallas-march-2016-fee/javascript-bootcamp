var isArray = require('./core.js').isArray;

//console.log('is array yo', isArray);// isArray([]));

function undef() { return 'undefinedz'; }

function array(arr) {
  if (arr.length === 0) {
    return '[]';
  }
  else {
    return JSON.stringify(arr);
  }
}


function getFormatter(obj) {
  if (obj === undefined) return undef();
  if (isArray(obj)) return array(obj);
}


module.exports = {
  get: getFormatter
}
