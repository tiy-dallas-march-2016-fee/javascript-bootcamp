


function isArray(obj) {
  if (obj === undefined) return false;
  return obj.constructor === Array;
}



module.exports = {
  isArray: isArray
}
