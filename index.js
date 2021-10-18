// File that handles interactions between user and atm
const prompt = require('prompt-sync')();
const { validate, balance, addDeposit, withdrawFunds } = require('./atm');

    let ledger;
    let userActive = true;
    while (userActive === true) {
        inputPin = prompt('Enter your 4 digit pin.')
        if (validate(inputPin) === false) {
            prompt('Incorrect pin, press enter to try agian'); 

        } else {
            let menuSelection = prompt("What would you like to do? enter '1' to check your balance, '2' to deposit funds, '3' to withdraw funds or enter 'exit' to quit program ");
            switch (menuSelection) {
                case "1":
                    console.log(`Your current balance is: ${balance}`);
                    
                    break;
                case "2":
                    let userDeposit = prompt('How much would you like to deposit? ')
                    console.log(`Your new balance is: ${(addDeposit(parseInt(userDeposit)))}`);
                    
                    break;
                case "3":
                    let userWithdraw = prompt('How much would you like to withdraw?')
                    console.log(`Your new balance is: ${(withdrawFunds(parseInt(userWithdraw)))}`);
                    ledger = balance;
                case "exit":
                    userActive === false;
                    break;
            }
            let continueUsing = prompt('Would you like to do anything else? Say "yes" or "no"');
            if (continueUsing === "yes") {
                userActive = true;
            } else {
                userActive = false;
            }

        }
    }

    
