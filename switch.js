// const mark = "strawberry";

// switch (mark) {
//   case "strawberry":
//     console.log("I love strawberry");
//     break;

//   case "banana":
//     console.log("I love banana");
//     break;
//   case "pineapple":
//     console.log("I love pineapple");
//     break;

//   default:
//     console.log("sorry I dont like other food");
// }

//******************************* */

// const expr = "Oranges";
// switch (expr) {
//   case "Oranges":
//     console.log("Oranges are $0.59 a pound.");
//     break;
//   case "Mangoes":
//   case "Papayas":
//     console.log("Mangoes and papayas are $2.79 a pound.");
//     // expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }

//*************************** */
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
// } //this is working

// var num = 20;
// switch (num) {
//   case 100:
//     console.log("you got A+");
//     break;

//   case 80:
//     console.log("you got A");
//     break;
//   case 70:
//     console.log("you got B");
//     break;
//   case 20:
//     console.log("you fail");
// }

var num = 99;
switch (num) {
  case num <= 100 && num >= 90:
    console.log("you got A+ yaaaay");
    break;
  case num <= 90 && num >= 80:
    console.log("u got A yaaay");
    break;
  case num <= 80 && num >= 70:
    console.log("you got b boooo");
}
