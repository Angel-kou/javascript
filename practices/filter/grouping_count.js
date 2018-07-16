'use strict';

function grouping_count(collection) {

  //在这里写入代码
  var len = collection.length;
  var m = {};
  for(var i=0;i<len;i++){
    if(m[collection[i]]==undefined){
      m[collection[i]]=1;
    }else{
      m[collection[i]]++;
    }
  }
  return m;

}

module.exports = grouping_count;
