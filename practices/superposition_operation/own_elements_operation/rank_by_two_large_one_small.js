'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  var temp = collection.sort(function (a,b) { return a - b });

  var res = [];
  for(var i = 0; i < temp.length;i=i+3){
      if( i % 3 == 0){
        if(temp[i+2] != null){
          res.push(temp[i+1]);
          res.push(temp[i+2]);
          res.push(temp[i]);
        }
        else if(temp[i+1] != null){
          res.push(temp[i]);
          res.push(temp[i+1]);
        }else{
          res.push(temp[i]);

        }

      }
  }
  return res;
}
module.exports = rank_by_two_large_one_small;
