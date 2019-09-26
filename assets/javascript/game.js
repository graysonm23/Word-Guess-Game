var words = ["lowtide", "clam", "coral", "boat", "coast", "hermit", "fish"];

let randomNum = Math.floor(Math.random() * words.length); //random string from array
let chosenWord = words[randomNum]; //consolidated to variable
let rightWordArray = [];
let wrongWordArray = [];
let underScore = [];
let docUnderScore = document.getElementsByClassName("underline");
let docGuess = document.getElementsByClassName("guessedlettersdiv");
let guessremainingNum = 15;
let guessremainingNumSpan = document.getElementById("guessremainingNum");

console.log(chosenWord);

function generateUnderscore() {
  for (let i = 0; i < chosenWord.length; i++) {
    underScore.push("_");
  }
  return underScore;
}

//not working properly
if (chosenWord === words[0]) {
  var img = document.createElement("img");
  var src = document.getElementsByClassName("imgdivclass");
  img.src = "assets/images/lowtide.jpg";
  img.append(src);
}

// creating the function to minus the number of guesses when a letter is pushed to wrongWordArray
function wrongGuess() {
  guessremainingNum--;
  guessremainingNumSpan.innerHTML = guessremainingNum;
}

document.addEventListener("keyup", function() {
  let keyword = String.fromCharCode(event.keyCode).toLowerCase();
  if (chosenWord.indexOf(keyword) > -1) {
    rightWordArray.push(keyword);
    underScore[chosenWord.indexOf(keyword)] = keyword;
    docUnderScore[0].innerHTML = underScore.join(" ");
    if (underScore.join("") == chosenWord) {
      alert("you win");
    }
  } else {
    wrongWordArray.push(keyword);
    wrongGuess();
  }
  //creates the letters that are wrongly guessed in the DOM
  docGuess[0].innerHTML = wrongWordArray.join(" ");
});

// creates underscores in the DOM
docUnderScore[0].innerHTML = generateUnderscore().join(" ");
