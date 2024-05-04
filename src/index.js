//---------- GLOBAL VARIABLES -------------------//
let currentQuestionIndex = 0
let selectedCategoryQuestions
let availableQuestions
const typingSpeed = 50 //typing ( milliseconds)

let questions
let speed = 50
let speechOn = true
let i = 0
let txt =
  ("Welcome.....",
  "I'm Turtee...",
  "your study buddy!",
  "Choose a category to begin....")

//----------------- INPUT DATA -----------------//

async function fetchQuestions() {
  const response = await fetch("../data/inputData.json")
  const questions = await response.json()

  return questions
}

function answerWriter() {
  if (i < txt.length) {
    document.getElementById("flashcard-container").innerHTML += txt.charAt(i)
    i++
    setTimeout(answerWriter, speed)
  }
}

//------------- START GAME ----------------//
async function startGame(category) {
  if (!availableQuestions) {
    availableQuestions = await fetchQuestions()
  }

  if (availableQuestions.hasOwnProperty(category)) {
    selectedCategoryQuestions = availableQuestions[category]

    document.getElementById("flashcard-container").style.display = "inline-flex"
    document.getElementById("navigation").style.display = "flex"
    // document.getElementById("content-container").style.display = "none";

    if (selectedCategoryQuestions.length > 0) {
      updateQuestionDisplay()
      hideButton(category)
    } else {
      console.error(`No questions available for the category: ${category}`)
    }
  } else {
    console.error(`Category not found: ${category}`)
  }
}

//------------- CHANGE BACKGROUND ---------------//

//------------ QUESTION AND ANSWERS -------------//
function updateQuestionDisplay() {
  const currentQuestion = selectedCategoryQuestions[currentQuestionIndex]
  const questionContainer = document.getElementById("flashcard-container")

  questionContainer.innerHTML = `
    <h2 id="h2-tag">${currentQuestion.question}</h2>
    <div id="p-tag">${currentQuestion.answer}</div>
    <div id="turtee-explain">
      <svg class="turtee-global">
        <image id="facing-turtee-img" xlink:href="./img/SVG/Asset_8_walking.svg" />
      </svg>
    </div>
  `

  // Check if the current question is the last one in the category
  if (currentQuestionIndex === selectedCategoryQuestions.length - 1) {
    // Disable the Next button since there are no more questions
    document.getElementById("next-button").disabled = true
    document.getElementById("next-button").style.cursor = "not-allowed"
  } else {
    // Enable the Next button if not the last question
    document.getElementById("next-button").disabled = false
    document.getElementById("next-button").style.cursor = "pointer"
  }
}

//----------- NAVIGATE Q & A --------------------//

function displayAnswer() {
  const answerContainer = document.getElementById("flashcard-container")
  document.getElementById("p-tag").style.display = "flex"
  document.getElementById("h2-tag").style.display = "none"
  const currentQuestion = selectedCategoryQuestions[currentQuestionIndex]
  answerContainer.innerHTML = `<p">${currentQuestion.answer}</>`
  document.getElementById("turtee-explain").style.display = "flex"
  document.getElementById("pre-footer-id").style.display = "flex"
  playSoundEffect()
}

function previousQuestion() {
  document.getElementById("turtee-explain").style.display = "none"
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--
    updateQuestionDisplay()
  } else {
    document.getElementById("prev-button").style.cursor = "not-allowed"
  }
}

function nextQuestion() {
  if (currentQuestionIndex < selectedCategoryQuestions.length - 1) {
    currentQuestionIndex++
    updateQuestionDisplay()
  } else {
    document.getElementById("next-button").style.cursor = "not-allowed"
  }
}
//----------- CHANGE NAVIGATION ------------------//

function updateNavigationButtons() {
  const prevButton = document.getElementById("prev-button")
  const answerButton = document.getElementById("answer-button")
  const nextButton = document.getElementById("next-button")

  // Disable/enable prevButton and set cursor accordingly
  const isFirstQuestion = currentQuestionIndex === 0
  prevButton.disabled = isFirstQuestion
  prevButton.style.cursor = isFirstQuestion ? "not-allowed" : "pointer"

  // Enable answerButton
  answerButton.disabled = false

  // Disable/enable nextButton and set cursor accordingly
  const isLastQuestion =
    currentQuestionIndex === categories[currentCategory].length - 1
  nextButton.disabled = isLastQuestion
  nextButton.style.cursor = isLastQuestion ? "not-allowed" : "pointer"
}

//-------------- TYPING FEATURE -----------------//

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("cat-select").innerHTML += txt.charAt(i)
    i++
    setTimeout(typeWriter, speed)
  }
}

