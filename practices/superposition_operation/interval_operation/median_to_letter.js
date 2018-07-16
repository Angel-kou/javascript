'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  var med ;
  if(collection.length % 2 == 0){
    med = parseInt((collection[collection.length/2-1] + collection[collection.length/2])/2)+1;
  }else{
    med = collection[parseInt((collection.length +1)/2)-1];
  }

  return getResult(med);

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

module.exports = median_to_letter;
