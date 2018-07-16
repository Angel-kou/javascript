'use strict';
var even_asc_odd_desc = function(collection){
  var even = collection.filter(function (x) {
    return x % 2 == 0;
  }).sort(function (a,b) { return a -b ; });
  var odd = collection.filter(function (x) {
    return x % 2 != 0;
  }).sort(function (a,b) {return b-a;});

  var res = even;
  for(var index in odd){
    res.push(odd[index]);
  }
  return res;

};
module.exports = even_asc_odd_desc;