//------------ RESTART GAME ------------------//
function resetGame() {
  currentQuestionIndex = 0
  document.getElementById("flashcard-container").style.display = "none"
  document.getElementById("navigation").style.display = "none"
  document.getElementById("cat-select").style.display = "flex" // Show category selection

  // Reset all categories to visible
  document.getElementById("html5").style.display = "flex"
  document.getElementById("css").style.display = "flex"
  document.getElementById("js").style.display = "flex"
  document.getElementById("turtee-8").style.display = "flex"

  document.getElementById("speech-bubble").style.display = "none"
  document.getElementById("category-button").style.visibility = "visible"
  document.getElementById("pre-footer-id").style.visibility = "visible"

  // Clear any existing content in the flashcard container
  document.getElementById("flashcard-container").innerHTML = ""
  introduceGame() // Restart the game introduction
}

function playSoundEffect() {
  let soundEffect = document.getElementById("sound-start")
  soundEffect.play()
}

function hideButton(clickedButtonId) {
  const elements = [
    "welcome",
    "pre-footer-id",
    "dragonHackerButton",
    "turtee-8",
    "speech-bubble",
    "logo-svg",
    "copy-right",
  ]

  const elementsToKeep = {
    html: ["css", "js"],
    css: ["html5", "js"],
    javascript: ["html5", "css"],
  }

  elements.forEach((id) => {
    const element = document.getElementById(id)
    if (
      element &&
      (!elementsToKeep[clickedButtonId] ||
        !elementsToKeep[clickedButtonId].includes(id))
    ) {
      element.style.display = "none"
    }
  })

  if (!elementsToKeep.hasOwnProperty(clickedButtonId)) {
    console.log(clickedButtonId)
  }
  if (clickedButtonId === "html") {
    document.getElementById("css").style.display = "none"
    document.getElementById("js").style.display = "none"
  } else if (clickedButtonId === "css") {
    document.getElementById("html5").style.display = "none"
    document.getElementById("js").style.display = "none"
  } else if (clickedButtonId === "javascript") {
    document.getElementById("html5").style.display = "none"
    document.getElementById("css").style.display = "none"
  } else {
    console.log(clickedButtonId)
  }
}

// ---------------- LOGIC ----------------------//

function introduceGame() {
  setTimeout(typeWriter(), speed)
  document.getElementById("speech-bubble").style.display = "flex"
}

function showStartMenu() {
  const elements = [
    { id: "welcome", display: "none" },
    { id: "start-button", display: "none" },
    { id: "pre-footer-id", display: "flex" },
    { id: "category-button", display: "flex" },
    { id: "dragonHackerButton", display: "none" },
    { id: "turtee-8", display: "flex" },
    { id: "cat-select", display: "flex" },
  ]

  elements.forEach(({ id, display }) => {
    const element = document.getElementById(id)
    if (element) {
      element.style.display = display
    }
  })

  introduceGame()
  // playSoundEffect();
}
function runCode() {
  // Get the code from the textarea
  var code = document.getElementById("code-box").value

  // Get the iframe
  var iframe = document.getElementById("resultFrame")

  // Write the code into the iframe document
  var iframeDoc = iframe.contentWindow.document
  iframeDoc.open()
  iframeDoc.write(code)
  iframeDoc.close()
}
//------------ EXPERIMENTAL FEATURES -------------//
// function resetGame() {
//   const elementsToHide = [
//     "logo-svg",
//     "copy-right",
//     "flashcard-container",
//     "navigation",
//     "reset",
//   ];

//   const elementsToShow = [
//     "speech-bubble",
//     "category-button",
//     "pre-footer-id",
//     "css",
//     "js",
//     "html5",
//     "turtee-8",
//     "content-container",
//   ];

//   elementsToHide.forEach((id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.style.display = "none";
//     }
//   });

//   elementsToShow.forEach((id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.style.display = "flex";
//     }
//   });

//   if (availableQuestions === undefined) {
//     const resetButton = document.getElementById("reset");
//     if (resetButton) {
//       resetButton.style.cursor = "not-allowed";
//     }
//   } else {
//     const resetButton = document.getElementById("reset");
//     if (resetButton) {
//       resetButton.style.cursor = "pointer";
//     }
//     const elementsToMakeVisible = [
//       "welcome",
//       "speech-bubble",
//       "turtee-explain",
//     ];
//     elementsToMakeVisible.forEach((id) => {
//       const element = document.getElementById(id);
//       if (element) {
//         element.style.visibility = "visible";
//       }
//     });
//     document.getElementById("dragonHackerButton").style.display = "none";
//   }
// }
