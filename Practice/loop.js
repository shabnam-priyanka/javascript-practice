// loop
// 1. for loop ( for in loop, for off loop)
// 2. while loop
// 3. do while

// for loop is the most popular

var i = 1;
var sum = 0; // when you adding you can start with 0
var product = 1;
while (i <= 10) {
  sum = sum + i; //sum = 0 + 1 = 1. sum = 1 + 2 = 3;
  product = product * i; // when you have to multiply start with var = 1
  i++;
}

// while loop with condition in it
var i = 0;
while (i <= 10) {
  if ((i = 4)) {
    console.log("This is 4");
  }
  i++;
}

//for off for in loop

//for in = string/ array / object
//for of = string / array

// for in loop
let fame = "I am learning JavaScript";
//for in get index number
for (var x in fame) {
  //console.log(fame[x]) or
  console.log(`index number ${x} and value ${`name[x]`}`);
}

let game = "I am learning JS";
//for of loop direct we get access to value
for (var x of game) {
  //console.log(x); or
  console.log(`value ${x}`);
}

// **************************START
//for in and for off with array

let foodName = ["cake", "chocolate", "ice cream"];
for (let y in foodName) {
  //console.log(foodName[y]); or
  console.log(`index number ${y} and value ${foodName[y]}`);
}

let goodName = ["rahim", "karim", "jarim"];
for (let y of goodName) {
  //console.log(x); or
  console.log(`our item : ${x}`);
}

//*************************END*********************** */

let person = {
  name: "Atif Aslam",
  profession: "singer",
  country: " Pakisthan",
  age: 34,
};

for (let x in person) {
  //console.log(x); or
  console.log(`Property: ${x} value ${person[x]}`);
}

//below using for off loop with object. object doesn't wwok with for of loop
let peterson = {
  name: "Atif Aslam",
  profession: "singer",
  country: " Pakisthan",
  age: 34,
};

for (var x of peterson) {
  console.log(x);
}

for (let i = 0; i < 9; i++) {
  console.log(i);
}
