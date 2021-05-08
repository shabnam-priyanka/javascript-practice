const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", function () {
  console.log(submitBtn);
  const homepage = document.getElementById("home-page");
  homepage.style.display = "none";
  const transactionArea = document.getElementById("transaction-area");
  transactionArea.style.display = "block";
});

//deposit button event handler
const depositBtn = document.getElementById("depositBtn");
depositBtn.addEventListener("click", function () {
  const depositAmount = document.getElementById("deposit").value;
  const depositNumber = parseFloat(depositAmount);
  // deposit input field
  const currentDeposit = document.getElementById("currentDeposit").innerText;
  const currentDepositAmount = parseFloat(currentDeposit);
  const total = depositNumber + currentDepositAmount;
  document.getElementById("currentDeposit").innerText = total;

  //balance
  const currentBalance = document.getElementById("currentBalance").innerText;
  const balance = parseFloat(currentBalance);
  const newBalance = total + balance;
  document.getElementById("currentBalance").innerText = newBalance;

  document.getElementById("deposit").value = "";
});

///withdraw event handler
const withdrawbtn = document.getElementById("withdrawbtn");
withdrawbtn.addEventListener("click", function () {
  const withdrawAmount = document.getElementById("withdrawAmount").value;
  const withdraw = parseFloat(withdrawAmount);
  const currentwithdraw = document.getElementById("currentwithdraw").innerText;
  const withdrawMoney = parseFloat(currentwithdraw);

  const totalWithdraw = withdraw + withdrawMoney;
  document.getElementById("currentwithdraw").innerText = totalWithdraw;

  //now need to code for when money withdraw it should minus from balance
  const currentBalance = document.getElementById("currentBalance").innerText;
  const balance = parseFloat(currentBalance);
  const newBalance = balance - totalWithdraw;
  document.getElementById("currentBalance").innerText = newBalance;

  document.getElementById("withdrawAmount").value = "";
});
