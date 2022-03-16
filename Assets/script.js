let enter;
let confirmNumber;
let confirmCharacter;
let confirmUppercase;
let confirmLowercase;
let password = generatePassword();
let passwordText = document.querySelector("#password");
let pickChoices;


//Password variable values Special, Numerical, Alphabetical characters, and a space
special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "<", ">", "?", "|", ".", ",", "/", ":", ";", "~", "`", "{", "}"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
space = [];

let choices;

//Allows uppercase change
let upperCase = function (x) {
  return x.toUpperCase();
};

//Variable for uppercase change
letterUpper = letter.map(upperCase);


let get = document.querySelector("#generate");

get.addEventListener("click", function () {
  passwordText.value = password;
  document.getElementById("password").placeholder = password;
});


//Generate password function
function generatePassword() {
  enter = parseInt(prompt("How many charcters do you want in your password? Choose between 8 and 128"));
  //User input
  if (!enter) {
    alert("This needs a value between 8 and 128 characters");
  }
  else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt("Must have characters between 8 and 128 characters"));
  }
  else {
    confirmNumber = confirm("Will this contain numbers");
    confirmCharacter = confirm("Will this contain letters?");
    confirmLowercase = confirm("Will this contain Lowercase letters?");
    confirmUppercase = confirm("Will this contain Uppercase letters?");
  };
  //All negative selections
  if (!confirmCharacter && !confirmLowercase && !confirmNumber && !confirmUppercase) {
    choices = alert("You must choose at least one!")
  }
  //One positive selection
  else if (confirmCharacter) {
    choices = special;
  }
  else if (confirmUppercase) {
    choices = space.concat(letterUpper);
  }
  else if (confirmNumber) {
    choices = number;
  }
  else if (confirmLowercase) {
    choices = letter;
  }
  //Two positive selections
  else if (confirmCharacter && confirmNumber) {
    choices = special.concat(number);
  }
  else if (confirmCharacter && confirmUppercase) {
    choices = special.concat(letterUpper);
  }
  else if (confirmCharacter && confirmLowercase) {
    choices = special.concat(letter)
  }
  else if (confirmNumber && confirmLowercase) {
    choices = number.concat(letter);
  }
  else if (confirmNumber && confirmUppercase) {
    choices = number.concat(letterUpper)
  }
  else if (confirmLowercase && confirmUppercase) {
    letter.concat(letterUpper)
  }
  //Three positive selections
  else if (confirmCharacter && confirmNumber && confirmLowercase) {
    choices = special.concat(number, letterUpper);
  }
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
    choices = special.concat(number, letter);
  }
  else if (confirmCharacter && confirmLowercase && confirmUppercase) {
    choices = special.concat(letter, letterUpper);
  }
  else if (confirmNumber && confirmUppercase && confirmLowercase) {
    choices = number.concat(letter, letterUpper)
  }
  //Four positive selctions
    else if (confirmCharacter && confirmNumber && confirmLowercase && confirmUppercase) {
    choices = special.concat(number, letter, letterUpper);
  }
  //Random selection for all charcters
  for (let w = 0; w < enter w++) {
    let pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
  }
  //Combine password arrays into a string
  passwordText = password.join("");
  UserInput(passwordText);
  return passwordText;
}


//   // Assignment Code
// let generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);