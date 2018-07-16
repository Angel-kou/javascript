function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  for(var i = 0; i < object_b['value'].length;i++){
    var temp = object_b['value'][i];
    for(var j = 0; j < collection_a.length;j++){
      if(temp == collection_a[j]['key']){
        collection_a[j]['count']  -= 1;
        break;
      }
    }
  }
  return collection_a;
}

module.exports = create_updated_collection;
