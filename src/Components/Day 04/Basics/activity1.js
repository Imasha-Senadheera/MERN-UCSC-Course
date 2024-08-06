// Function to create a new bank account object
function createBankAccount(ownerName, initialBalance) {
  let account = {
    ownerName: ownerName,
    balance: initialBalance,
    // Method to deposit money into the account
    deposit: function (amount) {
      this.balance += amount;
      console.log(
        `Deposit of $${amount} successful. New balance: $${this.balance}`
      );
    },
    // Method to withdraw money from the account
    withdraw: function (amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
        console.log(
          `Withdrawal of $${amount} successful. New balance: $${this.balance}`
        );
      } else {
        console.log("Insufficient funds!");
      }
    },
    // Method to check the balance
    checkBalance: function () {
      console.log(`Current balance for ${this.ownerName}: $${this.balance}`);
    },
  };
  return account;
}

// Example usage
const account1 = createBankAccount("Jane Doe", 1000);
account1.deposit(500); // Deposit $500
account1.withdraw(200); // Withdraw $200
account1.checkBalance(); // Check balance
