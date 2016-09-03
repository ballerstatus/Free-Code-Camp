function repeatStringNumTimes(str, num) {
  // repeat after me
  // 0 or negative numbers return an empty string
  if (num < 1) {
    return "";
  } else {
    return str.repeat(num);
  }
}

repeatStringNumTimes("abc", 3);