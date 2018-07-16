'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  var index = collection.reverse().reduce(function () {
    return collection.indexOf(element);
  });
  return collection.length - (index+1);
}

module.exports = calculate_elements_sum;
