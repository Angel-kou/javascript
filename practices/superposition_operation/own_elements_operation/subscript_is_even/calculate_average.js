'use strict';
var calculate_average = function(collection){
  var list = collection.filter(function (x) {
    return collection.indexOf(x) % 2 != 0;
  });
  var sum = list.reduce(function (x,y) {
    return x + y;
  });
  var avg = parseInt(sum/list.length);
  return avg;
};
module.exports = calculate_average;
