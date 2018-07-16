'use strict';

function compute_median(collection) {
  //在这里写入代码
  return collection.sort(function (a,b) {
    return a-b;
  }).reduce(function () {
    if(collection.length % 2 == 0){
      return (parseInt(collection[collection.length/2-1]) + parseInt(collection[collection.length/2]))/2;
    }else{
      return parseInt(collection[(collection.length+1)/2-1]);
    }
  });
}

module.exports = compute_median;


