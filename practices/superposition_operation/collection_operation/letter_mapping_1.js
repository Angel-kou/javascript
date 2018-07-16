'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  var abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  return collection.filter(function (x) {
    return x % 2 == 0;
  }).map(function (y) {

    return abc[y -1];

  });
}

module.exports = even_to_letter;
