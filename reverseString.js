function reverseString(string) {
  var splitString = string.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
}

module.exports = reverseString;