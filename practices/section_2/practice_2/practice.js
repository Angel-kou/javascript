function count_same_elements(collection) {
  //在这里写入代码
  var map = {};
  for(var i = 0 ; i < collection.length;i++){

    if(collection[i].indexOf('-') ==  -1 && collection[i].indexOf(':') == -1 && collection[i].indexOf('[') == -1){
      if (map[collection[i]] == undefined) {
        map[collection[i]] = 1;
      } else {
        map[collection[i]]++;
      }

    }else{
      if(collection[i].indexOf('-') == 1){
        if(map[collection[i].split('-')[0]] == undefined ){
          map[collection[i].split('-')[0]] = parseInt(collection[i].split('-')[1]);
        }else{
          map[collection[i].split('-')[0]]+=parseInt(collection[i].split('-')[1]);
        }
      }
    }
  }
  var res = [];
  console.log("ww",map);
  for(var key in map){
    var obj = {};
    obj['key'] = key;
    obj['count'] = map[key];
    res.push(obj);
  }
  return res;
}

module.exports = count_same_elements;
