document.getElementById('btn-withdraw').addEventListener('click',function(){
    // add withdraw button handler
    // get withdraw amount by using function call
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getTextElementValueById("withdraw-total");
    console.log(previousWithdrawTotal)
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

     setTextElementValueById('withdraw-total', newWithdrawTotal);
    //  get previous balance total
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const NewBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', NewBalanceTotal);
})