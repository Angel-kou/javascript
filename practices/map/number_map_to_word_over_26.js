'use strict';
var number_map_to_word_over_26 = function(collection){
  return collection.map(function (item) {
    return getResult(item);
  });
};

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

module.exports = number_map_to_word_over_26;
