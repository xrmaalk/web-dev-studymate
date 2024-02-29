/*JavaScript Version 1 */
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
        "Tags are used to define elements in HTML. They consist of an opening tag, content, and a closing tag.<br> Ex. &lt;h1&gt; is the opening tag for a top-level heading.",
    },
    {
      question: "What is an Attribute",
      answer:
        'Attributes provide additional information about HTML elements and are always included in the opening tag. <br> Ex. &lt;a href="https://qarli.ca"&gt; uses the href attribute.',
    },
    {
      question: "What is a DOCTYPE Declaration",
      answer:
        "The DOCTYPE declaration specifies the HTML version being used by the document and helps browsers to render the page correctly. <br> Ex. &lt;DOCTYPE html&gt;",
    },
  ],
  css: [
    { question: "What is CSS", answer: "Answer 1 CSS" },
    {
      question: "What is a Selector",
      answer:
        "Selectors are patterns that are used to select and style HTML elements. <br>They define the target elements for applying styles. <br>Ex. .class or #id",
    },
    {
      question: "What are Properties in css",
      answer:
        "CSS properties define the visual style of selected elements.<br> They include attributes like color, font-size, margin, padding, etc.",
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
        "Variables are containers for storing data values. <br>Ex. let x = 7",
    },
    {
      question: "What are Data Types",
      answer:
        "JavaScript has several data types, including Number, String, Boolean, Object, and Array. <br> Ex. let name = 'Carla'; let age = 25; let isStudent = true;",
    },
  ],
};

let currentCategory = "";
let currentQuestionIndex = 0;

/*
function startGame() {
  const categoryDropdown = document.getElementById("category-selecton");
  currentCategory = categoryDropdown.value;
  currentQuestionIndex = 0;
  changeBackgroundColor();
  displayCurrentQuestion();
}
*/
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
    changeBackgroundColor();
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
  answerButton.disabled = false; // Enable the show answer button
  nextButton.disabled =
    currentQuestionIndex === categories[currentCategory].length - 1;
}

function displayAnswer() {
  const flashcardContainer = document.getElementById("flashcard-container");
  const selectedCategory = categories[currentCategory];
  const currentAnswer = selectedCategory[currentQuestionIndex].answer;

  flashcardContainer.innerHTML = `<div class="flashcard">${currentAnswer}</div>`;
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
