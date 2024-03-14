//---------- GLOBAL VARIABLES -------------------//
let currentQuestionIndex = 0;
let selectedCategoryQuestions;
let availableQuestions;
const typingSpeed = 50; //typing ( milliseconds)

let questions;
let i = 0;
let txt = "Select a category to begin lesson.";

let speed = 50;

//----------------- INPUT DATA -----------------//

async function fetchQuestions() {
  const response = await fetch("../data/inputData.json");
  const questions = await response.json();
  // s
  return questions;
}

function answerWriter() {
  if (i < txt.length) {
    document.getElementById("flashcard-container").innerHTML += txt.charAt(i);
    i++;
    setTimeout(answerWriter, speed);
  }
}

//------------- START GAME ----------------//
async function startGame(category) {
  if (!availableQuestions) {
    availableQuestions = await fetchQuestions();
  }

  if (availableQuestions.hasOwnProperty(category)) {
    selectedCategoryQuestions = availableQuestions[category];

    document.getElementById("flashcard-container").style.display =
      "inline-flex";
    document.getElementById("navigation").style.display = "flex";

    if (selectedCategoryQuestions.length > 0) {
      updateQuestionDisplay();
      hideButton(category);
    } else {
      console.error(`No questions available for the category: ${category}`);
    }
  } else {
    console.error(`Category not found: ${category}`);
  }
}

//------------- CHANGE BACKGROUND ---------------//

//------------ QUESTION AND ANSWERS -------------//
function updateQuestionDisplay() {
  const currentQuestion = selectedCategoryQuestions[currentQuestionIndex];

  currentQuestion.answer;

  const questionContainer = document.getElementById("flashcard-container");
  questionContainer.innerHTML = `
    <h2 id="h2-tag">${currentQuestion.question}</h2>
    <div id="p-tag">${currentQuestion.answer}</div>
  `;
}

//----------- NAVIGATE Q & A --------------------//

function displayAnswer() {
  const answerContainer = document.getElementById("flashcard-container");
  document.getElementById("p-tag").style.display = "flex";
  document.getElementById("h2-tag").style.display = "none";
  const currentQuestion = selectedCategoryQuestions[currentQuestionIndex];
  answerContainer.innerHTML = `<p">${currentQuestion.answer}</>`;
  document.getElementById("turtee-explain").style.display = "flex";
}

function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    updateQuestionDisplay();
  } else {
    document.getElementById("prev-button").style.cursor = "not-allowed";
  }
}

function nextQuestion() {
  if (currentQuestionIndex < selectedCategoryQuestions.length - 1) {
    currentQuestionIndex++;
    updateQuestionDisplay();
  } else {
    document.getElementById("next-button").style.cursor = "not-allowed";
  }
}
//----------- CHANGE NAVIGATION ------------------//
function updateNavigationButtons() {
  const prevButton = document.getElementById("prev-button");
  const answerButton = document.getElementById("answer-button");
  const nextButton = document.getElementById("next-button");

  prevButton.disabled = currentQuestionIndex === 0;
  if (prevButton.disabled === true) {
    prevButton.style.cursor = "not-allowed";
  } else {
    prevButton.style.cursor = "pointer";
  }
  answerButton.disabled = false;
  nextButton.disabled =
    currentQuestionIndex === categories[currentCategory].length - 1;
  if (nextButton.disabled === true) {
    nextButton.style.cursor = "not-allowed";
  } else {
    nextButton.style.cursor = "pointer";
  }
}

//-------------- TYPING FEATURE -----------------//
function answerWriter() {
  if (i < txt.length) {
    document.getElementById("flashcard-container").innerHTML += txt.charAt(i);
    i++;
    setTimeout(answerWriter, speed);
  }
}

function resetGame() {
  document.getElementById("logo-svg").style.display = "none";
  document.getElementById("copy-right").style.display = "none";
  document.getElementById("speech-bubble").style.display = "flex";
  if (availableQuestions === undefined) {
    document.getElementById("reset").style.cursor = "not-allowed";
  } else {
    document.getElementById("reset").style.cursor = "pointer";
    document.getElementById("welcome").style.display = "hidden";
    document.getElementById("category-button").style.visibility = "visible";
    document.getElementById("pre-footer-id").style.visibility = "visible";
    document.getElementById("css").style.display = "flex";
    document.getElementById("js").style.display = "flex";
    document.getElementById("html5").style.display = "flex";
    document.getElementById("turtee-8").style.display = "flex";
    document.getElementById("turtee-explain").style.display = "none";
    document.getElementById("flashcard-container").style.display = "none";
    document.getElementById("navigation").style.display = "none";
    document.getElementById("dragonHackerButton").style.display = "none";
    document.getSelection("speech-bubble").style.display = "flex";
  }
}

function hideButton(clickedButtonId) {
  document.getElementById("welcome").style.display = "none";
  document.getElementById("pre-footer-id").style.visibility = "hidden";
  document.getElementById("dragonHackerButton").style.display = "none";
  document.getElementById("turtee-8").style.display = "none";
  document.getElementById("speech-bubble").style.display = "none";
  document.getElementById("logo-svg").style.display = "none";
  document.getElementById("copy-right").style.display = "none";

  if (clickedButtonId === "html") {
    document.getElementById("css").style.display = "none";
    document.getElementById("js").style.display = "none";
  } else if (clickedButtonId === "css") {
    document.getElementById("html5").style.display = "none";
    document.getElementById("js").style.display = "none";
  } else if (clickedButtonId === "javascript") {
    document.getElementById("html5").style.display = "none";
    document.getElementById("css").style.display = "none";
  } else {
    console.log(clickedButtonId);
  }
}

function showStartMenu() {
  document.getElementById("welcome").style.display = "none";
  document.getElementById("start-button").style.display = "none";
  document.getElementById("pre-footer-id").style.display = "flex";
  document.getElementById("category-button").style.display = "flex";
  document.getElementById("dragonHackerButton").style.display = "none";
  document.getElementById("turtee-8").style.display = "flex";
  document.getElementById("cat-select").style.display = "flex";
  introduceGame();
}

function introduceGame() {
  setTimeout(typeWriter(), speed);
  document.getElementById("speech-bubble").style.display = "flex";
}

//------------ EXPERIMENTAL FEATURES -------------//

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("cat-select").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
