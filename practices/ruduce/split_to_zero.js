'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  let result = [];
  var temp = number;
  result.push(temp);
  while( temp > 0){

    temp -= interval;
    temp = temp.toFixed(1);
    if(temp == 0){
      temp = parseInt(temp);
    }
    result.push(parseFloat(temp));

  }
  return result;

}

module.exports = spilt_to_zero;
