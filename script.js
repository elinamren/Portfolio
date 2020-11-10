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

// ----- P O P - U P --------//

const projectThreeInfo = {
  title: "First Website",
  description: "A website built in HTML and CSS",
  info:
    "My first project, A website built in HTML and CSS A website built in HTML and CSS A website built in HTML and CSS A website built in HTML and CSS",
  link: "https://elinamren.github.io/resume/",
};

const projectOneInfo = {
  title: "Good Morning",
  description: "An interactive website built in Vanilla JavaScript",
  info:
    "A morning routine board for kids to in a more fun way finish their tasks",
  link: "https://elinamren.github.io/goodmorning/",
};

const projectTwoInfo = {
  title: "Habit tracker",
  description: "An Habit Tracker webapp built in Vanilla JavaScript",
  info:
    "A habbit tracker web app where you can add your own habits. Mark as planed and done",
  link: "https://elinamren.github.io/habit-tracker/",
};

//selector divs
const projectOne = document.querySelector(".one");
const projectTwo = document.querySelector(".two");
const projectThree = document.querySelector(".three");

const popup = document.querySelector(".popup");
const popupTitle = document.querySelector(".popup-title");
const popupDescription = document.querySelector(".popup-description");
const popupInfo = document.querySelector(".popup-info");
const visitLink = document.querySelector(".visit-link");

const closeButton = document.querySelector(".close-button");

const projects = Array.from(document.querySelectorAll(".project"));

//eventlistener divs connecting arguments to projects
projects.forEach((project) =>
  project.addEventListener("click", getProjectInfo)
);
closeButton.addEventListener("click", closeProjectInfo);

// functions

function getProjectInfo() {
  if (this == projectOne) {
    popupTitle.innerText = projectOneInfo.title;
    popupDescription.innerText = projectOneInfo.description;
    popupInfo.innerText = projectOneInfo.info;
    visitLink.href = projectOneInfo.link;
    popup.classList.remove("hidden");
  } else if (this == projectTwo) {
    popupTitle.innerText = projectTwoInfo.title;
    popupDescription.innerText = projectTwoInfo.description;
    popupInfo.innerText = projectTwoInfo.info;
    visitLink.href = projectTwoInfo.link;
    popup.classList.remove("hidden");
  } else if (this == projectThree) {
    popupTitle.innerText = projectThreeInfo.title;
    popupDescription.innerText = projectThreeInfo.description;
    popupInfo.innerText = projectThreeInfo.info;
    visitLink.href = projectThreeInfo.link;
    popup.classList.remove("hidden");
  }
}

function closeProjectInfo(e) {
  const item = e.target;
  if (item.classList[0] === "close-button") {
    popup.classList.add("hidden");
  }
}
