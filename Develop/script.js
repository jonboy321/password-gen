// Assignment Code
// Arrays for special characters, lowercase letters, uppercase letters, and numbers
const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];
const numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function generatePassword() {
  var allChars = [];

  let length = getPasswordLength()
  console.log(length);

  let lower = confirm('Would you like your password to include lowercase letters?');
  console.log(lower);

  if (lower) {
    allChars = allChars.concat(lowercase);
    console.log(allChars);
  }

  let upper = confirm('Would you like your password to include uppercase letters?');
  console.log(upper);
 
  if (upper) {
    allChars = allChars.concat(uppercase);
    console.log(allChars);
  }

  let numbers = confirm('Would you like your password to include numbers?');
  console.log(numbers);

  if (numbers) {
    allChars = allChars.concat(numberChars);
    console.log(allChars);
  }

  let special = confirm('Would you like your password to include special characters?');
  console.log(special);

  if (special) {
    allChars = allChars.concat(specialChars);
    console.log(allChars);
  }
  
  if (!lower && !upper && !numbers && !special) {
    alert('You must select at least one type of character.');
    return generatePassword();
  }

  var password = "";
  for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * allChars.length);
    password += allChars[index];
  }

  return password;
}

function getPasswordLength() {
  let length = prompt('How many characters would you like your password to contain?');

  if (length >= 8 && length <= 128) {
  return length;
  }
  alert('Password must be between 8-128 characters.');
  return getPasswordLength();
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
