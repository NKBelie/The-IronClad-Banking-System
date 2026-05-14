function validateBankPassword(password) {

    let hasVowel = /[aeiou]/i.test(password);

    if (
        password.length >= 8 &&
        !password.toLowerCase().includes("password") &&
        hasVowel
    ) {
        return "Access Granted";
    } else {
        return "Access Denied";
    }
}


// Test
console.log(validateBankPassword("SecureBank1"));
console.log(validateBankPassword("password123"));