// Dependencies
var generateBtn = document.querySelector("#generate");

// State
var alphaLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var alphaUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var symbols = ["!", "*", "+", "-", "?", "@", "^", "_", "~"];
var userChoices = [];
var password = ''

// generatePassword function
function generatePassword() {
  var passwordLength = prompt("How many characters would you like your password? Choose between 8 and 128");
  var passwordLengthInteger = parseInt(passwordLength)
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

  // if statements to concat var userChoices with the selected actual choices of the user.
  if (confirmLowercase) {
    userChoices = userChoices.concat(alphaLowercase);
  }

  if (confirmUppercase) {
    userChoices = userChoices.concat(alphaUppercase);
  }

  if (confirmNumbers) {
    userChoices = userChoices.concat(numbers);
  }

  if (confirmSymbols) {
    userChoices = userChoices.concat(symbols);
    
  }

  //Create passwordBase and set it equal to userChoices joined into a string.
  var passwordBase = userChoices.join("");
  for (var i = 0; i < passwordLengthInteger; i++) {
    var randomNumber = Math.floor(Math.random() * passwordBase.length);
    password += passwordBase.substring(randomNumber, randomNumber +1)
  };

  //Call writePassword and pass the value of the math above as the argument for writePassword.
  writePassword(password)
  return password;
};


// Write password to the #password input
function writePassword(text) {
  var passwordText = document.querySelector("#password");
  passwordText.value = text;
};


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);








