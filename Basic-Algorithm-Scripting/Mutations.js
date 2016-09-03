function mutation(arr) {
  var letters = arr[1].toLowerCase(),
      word = arr[0].toLowerCase();
  // loop through each letter in second element of array - the "arg"
  for (var i = 0; i < letters.length; i++) {
    if (word.indexOf(letters[i]) < 0) {
      return false; // if the letter doesn't exist, return false immediately - less than zero is a false
    }
  }
  // otherwise if all letters are present, loop will finish and return true
  return true;

}

mutation(["hello", "hey"]);