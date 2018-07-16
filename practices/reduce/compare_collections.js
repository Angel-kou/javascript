'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  return collection_a.reduce(function (x) {
    return collection_a.indexOf(x) == collection_b.indexOf(x)
  });
}

module.exports = compare_collections;


