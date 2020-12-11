var bankAccount = function (initialBalance) {
    // Let's initialise the balance with the value passed as an argument
    // to the function.

    let balance = initialBalance;

    return {
        getBalance: function () {
            return balance
        },
        deposit: function (amount) {
            // Let's add the amount to what we already have in the
            //  balance.
            balance += amount;
            // Return the new balance
            return balance;
        },
        withdraw: function (amount) {
            // Check if we have enough money to withdraw all that.
            if (amount <= balance) {
                balance -= amount;
                return true;
            }
            else {
                return false;
            }
        }
    }
}

var marceloAccount = bankAccount(100);

console.log(marceloAccount.deposit(10)) // 110
console.log(marceloAccount.withdraw(80)) // true
console.log(marceloAccount.withdraw(80)) // false
console.log(marceloAccount.balance) // false
