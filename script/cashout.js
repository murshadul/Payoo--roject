document.getElementById('withdraw-btn').addEventListener('click', function () {
    const agentNumber = getValueFromInput('agent-number');
    if (agentNumber.length != 11) {
        alert("Invalid number");
        return;
    }
    const cashoutAmount = getValueFromInput('cashout-amount');
    // const amount = cashOutAmount.value;
    // Balance
    const currentBalance = getBalance();
    const newBalance = currentBalance - Number(cashoutAmount);
    // console.log(newBalance);

    if (newBalance < 0) {
        alert("Invalid Amount");
        return;
    }
    const pin = getValueFromInput('cashout-pin')
    if (pin === "1234") {
        alert("cashout successfully");
        setBalance(newBalance)

    }
    else {
        alert('Invalid pin');
        return;
    }
})


// document.getElementById('withdraw-btn').addEventListener('click', function () {
//     const agentNumber = document.getElementById('agent-number');
//     const cashoutNumber = agentNumber.value;
//     // console.log(cashoutNumber);
//     if (cashoutNumber.length != 11) {
//         alert("Invalid Agent Number");
//         return;
//     }
//     const inputCashoutAmount = document.getElementById('cashout-amount');
//     const cashoutAmount = inputCashoutAmount.value;
//     const carrentBalance = document.getElementById('balance');
//     const Balance = carrentBalance.innerText;
//     const newBalance = Number(Balance) - Number(cashoutAmount);
//     if (newBalance < 0) {
//         alert("Insufficient Balance");
//         return;
//     }

//     const inputCashoutPin = document.getElementById('cashout-pin');
//     const cashoutPin = inputCashoutPin.value;
//     if (cashoutPin === "1234") {
//         alert('Cashout Successfully');
//         carrentBalance.innerText = newBalance;
//     }
//     else {
//         alert("Invalid Pin");

//     }
// })