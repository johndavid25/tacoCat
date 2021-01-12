document.getElementById("checkPalindrome").addEventListener("click", function () {
    let userInput = document.getElementById("palindrome").value;
    let oneWord = userInput.toLowerCase().replace(/ /g, "");
    let newInput = "";

    
    for (let index = oneWord.length - 1; index >= 0; index--) {
      newInput += oneWord[index];
    }
    if (newInput == "") {
        document.getElementById("resultPalindrome").innerHTML = `Please enter a word.`;
    } else if (oneWord == newInput) {
        document.getElementById("resultPalindrome").innerHTML = `YES! This is a palindrome.`;
    } else {
        document.getElementById("resultPalindrome").innerHTML = `SORRY, this is not a palindrome.`;

    }
    document.getElementById("result").innerHTML = newInput;

  });

  document.getElementById("btnClear").addEventListener("click", function(){
    document.getElementById("palindrome").value = "";
});
