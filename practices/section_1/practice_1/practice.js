function collect_same_elements(collection_a, collection_b) {
  var result = [];

  collection_a.forEach(function (element) {
    for (var i = 0; i < collection_b.length; i++) {
      if (element === collection_b[i]) {
        result.push(element);
      }
    }
  });

  return result;
}

module.exports = collect_same_elements;
