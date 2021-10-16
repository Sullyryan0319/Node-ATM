// File that handles interactions between user and atm
const prompt = require('prompt-sync')({ sigint: true });
const { validate, balance, addDeposit, withdrawFunds } = require('./atm');


const enteredPin = prompt('Enter your 4 digit pin.')
if (!validate === enteredPin) {
    console.log('Incorrect pin, please re-enter');

} else {
    const menuSelection = prompt("What would you like to do? enter '1' to check your balance, '2' to deposit funds, '3' to withdraw funds or enter 'exit' to quit program ");
    switch (menuSelection) {
        case "1":
            console.log(`Your current balance is: ${balance}`);
            break;
        case "2":
            let userDeposit = prompt('How much would you like to deposit? ')
            console.log(addDeposit(parseInt(userDeposit)));
            break;
        case "3":
            let userWithdraw = prompt('How much would you like to withdraw?')
            console.log(withdrawFunds(userWithdraw));
        case "exit":
            // terminate program
            break;
    }



}
