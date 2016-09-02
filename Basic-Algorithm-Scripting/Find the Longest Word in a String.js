function findLongestWord(str) {
  
  // break sentence into words
  var words = str.split(" ");
  // sort array by word length
  words.sort(function(a,b) {
    return a.length - b.length;
  });
  // return length of longest word
  return words[words.length - 1].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");