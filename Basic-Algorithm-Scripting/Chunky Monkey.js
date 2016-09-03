function chunkArrayInGroups(arr, size) {
  // Break it up.
  // new array to push chunks to
  var chunks = [];
  // using while and splice acts as loop/counter
  while (arr.length > 0) {
    // splice instead of slice, modifies original array as a "counter"
    // use size to determine splice chunks
    chunks.push(arr.splice(0, size));
  }
  return chunks;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);