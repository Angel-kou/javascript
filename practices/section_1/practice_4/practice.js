function collect_same_elements(collection_a, object_b) {
  //在这里写入代码

  var res = collection_a.map(function (x) {
    return x['key'];
  });
  return res.filter(function(n) {
    return object_b['value'].indexOf(n) != -1
  });
}

module.exports = collect_same_elements;
