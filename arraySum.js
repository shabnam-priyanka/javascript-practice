//mileStone 3 - 15-6

// var numbers = [45, 11, 22, 33, 45, 66, 77, 8, 90, 20];
// var sum = 0;

// for (var i = 0; i < numbers.length; i++) {
//   var element = numbers[i];
//   sum = sum + element;
// }
// console.log(sum);

var num = [45, 66, 77, 8, 90, 20];
function getArraySum(num) {
  var sum = 0;
  for (let i = 0; i < num.length; i++) {
    const element = num[i];
    sum = sum + element;
  }
  return sum;
}
var result = getArraySum(num);
console.log(result);
var total = getArraySum([45, 66, 77, 8, 90, 20, 99, 121, 131, 141]);
console.log(total);
