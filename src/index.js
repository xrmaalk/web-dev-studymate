// import categories from "../data/inputData";

let currentCategory = "";
let currentQuestionIndex = 0;

// Text to be typed
let textToType = "Test";

// Speed of typing (in milliseconds)
const typingSpeed = 50;

// Element to display the typing effect
const typingDiv = document.getElementById("typing-text");

const categories = {
  html: [
    {
      question: "What is HTML",
      answer:
        "Hypertext Markup Language <br>( HTML ) <br>is the standard markup language for creating web pages.<br> It structures content using a system of elements and tags.",
    },
    {
      question: "What is an Element",
      answer:
        "An element is a fundamental component in HTML, represented by a start tag, content, and an end tag.<br> Ex. &lt;p&gt; for paragraphs and &lt;img&gt;  for images.",
    },
    {
      question: "What is a Tag",
      answer:
        "Used to define elements in HTML, <br><b>tags</b>  consist of an opening &lt;tag&gt;, content, and a closing &lt;/tag&gt;.<br><br> <b>Ex.</b> &lt;h1&gt; is the opening tag for a top-level heading.",
    },
    {
      question: "What is an Attribute",
      answer:
        'Included in the opening tag, <br><b>Attribbutes</b> provide additional information about HTML elements.<br><br><a href=https://qarli.ca> <b>Ex.</b> &lt;a <b>href=</b>"https://qarli.ca"&gt;</a> <br><br><b>uses the href attribute.</b>',
    },
    {
      question: "What is a DOCTYPE Declaration",
      answer:
        "The DOCTYPE declaration specifies the HTML version being used by the document and helps browsers to render the page correctly. <br> Ex. &lt;DOCTYPE html&gt;",
    },
  ],
  css: [
    {
      question: "What is CSS",
      answer:
        "Cascading Style Sheet <b>( CSS )</b> <br>is used to define styles for your web pages.<br><br>This includes the design, layout and variations in display for different devices and screen sizes.",
    },
    {
      question: "What is a Selector",
      answer:
        "Selectors are patterns that are used to select and style HTML elements.<br> <br>They define the<b> target elements </b>for applying styles. <br><br><b>Ex.</b> .class or #id",
    },
    {
      question: "What are Properties in css",
      answer:
        "CSS properties define the visual style of selected elements.<br><br> They include attributes like color, font-size, margin, padding, etc.",
    },
  ],
  javascript: [
    {
      question: "What is JavaScript",
      answer: "JavaScript is an highlevel programming language.",
    },
    {
      question: "What is a variable",
      answer:
        "Variables are containers for storing data values. <br><br>Ex. let x = 7",
    },
    {
      question: "What are Data Types",
      answer:
        "<b>JavaScript has several data types:</b> <br> Number, String, Boolean, Object, and Array. <br><br> <b>Ex.</b> let name = 'Carla';<br> let age = 25;<br> let isStudent = true;",
    },
  ],
};

function startGame() {
  const categoryRadios = document.getElementsByName("action");
  let selectedCategory;

  for (const radio of categoryRadios) {
    if (radio.checked) {
      selectedCategory = radio.value;
      break;
    }
  }

  if (selectedCategory) {
    currentCategory = selectedCategory;
    currentQuestionIndex = 0;
    // changeBackgroundColor();
    displayCurrentQuestion();
  } else {
    alert("Please select a category before starting the game.");
  }
}

function changeBackgroundColor() {
  const body = document.body;
  const colors = ["#FFD700", "#90EE90", "#87CEEB"]; // Add more colors as needed
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  body.style.backgroundColor = randomColor;
}

function displayCurrentQuestion() {
  const flashcardContainer = document.getElementById("flashcard-container");
  const selectedCategory = categories[currentCategory];
  const currentQuestion = selectedCategory[currentQuestionIndex].question;

  flashcardContainer.innerHTML = `<div class="flashcard">${currentQuestion}</div>`;
  updateNavigationButtons();
}

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

function typeText(index) {
  console.log("we are here.");
  if (index < textToType.length) {
    typingDiv.innerHTML += textToType.charAt(index);
    index++;
    setTimeout(function () {
      typeText(index);
    }, typingSpeed);
  }
}

function displayAnswer() {
  const flashcardContainer = document.getElementById("flashcard-container");
  const selectedCategory = categories[currentCategory];
  const currentAnswer = selectedCategory[currentQuestionIndex].answer;

  flashcardContainer.innerHTML = `<div class="flashcard">${currentAnswer}</div>`;
  typeText(0);
  updateNavigationButtons();
}

function goToPreviousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    displayCurrentQuestion();
  }
}

function goToNextQuestion() {
  if (currentQuestionIndex < categories[currentCategory].length - 1) {
    currentQuestionIndex++;
    displayCurrentQuestion();
  }
}

/* JavaScript Version 0
let userSelectedLanguage = "";
const optionHTML = document.getElementById("HTML");
const optionCSS = document.getElementById("CSS");
const optionJavaScript = document.getElementById("JavaScript");
const welcomeScreen = document.getElementById("WelcomeTitle");

const flashcard = document.getElementById("flashcard");
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const showAnswerButton = document.getElementById("show-answer");
const nextCardButton = document.getElementById("next-card");

const flashcards = [
  {
    question: "What is HTML",
    answer:
      "HyperText Markup Language ( HTML ) is the standard markup language for creating web pages",
  },
  {
    question: "What is a TAG?",
    answer:
      "HTML elements used to define the structure and content of a web page.",
  },
  {
    question: "What is an Attribute?",
    answer:
      "Additional information provided within the opening tag of an HTML element. ",
  },
];

let currentFlashcardIndex = 0;

function displayFlashcard(index) {
  const currentFlashcard = flashcards[index];
  questionElement.textContent = currentFlashcard.question;
  answerElement.textContent = currentFlashcard.answer;
  answerElement.style.display = "none";
}

function showAnswer() {
  answerElement.style.display = "block";
}

function nextCard() {
  currentFlashcardIndex = (currentFlashcardIndex + 1) % flashcards.length;
  displayFlashcard(currentFlashcardIndex);
}

showAnswerButton.addEventListener("click", showAnswer);
nextCardButton.addEventListener("click", nextCard);

// Initial display
displayFlashcard(currentFlashcardIndex);
 */
