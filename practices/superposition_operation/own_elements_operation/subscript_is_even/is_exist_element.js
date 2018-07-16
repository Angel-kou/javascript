'use strict';
var is_exist_element = function(collection,element){
  var list = collection.filter(function (x) {
    return collection.indexOf(x) % 2 == 0;
  });
  for(var item in list){
    if(list[item] == element){
      return true;
    }
  }
  return false;

};
module.exports = is_exist_element;
