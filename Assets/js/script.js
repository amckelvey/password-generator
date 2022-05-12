// Dependencies
var generateBtn = document.querySelector("#generate");

// State
var alphaLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var alphaUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var symbols = ["!", "*", "+", "-", "?", "@", "^", "_", "~"];
var userChoices;



// generatePassword function
function generatePassword() {
  var passwordLength = (prompt("How many characters would you like your password? Choose between 8 and 128"));
  if (!passwordLength) {
    alert("You haven't supplied a value");
  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = (prompt("You must choose between 8 and 128"));
  } else {
    confirmNumbers = confirm("Will this contain numbers?");
    confirmSymbols = confirm("Will this contain special characters?");
    confirmUppercase = confirm("Will this contain Uppercase letters?");
    confirmLowercase = confirm("Will this contain Lowercase letters?");
  };
  // If user selects no options
  if (!confirmSymbols && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    userChoices = alert("You must choose a criteria!");
    // If user selects all four confirms
  } else if (confirmNumbers && confirmSymbols && confirmUppercase && confirmLowercase) {
    userChoices = alphaLowercase.concat(alphaUppercase, numbers, symbols);
    // If user selects confirmNumber, confirmCharacter, and confirmUppercase
  } else if (confirmNumbers && confirmSymbols && confirmUppercase) {
    userChoices = numbers.concat(symbols, alphaUppercase);
    // If user selects confirmNumbers, confirmSymbols, and confirmLowercase
  } else if (confirmNumbers && confirmSymbols && confirmLowercase) {
    userChoices = numbers.concat(symbols, alphaLowercase);
  };
  var password = [];
  for (var i = 0; i < userChoices; i++) {
    var getPassword = userChoices[Math.floor(Math.random() * userChoices.length)];
    console.log(getPassword);
  }
  
  return getPassword;
};







// Write password to the #password input
function writePassword() {
  console.log("Is it working?")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

writePassword()








