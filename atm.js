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

let currentBalance;

// deposit function

function deposit(depositAmount){
     currentBalance = accountInfo.acctBal + depositAmount;
    return currentBalance;
}
// withdraw function

function withdraw(withdrawAmount){
     currentBalance = accountInfo.acctBal - withdrawAmount;
    return currentBalance;
}

module.exports.validate = validatePin;
module.exports.balance = currentBalance;
module.exports.addDeposit = deposit;
module.exports.withdrawFunds = withdraw;