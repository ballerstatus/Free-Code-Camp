function largestOfFour(arr) {
  // You can do this!
  // initialize new array to capture largest numbers
  var largest_num = [];
  // loop through arr
  for (var i = 0; i < arr.length; i++) {
    // sort each sub-array from largest to smallest
    arr[i].sort(function(a,b) {
      return b - a;
    });
    // push largest number from sub-array to largest numbers array
    largest_num.push(arr[i][0]);
  }
  // display results
  return largest_num;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);