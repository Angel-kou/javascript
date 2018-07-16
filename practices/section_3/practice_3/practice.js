function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var map = {};
  for(var i = 0 ; i < collection_a.length;i++){
    if(map[collection_a[i]] == undefined){
      map[collection_a[i]] = 1;
    }else{
      map[collection_a[i]]++;
    }
  }
  var res = [];
  for(var key in map){
    var obj = {};
    obj['key'] = key;
    obj['count'] = map[key];
    res.push(obj);
  }
  for(var i = 0; i < object_b['value'].length;i++){
    var temp = object_b['value'][i];
    for(var j = 0; j < res.length;j++){
      if(temp == res[j]['key']){
        res[j]['count']  -=  parseInt(res[j]['count'] / 3);
        break;
      }
    }
  }
  return res;

}

module.exports = create_updated_collection;
