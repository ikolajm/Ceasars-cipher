let input = document.querySelector("#input");
let result = document.querySelector("#result");
let read = document.querySelector("#read");
let newString = "";

read.addEventListener("click", caesarCipher);

function caesarCipher() {
  newString = "";
  let string = input.value.toUpperCase();
  // Create array out of alphabet
  let alphabetArray = alphabet.split("");

  for (let i = 0; i < string.length; i++) {
    // Get character code of what is being viewed
    let num = string[i].charCodeAt();
    // Use ASCII
      // A-N
    if (num >= 65 && num <= 77) {
      newString += String.fromCharCode(num + 13);
      // M-Z
    } else if (num >= 78 && num <= 90) {
      newString += String.fromCharCode(num - 13);
      // All else
    } else {
      newString += String.fromCharCode(num);
    }
  }

  // Return new message
  result.textContent = "Your encrypted message is: " + newString;
}
