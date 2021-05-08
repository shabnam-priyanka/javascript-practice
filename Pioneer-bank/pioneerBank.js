//home page submit button Event handler
const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", function () {
  console.log(submitBtn);
  const hideHomePage = document.getElementById("home-page");
  hideHomePage.style.display = "none";
  const transaction = document.getElementById("transaction-area");
  transaction.style.display = "block";
});

//Deposit Button Event handler
const depositBtn = document.getElementById("deposit-btn");
depositBtn.addEventListener("click", function () {
  // console.log(depositBtn);

  const depositNumber = getInputNumber("depositAmount");
  // const depositAmount = document.getElementById("depositAmount").value;
  // const depositNumber = parseFloat(depositAmount);

  // const currentDeposit = document.getElementById("currentDeposit").innerText;
  // const currentDepositNumber = parseFloat(currentDeposit);
  // const totalDeposit = depositNumber + currentDepositNumber;

  //document.getElementById("currentDeposit").innerText = totalDeposit;
  // above we worked with deposit h1 tag and deposit input box so that the deposit amount adds up
  // const currentBalance = document.getElementById("currentBalance").innerText;
  // const currentBalanceNumber = parseFloat(currentBalance);
  // const totalBalance = depositNumber + currentBalanceNumber;

  //document.getElementById("currentBalance").innerText = totalBalance;
  // below we will work with when we input number in deposit that should add in balance too

  updateSpanText("currentDeposit", depositNumber);
  updateSpanText("currentBalance", depositNumber);

  document.getElementById("depositAmount").value = "";
});

// function for deposit button
function updateSpanText(id, depositNumber) {
  const currentBalance = document.getElementById(id).innerText;
  const currentBalanceNumber = parseFloat(currentBalance);
  const totalBalance = depositNumber + currentBalanceNumber;
  document.getElementById(id).innerText = totalBalance;
}

//withdraw button event handler

const withdrawBtn = document.getElementById("withdrawBtn");
withdrawBtn.addEventListener("click", function () {
  const withdrawNumber = getInputNumber("withdrawAmount");
  updateSpanText("currentWithdraw", withdrawNumber);
  updateSpanText("currentBalance", -1 * withdrawNumber);

  document.getElementById("withdrawAmount").value = "";
});
//function for withdraw and deposit input box btn
function getInputNumber(id) {
  const amount = document.getElementById(id).value;
  const amountNumber = parseFloat(amount);
  return amountNumber; // ei khan e return korse ken :(
}
