var words = [
  "low tide",
  "kayak",
  "coral",
  "boat",
  "beachball",
  "hermit crab",
  "sunscreen"
];

let randomNum = Math.floor(Math.random() * words.length); //random string from array
let chosenWord = words[randomNum]; //consolidated to variable
let rightWordArray = [];
let wrongWordArray = [];
let underScore = [];

function generateUnderscore() {
  for (let i = 0; i < chosenWord.length; i++) {
    underScore.push("_");
  }
  return underScore;
}
generateUnderscore();

document.addEventListener("keyup", function() {
  let keyword = String.fromCharCode(event.keyCode).toLowerCase();
  if (chosenWord.indexOf(keyword) > -1) {
    rightWordArray.push(keyword);
    underScore[chosenWord.indexOf(keyword)] = keyword;
    if (underScore.join("") == chosenWord) {
      alert("you win");
    }
  } else {
    wrongWordArray.push(keyword);
  }
});
