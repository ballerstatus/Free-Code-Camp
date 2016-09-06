function diffArray(arr1, arr2) {
  // merge arrays
  var arr = arr1.concat(arr2);
  // create function callback to use with filter on arr
  function num_check(value) {
    // if value is NOT found, return it
    if (arr1.indexOf(value) === -1 || arr2.indexOf(value) === -1) {
      return value;
    }
  }
  // filter arr with num_check
  return arr.filter(num_check);
}

diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);