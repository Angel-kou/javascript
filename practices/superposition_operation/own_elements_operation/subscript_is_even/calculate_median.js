'use strict';
var calculate_median = function(collection){
  var list = collection.filter(function (x) {
    return collection.indexOf(x) % 2 != 0;
  });
  console.log("hah"+list);
  var med ;
  if(list.length % 2 == 0){
    med = parseInt((list[list.length/2-1] + list[list.length/2])/2);
  }else{
    med = list[parseInt((list.length +1)/2)-1];
  }
  return med;
};
module.exports = calculate_median;
