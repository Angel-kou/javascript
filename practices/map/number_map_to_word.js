'use strict';
var number_map_to_word = function(collection){
  return collection.map(function (item) {
    return getResult(item);
  });
};
function getResult(number){
  var abc =['a','b','c','d','e'];
  var res = abc[number-1];
  return res;

}
module.exports = number_map_to_word;
