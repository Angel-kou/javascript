'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  var temp = collection.split('->').sort(function (a,b) {
     return a-b;
  });
  return temp.reduce(function () {
    if(temp.length % 2 == 0){
      return (parseInt(temp[temp.length/2-1]) + parseInt(temp[temp.length/2]))/2;
    }else{
      return parseInt(temp[(temp.length+1)/2-1]);
    }
  });
}

module.exports = compute_chain_median;
