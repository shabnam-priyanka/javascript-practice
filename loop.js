//for loop
var nums = [22, 33, 44, 55, 66, 77, 78];

for (let i = 0; i < nums.length; i++) {
  var element = nums[i];
  console.log(element);
}

var friends = ["amina", "kamina", "jamina", "manina", "sojina"];
for (let i = 0; i < friends.length; i++) {
  const element = friends[i];
  console.log(element);
}

//************************* */
// while loop
var num = 0;
while (num < 15) {
  num++;
  console.log(num);
}

var num1 = 10;
while (num1 < 20) {
  num1++;
  console.log(num1);
}
// for in loop = string/array/object
var game = "i am learning javaScript";
// in ta index number count kore
for (var x in game) {
  console.log(`index number ${x}`);
}

let foodName = ["apple", "orange", "banana"];

for (var y in foodName) {
  console.log(`index number ${y}`);
}

let person = {
  name: "Atif Aslam",
  profession: "singer",
  country: "pakisthan",
  age: 34,
};

for (var x in person) {
  console.log(` ${x} ${person[x]}`);
}

// for off loop = string / array / it can't work with object
// off gives value
for (var x of game) {
  console.log(` value ${x}`);
}
for (var y of foodName) {
  console.log(`our item ${y}`);
}

for (var i = 1; i <= 10; i++) {
  console.log(i);
  if (i == 5) {
    continue;
  }
  console.log(i);
}
