function RailFence(string, numberRails) {
  if (!string || !numberRails) {
    console.log("invalid input");
    return "";
  }
  var arr = string.split(""),
    result = [];
  for (var i = 0; i < numberRails; i++) {
    result[i] = [];
    for (var j = 0; j < arr.length; j++) {
      var k = j * 2 * (numberRails - 1) + i;
      k < arr.length ? result[i].push(k) : 1;
      if (i !== 0 && i !== numberRails) {
        var k2 = j * 2 * (numberRails - 1) - i;
        k2 < arr.length && k2 > 0 ? result[i].push(k2) : 1;
      }
    }
  }
  function uniqueSort(arr) {
    arr = Array.from(new Set(arr));
    return arr.sort(function (a, b) {
      return a - b;
    });
  }

  result = result
    .map(function (arr) {
      return uniqueSort(arr);
    })
    .reduce(function (a, b) {
      return a.concat(b);
    })
    .map(function (i) {
      return arr[i];
    })
    .join("");
  return result;
}
export default RailFence;
