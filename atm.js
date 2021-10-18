// atm file will contain functions for user interaction

const { acctBal } = require('./account');
const accountInfo = require('./account');


// validate pin

 function validatePin(inputPin){


    if(accountInfo.pinNum == inputPin){
        return true;
    }
    else {

        return false;
    }
   
}

// get balance

let currentBalance = acctBal;

// deposit function

function deposit(depositAmount){
    accountInfo.acctBal = accountInfo.acctBal + depositAmount;
    return accountInfo.acctBal;
}
// withdraw function

function withdraw(withdrawAmount){
    accountInfo.acctBal = accountInfo.acctBal - withdrawAmount;
    return accountInfo.acctBal;
}

module.exports.validate = validatePin;
module.exports.balance = currentBalance;
module.exports.addDeposit = deposit;
module.exports.withdrawFunds = withdraw;