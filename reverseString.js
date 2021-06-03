//MileStone 3. 15-9

function reverseString(str) {
  var reverse = "";
  for (var i = 0; i < str.length; i++) {
    var element = str[i];
    reverse = element + reverse;
  }
  return reverse;
}
var statement = "hello I am from canada";
var alienTalk = reverseString(statement);
console.log(alienTalk);
