let dailyTransactions = [1042, 8922, 3301, 5510, 7719, 9920];
let fraudID = 5510;

// includes()
let hasFraud = dailyTransactions.includes(fraudID);

console.log("Fraud Detected:", hasFraud);

// indexOf()
if (hasFraud) {

    let fraudIndex = dailyTransactions.indexOf(fraudID);

    console.log("Fraud Index:", fraudIndex);

    // splice()
    dailyTransactions.splice(fraudIndex, 1);
}

// slice()
let lastThree = dailyTransactions.slice(-3);

console.log("Last 3 Transactions:", lastThree);

console.log("Updated Transactions:", dailyTransactions);

// forEach()
dailyTransactions.forEach(transaction => {
    console.log(`Transaction ${transaction} cleared.`);
});