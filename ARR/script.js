const transact = document.getElementById("btnTransac");
const ShowBalance = document.getElementById("btnCheck");
const btnHistory = document.getElementById("btnShow");

const validation = document.getElementById("validation");
const amountStyle = document.getElementById("amount");
const history = document.getElementById("history");
const bal = document.getElementById("balance");

let arr = [];
let deno = [0.05, 0.1, 0.25];
let balance = 0;
let result = 0;

//function deposit
function Deposit() {
  const amount = document.getElementById("amount").value;
  if (deno.includes(parseFloat(amount))) {
    arr.push(parseFloat(amount));
    balance = arr.reduce((acc, current) => acc + current, 0);
    history.innerHTML += `<li>Successfully Deposit: ${amount}</li>`;
    amountStyle.style.border = "1px solid black";
    validation.innerHTML = "";
  } else {
    amountStyle.style.border = "1px solid red";
    validation.innerHTML =
      "Invalid denomination. Only 0.05, .010 and 0.25 are allowed";
  }
}

//function withdraw
function Withdraw() {
  const amount = document.getElementById("amount").value;

  balance = arr.reduce((acc, current) => acc + current, 0);
  if (amount <= balance) {
    arr.push(parseFloat(amount));
    balance -= amount;
    arr.length = 0;
    console.log(result);
    console.log(arr);
    console.log(balance);
    history.innerHTML += `<li>Withdraw Successfully -: ${amount}</li>`;
    amountStyle.style.border = "1px solid black";
    validation.innerHTML = "";
  } else {
    amountStyle.style.border = "1px solid red";
    validation.innerHTML = "You dont have enough balance!";
  }
}

//Transaction button
transact.addEventListener("click", function () {
  const selectTrans = document.getElementById("transactionType").value;
  if (selectTrans == "Withdraw") {
    Withdraw();
  } else {
    Deposit();
  }
});

//balance button
ShowBalance.addEventListener("click", function () {
  bal.innerHTML = "My Current Balance: " + balance;
});

btnHistory.addEventListener("click", function () {
  history.innerHTML = `<li></li>`;
});
