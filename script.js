// ------- D I V - S O U P ------- //
// Selectors
const soups = [
  { name: "Spinich", color: "#599e54" },
  { name: "Div soup", color: "#d199ff" },
  { name: "Tomato", color: "#db5d3d" },
  { name: "Asparagus", color: "#c3e6ac" },
  { name: "Carrot", color: "#ffb057" },
  { name: "Artichoke", color: "#edeaab" },
];
const generatorBtn = document.querySelector(".soup-title");
let soupBowl = document.querySelector(".soup");

// eventlisterners
generatorBtn.addEventListener("click", generateSoup);

//functions
// generate two names random from name array, if it is the same name, generate again.
function generateSoup() {
  const soup = soups[Math.floor(Math.random() * soups.length)];
  generatorBtn.innerText = soup.name;
  soupBowl.style.animation = "fill 4s ease";
  soupBowl.style.background = soup.color;
}
//--------------------------------------------------------------------------//

// ------- N U M B E R   G A M E ------- //
//Selectors
const startBtn = document.querySelector(".start-btn");
const numberGuess = document.querySelector(".number-input");
const submitBtn = document.querySelector(".submit-btn");
const message = document.querySelector(".message");
const callToAction = document.querySelector(".call-to-action");
let theNumber;

startBtn.innerText = "???";

//Eventlisteners
startBtn.addEventListener("click", startGame);
submitBtn.addEventListener("click", checkNumber);

function startGame() {
  callToAction.innerHTML = "Guess a number<br>between 1 and 10!";
  numberGuess.classList.remove("hidden");
  theNumber = Math.floor(Math.random() * 10 + 1);
  message.innerText = "";
  startBtn.innerText = "";
}

//Functions
function checkNumber(event) {
  event.preventDefault();
  callToAction.innerText = "";
  if (theNumber == numberGuess.value) {
    message.innerHTML = `You guessed ${numberGuess.value},<br>the right number! YEYY!`;
    callToAction.innerText = "";
    startBtn.innerText = "!";
    numberGuess.classList.add("hidden");
  } else if (theNumber > numberGuess.value) {
    message.innerHTML = `Wrong, you guessed ${numberGuess.value},<br>guess a little bit higher.`;
  } else if (theNumber < numberGuess.value && numberGuess.value < 11) {
    message.innerHTML = `Wrong, you guessed ${numberGuess.value},<br>guess a little bit lower.`;
  } else {
    message.innerHTML =
      "You have to guess a<br>number between 1 and 10,<br>try again.";
  }
  numberGuess.value = "";
}
