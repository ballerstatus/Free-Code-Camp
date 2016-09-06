function sumAll(arr) {
  // set up min and max to create range array
  var max = Math.max.apply(null, arr),
      min = Math.min.apply(null, arr),
      new_arr = [];
  // fill new array with range between min and max
  for (var i = min; i <= max; i++) {
    new_arr.push(i);
  }
  // reduce array range 
  return new_arr.reduce(function(a,b) {
    return a + b;
  });
}

sumAll([5, 10]);