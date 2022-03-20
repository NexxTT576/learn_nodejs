const _ = require("lodash");
// let arr = [1, 2, 3, 4];
// let arr2 = _.chunk(arr, 2);
// console.log(arr2);

function myChunk(arr) {
  let arr2 = _.chunk(arr, 2);
  return arr2;
}

module.exports = myChunk;
