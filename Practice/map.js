// let room = ["firstFloor", "secondFloor", "ThirdFloor"];

// let newRoom = room.map((n) => {
//   if ((n = "ThirdFloor")) {
//     return "No-room";
//   } else {
//     return n;
//   }
// });

// console.log(room);
// console.log(newRoom);

let number = [1, 2, 3, 4, 5, 6];
let number2 = number.map((value, index, array) => {
  console.log(index);
});
