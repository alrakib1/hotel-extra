// deposit total button click
document.getElementById("btn-deposit").addEventListener("click", function () {
  const newDepositAmount = getInputFieldValueById("deposit-field");
  // get previous deposit total by id
  const previousDepositTotal = getTextElementValueById("deposit-total");
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  // set deposit total value
  setTextElementValueById("deposit-total", newDepositTotal);
  // get previous balance by using function
  const previousBalanceTotal = getTextElementValueById("balance-total");
  const NewBalanceTotal = previousBalanceTotal + newDepositAmount;
  setTextElementValueById("balance-total", NewBalanceTotal);
});
