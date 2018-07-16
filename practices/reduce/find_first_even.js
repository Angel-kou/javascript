'use strict';

function find_first_even(collection) {
  //在这里写入代码
  var res = collection.filter(function (x) {
    return x % 2 == 0;
  });
  return res[0];
}

module.exports = find_first_even;

