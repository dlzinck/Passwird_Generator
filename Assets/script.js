




let enter;
let confirmNumber;
let confirmCharacter;
let confirmUppercase;
let confirmLowercase;

//Password variable values Special, Numerical, Alphabetical characters, and a space
special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "<", ">", "?", "|"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
space = [ ];

let choices;


//Allows uppercase change
let upperCase = function (x) {
  return x.toUpperCase();
};

//Variable for uppercase change
letterOne = letter.map(upperCase);


let get = document.querySelector("#generate");

get.addEventListener("click", function () {
  passwordText.value = password;
  document.getElementById("password").placeholder = password;
}


//Generate password function
function generatePassword() {}




















// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);