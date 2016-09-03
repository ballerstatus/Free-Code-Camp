function truncateString(str, num) {
  // Clear out that junk in your trunk
  // check if num is greater than 3 for ... and str length is greater than num for slice
  // num will need to be adjusted for ...
  if (num > 3 && str.length > num) {
    return str.slice(0, (num - 3)) + "...";
    // unless the slice ensures str will be less than num, just add ... at num slice
  } else if (num <= 3) {
    return str.slice(0, num) + "...";
    // otherwise num is greater than or equal to str length, just return str
  } else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);