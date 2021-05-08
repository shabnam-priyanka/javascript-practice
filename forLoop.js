for (let i = 0; i <= 100; i = i + 2) {
  console.log(i);
}

for (let i = 0; i < 9; i++) {
  console.log(i);
}

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

let i = 0;
let sum = 0;
while (i <= 100) {
  sum = sum + i;
  i += 2;
}
console.log(sum);
