function destroyer(arr) {
  // Remove all the values
  // create an array of the arguments, slicing at 1 to remove the array we are searching through
  var args = Array.from(arguments).slice(1);
  // filter out values from arr that do not match spec below
  return arr.filter(function(value) {
    // filters out values that do evaluate to true, so -1 = arr value "not found" in args
    // these are the values we want to "keep"
    return args.indexOf(value) === -1;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);