function titleCase(str) {
  // break sentence into array of words
  var words = str.toLowerCase().split(" ");
  // capitalize first letter in each word array, then add the rest of the word as lower case
  var title_case = words.map(function(word) {
    return word.charAt(0).toUpperCase() + word.substr(1);
  });
  // join array of words to form original sentence
  return title_case.join(" ");
}

titleCase("I'm a little tea pot");