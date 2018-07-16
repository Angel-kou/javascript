'use strict';

function average_uneven(collection) {

  //在这里写入代码
  var sum =  collection.filter(function (x) {
    return x % 2!= 0;
  }).reduce(function (x,y) {
    return x + y;
  });
  var avg = parseInt(sum/5);
  return avg;
}

module.exports = average_uneven;
