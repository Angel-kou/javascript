'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  var res = [];
  if(number_a < number_b){
    for(var i = number_a ; i <= number_b;i++){
        res.push(i);
    }
  }else if(number_a > number_b){
    for(var i = number_a ; i >= number_b;i--) {
        res.push(i);
    }
  }else{
    res.push(number_a);
  }
  return res;
}

module.exports = get_integer_interval;

