// var a = "im am ";
// var b = "shabnam";
// var c = a.concat(b);
// console.log(c);

// //substring
// var x = "I am Shabnam";
// y = x.substr(5);
// console.log(y);
// console.log(x.charAt(5));

// var x = "I am Jon";
// console.log(x.startsWith("I"));

// var y = x.toUpperCase();
// console.log(y);

// var x = "              I am jonson       ";
// console.log(x.trim());

// var x = "I am canadian";
// console.log(x.split(""));

// var x = "this is something";
// console.log(Boolean(x));

// // array
// var countries = ["bangladesh", "canada", "italy", "australia"];
// countries[1] = "poland"; //this will delete canada and replace with poland
// countries[4] = "india";
// countries[countries.length] = "pabna"; //you can send data like this way too
// countries.push("china");
// countries.pop();
// countries.shift();
// countries.unshift("bangladesh");
// console.log(countries);

// //blank array
// var number = [];
// number.push(1);
// console.log(number);

// //string to array
// var str = "bangladesh";
// var arr = str.split();
// console.log(arr);

// var btr = "bangladesh";
// var err = btr.split(""); //this will split bangladesh and show word
// console.log(err);

// var ntr = "bangladesh is very crowded";
// var rrr = ntr.split(","); //this will split bangladesh and show word
// console.log(rrr);

// var country = ["bds", "fjdshd", "ncsjkn"];
// var result = country.toString();
// console.log(result);

// var result = country.join(" ");
// console.log(result);

// var mbr = "I love JavaScript";
// var arr2 = mbr.split(" "); //this created string
// console.log(arr2);

// //array concat
// var country2 = ["bangladesh", "india", "pakistan"];
// var country3 = ["denmark", "australia", "paris"];
// var result = country2.concat(country3);
// result.sort(); //assending order it shows
// console.log(result);
// result.reverse();
// console.log(result);

// var array = [10, 30, ["a", "b"], 50, 40, 60];
// console.log(array[2][0]);

// var arrr = [1, 2, 3, [("work", "for", "food")]];
// console.log(arrr);

// var arr3 = [1, 2, ["a", ["word 1", "word 2"], "b"]];
// console.log(arr3[2][1][1]);

// var arr4 = [1, 2, ["a", "b", { prop1: "item1", prop2: "item2" }]];
// console.log(arr4[3].prop1[0]); ///facing problem here

//condition

// var personOne = "jamal";
// var personTwo = "mal";
// var areTheyBrother = "true";

// if (personOne == "jamal" && personTwo == "kamal" && areTheyBrother) {
//   console.log("yes they are brother");
// } else {
//   console.log("they are not brother");
// }

// var n = 12;

// if (n > 0) {
//   var result = "this number " + n + " is positive";
// } else {
//   var result = "this number" + n + "is negative";
// }

// console.log(result);

// //odd or even
// var n = 13;
// if (n % 2 == 0) {
//   console.log("odd");
// } else {
//   console.log("even");
// }

// var n = 12;
// var result;
// var remainder = n % 2;

// if (remainder == 0) {
//   result = "this number is even";
// } else {
//   result = "this number is odd";
// }
// console.log(result);

// var choice = prompt();
// var text;

// if (choice == "a") {
//   text = "you have selected option 1";
// } else if (choice == "b") {
//   text = "u have chose me";
// }
// console.log(text); //not working

// var choice1 = prompt();
// var text1;
// switch (choice1) {
//   case "a":
//     text1 = "you have selected option 1";
//     break;

//   case "b":
//     text1 = "you have choose b";
//     break;

//   case "c":
//     text1 = "u have choose c";
//     break;
// }
// console.log(text1); //not working

// switch (7) {
//   case 1:
//     console.log("sunday");
//     break;

//   case 2:
//     console.log("monday");
//     break;

//   case 3:
//     console.log("tuesday");
//     break;
//   case 4:
//     console.log("wednesday");
//     break;
//   case 5:
//     console.log("thursday");
//     break;
//   case 6:
//     console.log("friday");
//     break;
//   case 7:
//     console.log("saturday");
//     break;

//   default:
//     console.log("not a valid number");
// }

//var number = prompt("what is your number !");
var number = parseInt(number);
var grade;

if (number <= 100 && number >= 80) {
  grade = "A";
} else if (number < 80 && number >= 70) {
  grade = "A";
} else if (number < 70 && number >= 60) {
  grade = "-A";
} else if (number < 60 && number >= 50) {
  grade = "B";
} else if (number < 50 && number >= 40) {
  grade = "C";
} else if (number < 40 && number >= 33) {
  grade = "D";
} else if (number < 33 && number >= 0) {
  grade = "fail";
}
console.log(grade);
