'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  return collection.map(function (x) {
    return x *3 + 2;
  }).reduce(function (x,y) {
    return x+y;
  });
}

module.exports = hybrid_operation;

