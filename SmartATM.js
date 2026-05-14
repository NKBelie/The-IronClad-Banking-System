let balance = 1000;
let transactionHistory = [];

function atmTransaction(transactionType, amount = 0) {

    if (transactionType === "Withdrawal") {

        if (amount > 0 && amount <= balance) {
            balance -= amount;

            transactionHistory.push(`Withdrawal: $${amount}`);

            console.log(`Withdrawal successful.`);
        } else {
            console.log("Invalid withdrawal amount.");
        }

    } else if (transactionType === "Deposit") {

        if (amount > 0) {
            balance += amount;

            transactionHistory.push(`Deposit: $${amount}`);

            console.log("Deposit successful.");
        } else {
            console.log("Invalid deposit amount.");
        }

    } else if (transactionType === "Undo") {

        let lastTransaction = transactionHistory.pop();

        if (lastTransaction) {

            let value = Number(lastTransaction.split("$")[1]);

            if (lastTransaction.includes("Withdrawal")) {
                balance += value;
            } else if (lastTransaction.includes("Deposit")) {
                balance -= value;
            }

            console.log("Last transaction undone.");
        } else {
            console.log("No transaction to undo.");
        }

    } else if (transactionType === "Fee") {

        balance -= 10;

        transactionHistory.unshift("Maintenance Fee: $10");

        console.log("Maintenance fee applied.");
    }

    // Remove oldest transaction if history too long
    if (transactionHistory.length > 5) {
        let removed = transactionHistory.shift();
        console.log(`Old transaction removed: ${removed}`);
    }

    console.log("Current Balance:", balance);
    console.log("Transaction History:", transactionHistory);
}


// Test
atmTransaction("Deposit", 200);
atmTransaction("Withdrawal", 100);
atmTransaction("Fee");
atmTransaction("Undo");