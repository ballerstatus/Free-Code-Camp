function convertToRoman(num) {
  var roman = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
      converted = "",
      numerals;
  // use the object's values
  for (numerals in roman) {
    // and the number input
    while (num >= roman[numerals]) {
      // while num is bigger than the value in roman
      // add the roman numeral
      converted += numerals;
      // deduct the value from num and continue until num = 0
      num -= roman[numerals];
    }
  }
  
  return converted; 
}

convertToRoman(36);