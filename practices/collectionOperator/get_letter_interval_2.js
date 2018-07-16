'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var res = [];
  if(number_a < number_b){
     for(var i = number_a ; i <= number_b;i++){
        res.push(getResult(i));
     }
  }else if(number_a > number_b){
    for(var i = number_a ; i >= number_b;i--){
      res.push(getResult(i));
    }
  }else{
    res.push(getResult(number_b));
  }
  return res;
}

function getResult(number){
  var abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var s ;
  if(number <= 26){
    s = abc[number-1];
  }else{

      if(number % 26 != 0){
        s = abc[parseInt(number/26)-1] + abc[number%26-1];
      }else{
        s = abc[parseInt(number/26)-2]+'z';
      }
  }
  return s;

}

module.exports = get_letter_interval_2;

