'use strict';
var single_element = function(collection){
  var list = [];
  for(var i = 0; i < collection.length;i++){
    if( i % 2 != 0){
      list.push(collection[i]);
    }
  }
  var map = {};
  for(var i = 0; i < list.length;i++){
    if(map[list[i]] == undefined){
      map[list[i]] = 1;
    }else{
      map[list[i]] ++;
    }
  }
  var res = [];
  for(var key in map){
    if(map[key] == 1){
      res.push(parseInt(key));
    }
  }
  return res;


};
module.exports = single_element;
