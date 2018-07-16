function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  return collection_a.filter(function(n) {
    return object_b['value'].indexOf(n) != -1
  });
}

module.exports = collect_same_elements;
