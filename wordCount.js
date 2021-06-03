//mileStone 3 - video 15-8

var speech = "I am trying to understand javascript but fewwww to hard";
var count = 0;
for (var i = 0; i < speech.length; i++) {
  var element = speech[i];
  if (element == " " && speech[i - 1] != "") {
    count++;
  }
}
console.log(count);
