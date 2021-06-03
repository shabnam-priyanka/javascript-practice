// parameters are like variable
function saySomeThing() {
  console.log("hello");
}
saySomeThing("heelo bangladesh");
// if you don't pass any parameter then function call will show nothing

function sayThing(para01) {}
sayThing("heelo bangladesh"); //inside the string will go to para01

//1st parameter: element / item
//2nd parameter: index number
//3rd parameter: whole array
var food = ["cake", "ice cream", "pastry"];

food.forEach(function (value, i) {
  console.log(value, i);
});
