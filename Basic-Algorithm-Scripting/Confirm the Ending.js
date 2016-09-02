function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  // initialize constant variable for target length
  var tar_len = target.length;
  // if target is the last letter only
  if (tar_len === 1) {
    return str.substr(-1) === target;
    // if target is 2+ letters
  } else {
    return str.substr(0 - tar_len) === target;
  }
}

confirmEnding("He has to give me a new name", "name");