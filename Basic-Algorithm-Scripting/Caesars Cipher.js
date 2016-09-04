function rot13(str) { 
  // LBH QVQ VG!
  // create array of decoded charCodes to use map
  var char = [];
  for (var i = 0; i < str.length; i++) {
    char.push(str.charCodeAt(i));
  }
  // iterate over each charCode
  var decoded = char.map(function(value) {
    // if A-M, return charCode + 13
    if (value >= 65 && value <= 77) {
      return String.fromCharCode(value + 13);
      // if N-Z, return charCode - 13
    } else if (value >= 78 && value <= 90) {
      return String.fromCharCode(value -13);
      // allow all others to return through unaltered
    } else {
      return String.fromCharCode(value);
    }
  });
  // join array back to string
  return decoded.join("");
}

// Change the inputs below to test
rot13("SERR CVMMN!");