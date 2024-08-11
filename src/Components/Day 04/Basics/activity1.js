// Function to create a new bank account object
function createBankAccount(ownerName, initialBalance) {
  return {
    ownerName,
    balance: initialBalance,

    // Method to deposit money into the account
    deposit(amount) {
      this.balance += amount;
      console.log(
        `Successfully deposited $${amount}. New balance: $${this.balance}`
      );
    },

    // Method to withdraw money from the account
    withdraw(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
        console.log(
          `Successfully withdrew $${amount}. New balance: $${this.balance}`
        );
      } else {
        console.log("Insufficient funds! Withdrawal declined.");
      }
    },

    // Method to check the balance
    checkBalance() {
      console.log(
        `Account holder: ${this.ownerName}\nCurrent balance: $${this.balance}`
      );
    },
  };
}

// Example usage
const account1 = createBankAccount("Jane Doe", 1000);
account1.deposit(500); // Deposit $500
account1.withdraw(200); // Withdraw $200
account1.checkBalance(); // Check balance
