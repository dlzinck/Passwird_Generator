//Assignment Code for Random Generator homework
//Golobal variables
let result = [];
let userInput = [];

//Password variable values
//Numerical characters
let number = ['0', '1','2', '3', '4', '5', '6', '7', '8','9'];
//SpecialChoice characters
let special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '[', '}', ']', ';', ':', '"', '<', '>', ',', '.', '|', '`', '~', '/'];
//LowerChoicecase characters
let lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//UpperChoicecase characters
let upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

//Assignment Code (given by homework)
let generateBtn = document.querySelector("#generate");
//Add event listener to generate button (given by homework)
generateBtn.addEventListener("click", writePassword);

//This function is used to generate the password and randomize it as well
function generatePassword() {
  let randomPassword = "";
  for (let i = 0; i < result; i++) {
    let randomValue = Math.floor(Math.random() * userInput.length);
    randomPassword = randomPassword + userInput[randomValue];
  }
  return randomPassword;
}

// Write password to the #password input (given by homework and added onto by me)
function writePassword() {
  let prompt = UserInput();
  let passwordText = document.querySelector("#password");

  if(prompt) {
    let randomPassword = generatePassword();
    passwordText.value = randomPassword;
  }
  else { 
    alert("You must choose at least one of the characters!");
  }
}

//A function to allow the user's choices to be taken into account
function UserInput() {
  userInput = [];
  result = prompt("How many characters between 8 and 128?");
  //If it is not a number between 8 and 128 the alert will trigger
  if(isNaN(result) || result < 8 || result > 128) {
    alert("Must have 8 to 128 characters!");
    return false;
  }
  if (confirm("Will the password contain numbers?")) {
    userInput = userInput.concat(number);
  }
  if (confirm("Will the password contain special characters?")) {
    userInput = userInput.concat(special);
  }
  if (confirm("Will this password contain lower case letters?")) {
    userInput = userInput.concat(lower);
  }
  if (confirm("Will this password contain upper case letters?")) {
    userInput = userInput.concat(upper);
  }
  else {
    alert("You must choose at least one type of character!")
  }
  console.log(userInput);
  return true;
}