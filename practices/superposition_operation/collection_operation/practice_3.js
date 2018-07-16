'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  return collection.filter(function (x) {
    return x % 2!= 0;
  }).map(function (y) {
    return y *3 + 5;
  }).reduce(function (x,y) {
    return x+y;
  });
}

module.exports = hybrid_operation_to_uneven;

