'use strict';
var even_group_calculate_average = function(collection){
  var digit_1 = [];
  var digit_2 = [] ;
  var digit_3 = [];

  var filt = collection.filter(function (x) {
    return collection.indexOf(x) % 2 != 0 && x % 2 == 0;
  })
  var temp = filt;

  for(var i = 0 ; i < temp.length;i++){
    if(temp[i].toString().length == 1){
      digit_1.push(filt[i]);
    }
    if(temp[i].toString().length == 2){
      digit_2.push(filt[i]);
    }
    if(temp[i].toString().length == 3){
      digit_3.push(filt[i]);
    }
  }


  var res = [];
  if(temp.length == 0){
    res.push(0);
  }else{
    if(digit_1.length == 0 && digit_2.length == 0){
      res.push(parseInt(digit_3.reduce(function (x,y) { return x +y })/digit_3.length));
    }else{
      res.push(parseInt(digit_1.reduce(function (x,y) { return x +y })/digit_1.length));
      res.push(parseInt(digit_2.reduce(function (x,y) { return x +y })/digit_2.length));
      res.push(parseInt(digit_3.reduce(function (x,y) { return x +y })/digit_3.length));
    }
  }

  return res ;







};
module.exports = even_group_calculate_average;
