// ------- D I V - S O U P ------- //
// Selectors
const soups = [
  { name: "Spinach", color: "#599e54" },
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
//------------------------------------------------------------------------//

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
  // startBtn.innerText = "";
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
      "You have to guess a number<br>between 1 and 10, try again.";
  }
  numberGuess.value = "";
}

// --------- C H A T --------- //

const chatInput = document.querySelector(".chat-input");
const chatBox = document.querySelector(".chat-box");
const submitButton = document.querySelector(".submit-chat-button");

submitButton.addEventListener("click", addChat);
const messages = [];

function addChat(event) {
  event.preventDefault();
  let myText = chatInput.value;
  const myChatText = document.createElement("p");
  myChatText.innerHTML = myText;
  chatBox.appendChild(myChatText);
  messages.push(myText);
  chatInput.value = "";

  console.log(messages);
  console.log(messages.length);

  let number = messages.length - 1;
  setTimeout(() => {
    const botChatText = document.createElement("p");
    botChatText.classList.add("bot-text");
    botChatText.innerHTML = replys[number];
    chatBox.appendChild(botChatText);
  }, 2000);
}

const replys = [
  "Hello there!",
  "..well I am good thank you! What about you?",
  "Ok!",
  "I like to dance!",
  "I bet you want to see my big collection of stones! Do you?",
  'Anyways, have a look <a href="http://www.thejewelleryeditor.com/media/images_thumbnails/filer_public_thumbnails/filer_public/76/bb/76bb38a2-c7d5-43ef-9952-9050c579a06f/gemstones-from-aorund-the-world.jpg__1536x0_q75_crop-scale_subsampling-2_upscale-false.jpg">here!</a>',
  "It was nice talking to you! Back to work. Byyyee :)",
];
//--------------------------------------------------//

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

//selector project/about
const projectOne = document.querySelector(".one");
const projectTwo = document.querySelector(".two");
const projectThree = document.querySelector(".three");
const aboutInfo = document.querySelector(".about-box");
const stars = document.querySelector(".stars");
const about = document.querySelector(".about");

//selectors inside popup window
const bannerText = document.querySelector(".banner-text");
const popup = document.querySelector(".popup");
const popupTitle = document.querySelector(".popup-title");
const popupDescription = document.querySelector(".popup-description");
const popupInfo = document.querySelector(".popup-info");
const visitLink = document.querySelector(".visit-link");
const closeButton = document.querySelector(".close-button");

const projects = Array.from(document.querySelectorAll(".pop"));

//eventlistener divs connecting arguments to projects
projects.forEach((project) =>
  project.addEventListener("click", getProjectInfo)
);
closeButton.addEventListener("click", closeProjectInfo);
about.addEventListener("click", getAboutInfo);

// functions
const phoneView = window.matchMedia("(max-width: 700px)");

function getProjectInfo() {
  if (this == projectOne) {
    bannerText.innerText = "Project";
    popupTitle.innerText = projectOneInfo.title;
    popupDescription.innerText = projectOneInfo.description;
    popupInfo.innerText = projectOneInfo.info;
    visitLink.href = projectOneInfo.link;
    popup.classList.remove("hidden");
    visitLink.classList.remove("hidden");
    if (phoneView.matches) {
      popup.style.top = "1400px";
      popup.style.left = "5px";
    } else {
      popup.style.top = "900px";
      popup.style.left = "700px";
    }
  } else if (this == projectTwo) {
    bannerText.innerText = "Project";
    popupTitle.innerText = projectTwoInfo.title;
    popupDescription.innerText = projectTwoInfo.description;
    popupInfo.innerText = projectTwoInfo.info;
    visitLink.href = projectTwoInfo.link;
    popup.classList.remove("hidden");
    visitLink.classList.remove("hidden");
    if (phoneView.matches) {
      popup.style.top = "2470px";
      popup.style.left = "5px";
    } else {
      popup.style.top = "1600px";
      popup.style.left = "200px";
    }
  } else if (this == projectThree) {
    bannerText.innerText = "Project";
    popupTitle.innerText = projectThreeInfo.title;
    popupDescription.innerText = projectThreeInfo.description;
    popupInfo.innerText = projectThreeInfo.info;
    visitLink.href = projectThreeInfo.link;
    popup.classList.remove("hidden");
    visitLink.classList.remove("hidden");
    if (phoneView.matches) {
      popup.style.top = "2900px";
      popup.style.left = "5px";
    } else {
      popup.style.top = "1600px";
      popup.style.left = "450px";
    }
  }
}

function closeProjectInfo(e) {
  const item = e.target;
  if (item.classList[0] === "close-button") {
    popup.classList.add("hidden");
  }
}

function getAboutInfo() {
  stars.classList.toggle("hidden");
  aboutInfo.classList.toggle("hidden");
}
