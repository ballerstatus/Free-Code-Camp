function palindrome(str) {
  // Good luck!
  // cleaner version
  var str_forward = str.replace(/[\W_]/g, "").toLowerCase();
  var str_backward = str.replace(/[\W_]/g, "").toLowerCase().split("").reverse().join("");
  
  return str_forward === str_backward;
  
}

palindrome("eye");