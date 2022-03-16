//Start of Password Generator codeing
// Assignment Code
let generateBtn = document.querySelector("#generate");

//Setting charcter length standards and prompts to go with them
let length = Number(prompt("How many charcters do you want in your password? Choose between 8 and 128"));
while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("This needs a value between 8 and 128 characters"));

//Setting up rest of prompts
let confirmNumber = confirm("Will this contain numbers");
let confirmSpecial = confirm("Will this contain special characters?");
let confirmLowercase = confirm("Will this contain Lowercase letters?");
let confirmUppercase = confirm("Will this contain Uppercase letters?");

while (!confirmNumber && !confirmSpecial && !confirmLowercase && !confirmUppercase) {
  alert("You must choose at least one!")
  confirmNumber = confirm("Will this contain numbers");
  confirmSpecial = confirm("Will this contain special characters?");
  confirmLowercase = confirm("Will this contain Lowercase letters?");
  confirmUppercase = confirm("Will this contain Uppercase letters?");
}

generateBtn.addEventListener("click", function () {
  generatePassword();
});

// Write password to the #password input
function generatePassword() {
  let password = "";
  let passwordText = document.querySelector("#password");
  let characters = {}
  if (confirmNumber) password += passwordText(characters.confirmNumber = "1", "2", "3", "4", "5", "6", "7", "8", "9");
  if (confirmSpecial) password += passwordText(characters.confirmSpecial = "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "<", ">", "?", "|", ".", ",", "/", ":", ";", "~", "`", "{", "}");
  if (confirmLowercase) password += passwordText(characters.confirmLowercase = "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
  if (confirmUppercase) password += passwordText(characters.confirmUppercase = "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");

  for (let i = password.length; i < length; i++) password += passwordText(passwordText(characters).value);


  document.getElementById("#password").value = passwordText(password).join("")
}

generatePassword;

// let enter;
// let confirmNumber;
// let confirmCharacter;
// let confirmUppercase;
// let confirmLowercase;
// let generateBtn = document.querySelector("#generate");
// let passwordText = document.querySelector("#password")
// let pickChoices;
// let result = [];

// //Password variable values Special, Numerical, Alphabetical characters, and a space
// special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "<", ">", "?", "|", ".", ",", "/", ":", ";", "~", "`", "{", "}"];
// number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// space = [];

// let choices;

// //Allows uppercase change
// function upperCase(x) {
//   return x.toUpperCase();
// }

// //Variable for uppercase change
// letterUpper = letter.map(upperCase);

// generateBtn.addEventListener("click", function () {
//   passwordText.value = password;
//   document.getElementById("password").placeholder = password;
// });

// generateBtn.addEventListener("click", writePassword);

// //Generate password function
// function generatePassword() {
//   enter = parseInt(prompt("How many charcters do you want in your password? Choose between 8 and 128"));
//   //User input
//   //run 4 loop



//   if (!enter) {
//     alert("This needs a value between 8 and 128 characters");
//   }
//   else if (enter < 8 || enter > 128) {
//     enter = parseInt(prompt("Must have characters between 8 and 128 characters"));
//   }
//   else {
//     confirmNumber = confirm("Will this contain numbers");
//     confirmCharacter = confirm("Will this contain letters?");
//     confirmLowercase = confirm("Will this contain Lowercase letters?");
//     confirmUppercase = confirm("Will this contain Uppercase letters?");
//   };

//   //password is length

//   //All negative selections
//   if (!confirmCharacter && !confirmLowercase && !confirmNumber && !confirmUppercase) {
//     choices = alert("You must choose at least one!")
//   }
//   //One positive selection
//   else if (confirmCharacter) {
//     choices = special;
//   }
//   else if (confirmUppercase) {
//     choices = space.concat(letterUpper);
//   }
//   else if (confirmNumber) {
//     choices = number;
//   }
//   else if (confirmLowercase) {
//     choices = letter;
//   }
//   //Two positive selections
//   else if (confirmCharacter && confirmNumber) {
//     choices = special.concat(number);
//   }
//   else if (confirmCharacter && confirmUppercase) {
//     choices = special.concat(letterUpper);
//   }
//   else if (confirmCharacter && confirmLowercase) {
//     choices = special.concat(letter)
//   }
//   else if (confirmNumber && confirmLowercase) {
//     choices = number.concat(letter);
//   }
//   else if (confirmNumber && confirmUppercase) {
//     choices = number.concat(letterUpper)
//   }
//   else if (confirmLowercase && confirmUppercase) {
//     choices = letter.concat(letterUpper)
//   }
//   //Three positive selections
//   else if (confirmCharacter && confirmNumber && confirmLowercase) {
//     choices = special.concat(number, letterUpper);
//   }
//   else if (confirmCharacter && confirmNumber && confirmUppercase) {
//     choices = special.concat(number, letter);
//   }
//   else if (confirmCharacter && confirmLowercase && confirmUppercase) {
//     choices = special.concat(letter, letterUpper);
//   }
//   else if (confirmNumber && confirmUppercase && confirmLowercase) {
//     choices = number.concat(letter, letterUpper)
//   }
//   //Four positive selctions
//     else if (confirmCharacter && confirmNumber && confirmLowercase && confirmUppercase) {
//     choices = special.concat(number, letter, letterUpper);
//   }
//   //Random selection for all charcters
//   for (let w = 0; w < enter; w++) {
//     let pickChoices = choices[Math.floor(Math.random() * choices.length)];
//     let result = Object.keys(password).map((key) => password[key]);
//     result.push(pickChoices);
//     console.log(result)
//   }
//   //Combine password arrays into a string
//   passwordText = result.join("");
//   return passwordText;
// }
// //Gives new password
// function writePassword() {
//   let password = generatePassword();
//   passwordText.textContent = password.toString();
// }