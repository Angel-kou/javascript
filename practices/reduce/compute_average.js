'use strict';

function compute_average(collection) {
  //在这里写入代码
  return collection.reduce(function (sum,x) {
    return sum += x;
  })/collection.length;
}

module.exports = compute_average;

