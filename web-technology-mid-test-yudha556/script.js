
// TODO: Implement the password generation logic based on user input

const generatePassword = (length, options) => {
    // Character sets for password generation
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    // TODO: Create a variable for the character set based on selected options
    let charset = "";
    if (options.includeUppercase) charset += uppercase;
    if (options.includeLowercase) charset += lowercase;
    if (options.includeNumbers) charset += numbers;
    if (options.includeSpecialChars) charset += specialChars;
    
    
    // TODO: Generate the password based on the selected criteria
    if (!options.includeUppercase && !options.includeLowercase && 
        !options.includeNumbers && !options.includeSpecialChars) {
        throw new Error("At least one character type must be selected");
    }
    

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
};


//  TODO: Add event listener to the button to call generatePassword and display the output
// from mahasiswa: buat kode yang ini fungsinya udah ada di DOM.js ka, jadi kami kebingungan buat task yang ini

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { generatePassword }
}   

// BONUS: Implement the copy to clipboard functionality
// terus buat yang ini juga udah ada di DOM.js jadi biar alertnya ga double, aku ganti dari alert ke console.log ka 
