'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var res = [];
  if(number_a < number_b){
    for(var i = number_a ; i <= number_b;i++){
      res.push(getResult(i));
    }
  } else if(number_a > number_b){
    for(var i =number_b ; i >= number_a;i--){
      res.push(getResult(i));
    }
  }else {
    res.push(getResult(number_a));
  }
  return res;

}

function getResult(number){
  var abc =['a','b','c','d','e'];
  var res = abc[number-1];
  return res;

}

module.exports = get_letter_interval;
