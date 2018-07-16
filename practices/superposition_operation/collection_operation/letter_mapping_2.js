'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  var abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var temp = collection.reduce(function (x,y) {
    return x+y;

  });
  var res ;
  if(temp % collection.length ==0) res = temp / collection.length;
  else res = parseInt(temp/collection.length)+1;
  return abc[res -1];
}

module.exports = average_to_letter;

