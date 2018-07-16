'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  var res = collection_a;
  for(var j = 0 ; j < collection_b.length;j++){
    for(var i= 0 ; i < collection_a.length;i++){
        if(collection_b[j] ==collection_a[i]){
          break;
        }
    }
    if(i==collection_a.length){
      res.push(collection_b[j]);
    }
  }
  return res;

}

module.exports = get_union;

