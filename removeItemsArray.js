//mileStone 3 - video 15-7

var nam = [1, 1, 2, 2, 2, 3, 3, 3, 3, 5, 6, 7, 8, 9];
var uniqueName = [];
for (let i = 0; i < nam.length; i++) {
  const element = nam[i];
  var index = uniqueName.indexOf(element);
  if (index == -1) {
    uniqueName.push(element);
  }
}
console.log(uniqueName);

//didn't understand this
