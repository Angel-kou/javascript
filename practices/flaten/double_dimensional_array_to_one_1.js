'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var res = [];
  for (var i = 0; i < collection.length; i++) {
    if (Array.isArray(collection[i])) {
      res = res.concat(double_to_one(collection[i]));
    } else {
      res.push(collection[i]);
    }
  }
  return res;
}

module.exports = double_to_one;
