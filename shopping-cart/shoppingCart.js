//Phone event handler

const phoneDecrease = document.getElementById("phoneDecrease");
phoneDecrease.addEventListener("click", function () {
  const getInputNumber = document.getElementById("phoneInput").value;
  const input = parseInt(getInputNumber);
  const phoneMinus = input - 1;
  document.getElementById("phoneInput").value = phoneMinus;
  const totalPhone = phoneMinus * 1200;
  document.getElementById("phonePrice").innerText = "$" + totalPhone;
});

const phoneIncrease = document.getElementById("phoneIncrease");
phoneIncrease.addEventListener("click", function () {
  const getInputNumber = document.getElementById("phoneInput").value;
  const input = parseInt(getInputNumber);
  const phonePlus = input + 1;
  document.getElementById("phoneInput").value = phonePlus;
  const totalPhone = phonePlus * 1200;
  document.getElementById("phonePrice").innerText = "$" + totalPhone;
});

//  CASE event handler ******************************************************************

const caseDecrease = document.getElementById("phoneCaseDecrease");
caseDecrease.addEventListener("click", function () {
  const getInputNumber = document.getElementById("caseInput").value;
  const input = parseInt(getInputNumber);
  const caseMinus = input - 1;
  document.getElementById("caseInput").value = caseMinus;
  const totalCase = caseMinus * 59;
  document.getElementById("phoneCase").innerText = "$" + totalCase;
});

const caseIncrease = document.getElementById("phoneCaseIncrease");
caseIncrease.addEventListener("click", function () {
  const getInputNumber = document.getElementById("caseInput").value;
  const input = parseInt(getInputNumber);
  const phonePlus = input + 1;
  document.getElementById("caseInput").value = phonePlus;
  const totalCase = phonePlus * 59;
  document.getElementById("phoneCase").innerText = "$" + totalCase;
});
