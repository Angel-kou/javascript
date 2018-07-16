'use strict';

function find_last_even(collection) {
  //在这里写入代码
  var res = collection.filter(function (x) {
    return x % 2 == 0;
  });
  return res[res.length-1];
}

module.exports = find_last_even;
