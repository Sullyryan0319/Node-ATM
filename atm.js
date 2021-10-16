// atm file will contain functions for user interaction

const accountInfo = require('./account');


// validate pin

 function validatePin(inputPin){
     console.log(accountInfo.pinNum);
     console.log(inputPin);
    if(inputPin === accountInfo.pinNum){
        return true;
    }else{
        return false;
    }
   
}

// get balance

let currentBalance = accountInfo.acctBal;

// deposit function

function deposit(currentBalance, depositAmount){
    let newBalance = currentBalance + depositAmount;
    return newBalance;
}
// withdraw function

function withdraw(currentBalance, withdrawAmount){
    let updatedBalance = currentBalance - withdrawAmount;
    return updatedBalance;
}

module.exports.validate = validatePin;
module.exports.balance = currentBalance;
module.exports.addDeposit = deposit;
module.exports.withdrawFunds = withdraw;