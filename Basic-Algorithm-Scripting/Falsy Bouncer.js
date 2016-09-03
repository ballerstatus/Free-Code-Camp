function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  // filters falsy boolean values from arr
  // if value passed through filter returns false - such as a falsy Boolean - it is removed
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);