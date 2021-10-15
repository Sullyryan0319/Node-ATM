// atm file will contain functions for user interaction

// validate pin
function validatePin(account){
    let userInput = prompt("Enter your 4 didgit pin.")
    if(userInput === account.pin){
        return true;
    }else{
        alert("Incorrect pin, please re-enter.")
    }
}


// get balance
const balanceCheck = prompt("Would you like to check your account balance?");
function getBalance(input){
    if(input === "yes"){
        alert(`Your current balance is ${acctBal}`);
    }else{

    }

}
// deposit function

// withdraw function