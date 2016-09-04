function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  // push num to arr
  arr.push(num);
  // return the index of first occurence of num once arr has been sorted
  return arr.sort(function(a,b) {
    return a - b;
  }).indexOf(num);
}

getIndexToIns([40, 60], 50);