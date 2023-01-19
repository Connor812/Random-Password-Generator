// Assignment Code
var generateBtn = document.querySelector("#generate");
let charset = "";
let length = 0;
let upperCaseCharset = "";
let lowerCaseCharset = "";
let numbersCharset = "";
let specialCharset = "";
let lowerCase = "";
let upperCase = "";
let numbers = "";
let special = "";







// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  return x();

}

const x = function rightLength() {

  charset = "";
  length = 0;
  lowerCase = "";
  upperCase = "";
  numbers = "";
  special = "";
  upperCaseCharset = "";
  lowerCaseCharset = "";
  numbersCharset = "";
  specialCharset = "";
  console.log(lowerCase);
  console.log(upperCase);
  console.log(special);
  console.log(numbers);
  console.log(typeof length);

  length = prompt("Enter the length of your password (8-128): ");


  if (length < 8 || length > 128) {
    alert("Invalid Number. Please try again.");
    return x();
  }

  let variable = isNaN(length);
  console.log(variable);

  if (variable == true) {
    alert("Invalid Number. Please try again.");
    return x();
  }

  lowerCase = confirm("Would you like lowercase letters.");
  upperCase = confirm("Would you like to have uppercase letters.");
  numbers = confirm("Would you like to have numbers.");
  special = confirm("Would you like specail characters.");
  console.log(lowerCase);
  console.log(upperCase);
  console.log(special);
  console.log(numbers);

  if (!lowerCase && !upperCase && !numbers && !special) {
    alert("Can't make a password from nothing. Please Select at least 1 selector");
    return x();
  } else {


    if (lowerCase) {
      lowerCaseCharset = "abcdefghijklmnopqrstuvwxyz";
      console.log(lowerCaseCharset);
      console.log(lowerCase);
    }

    if (upperCase) {
      upperCaseCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      console.log(upperCaseCharset);
      console.log(upperCase);
    }
    if (numbers) {
      numbersCharset = "0123456789";
      console.log(numbersCharset);
      console.log(numbers);
    }
    if (special) {
      specialCharset = "`~!@#$%^&*()-_+[{]}|:'?><";
      console.log(specialCharset);
      console.log(special);
    }
  }

  charset = (lowerCaseCharset + upperCaseCharset + numbersCharset + specialCharset);
  console.log(charset);


  let retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
    console.log(retVal);
    console.log(i);

  }
  return retVal;

}

