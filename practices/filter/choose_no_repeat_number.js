'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  var resultArr = collection.filter(function (item, index, self) {
    return self.indexOf(item) == index;
  });
  return resultArr;
}

module.exports = choose_no_repeat_number;
