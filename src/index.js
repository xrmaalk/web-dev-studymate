//---------- GLOBAL VARIABLES -------------------//
let currentCategory = "";
let currentQuestionIndex = 0;
let textToType = "Test"; // Text to be typed

const typingSpeed = 50; //typing ( milliseconds)
const typingDiv = document.getElementById("typing-text"); // Div for the typing effect

//----------------- INPUT DATA -----------------//
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
    {
      question: "What is the Head",
      answer:
        "The <b>&lt;head&gt;</b> section of an HTML document contains metadata, including the title, links to stylesheets, and other information that doesn't appear directly on the page.",
    },
    {
      question: "What is the Body",
      answer:
        "The <b>&lt;body&gt;</b> element contains the content of the HTML document, such as text, images, links, and other elements that are displayed on the webpage.",
    },
    {
      question: "What are Heading Tags",
      answer:
        "Heading tags ( <b>&lt;h1&gt; to &lt;h6&gt;</b> ) define headings of different levels, where &lt;h1&gt; is the highest level and &lt;h6&gt is the lowest.",
    },
    {
      question: "What is the Paragraph tag ",
      answer:
        "Separating blocks of text, the <b>&lt;p&gt;</b> tag is used to define paragraphs in HTML.",
    },
    {
      question: "What is the Anchor tag",
      answer:
        "The <b>&lt;a&gt;</b> tag creates hyperlinks, allowing users to navigate to other web pages or resources.",
    },
    {
      question: "What is the Image Tag",
      answer:
        "The <b>&lt;img&gt;</b> tag embeds images into a webpage, while the <b>src</b> attribute specifying the image source.",
    },
    {
      question: "What are List Tags (ul, ol, li)",
      answer:
        "<b>&lt;ul&gt;</b> tag creates an unordered list,<br/><b>&lt;ol&gt;</b> tag creates an ordered list, <br/> and <b>&lt;li&gt;</b> tag represents list items within these lists.",
    },
    {
      question: "What is an Hyperlink ( href )",
      answer:
        "The <b>href</b> attribute in the <b>&lt;a&gt;</b> tag specifies the destination URL for hyperlinks.",
    },
    {
      question: "What is a URL",
      answer:
        "<b>Unified Resource Locator </b> ( url ) is a human readable web address.",
    },
    {
      question: "What are Forms",
      answer:
        "HTML forms ( <b>&lt;form&gt;</b> tag ) are used to collect user input.<br/><br/> <b>Ex.</b><br/>&lt;form&gt;<br/> input filed, textbox, checkboxes, radio buttons, submit <br/> &lt;/form&gt;",
    },
    {
      question: "What is an Input tag used for",
      answer:
        "<b>&lt;input&gt;</b> elements are used within forms to create fields for various types of user input such as text, password, checkbox, etc.",
    },
    {
      question: "This tag creates clickable _______, often used within forms.",
      answer: "What is a <b>&lt;button&gt;</b> tag",
    },
    {
      question:
        "This tag is a container used to group and structure content in HTML.",
      answer: "What is a <b>&lt;div&gt;</b> tag",
    },
    {
      question:
        "This tag is an inline container used for applying styles or scripting to a specific portion of text.",
      answer: "What is the<b> &lt;span&gt; </b> tag. ",
    },
    {
      question:
        "To provide more meaning to the structure of a webpage, semantic elements such as &lt;header&gt;, &lt;nav&gt, &lt;section&gt, &lt;article&gt, &lt;aside&gt;, and &lt;footer&gt were introduce in which HTML version ?",
      answer: "What is <b>HTML5</b>",
    },
    {
      question:
        "_______ are used to include remarks within HTML code that are visible only to developers and editors.",
      answer:
        "<br/>What are comments.<br/><br/><b>Ex.</b><br/><b>( &lt;!-- multiline comments --&gt; )</b> <br/><b>( // Single line comment )</b>",
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
    {
      question:
        "_______ are assigned to CSS properties to determine the specific style <b>characteristics</b>.",
      answer:
        "What are <b>values</b>. <br/><br/><b>Ex.</b><br/> color: red; width: 100%; height: 100vh;<br/><br/>Where 'red', '100%' and '100vh' are values.",
    },
    {
      question:
        "The ______ model consists of content, padding, border, and margin. The _______ governs how space is distributed around and within an element.",
      answer:
        "What is the Box Model.<br/><br/><b>Ex.</b><br/>block boxes <br/>inline boxes",
    },
    {
      question:
        "_______ in CSS refers to the arrangement and positioning of elements on a webpage. ",
      answer:
        "<br/>What is the  <b>Layout</b>.<br/><br/><b>Ex.</b><br/><br/> Techniques include <b>Flexbox</b> and<b> Grid</b>  ",
    },
    {
      question:
        "Particularly useful for one dimensional layouts, ________ is a layout model that allows for the creation of flexible and efficient layouts. ",
      answer: "What is <b>flexbox</b> ",
    },
    {
      question:
        "CSS _______ is a two dimensional layout model. It allows for the creation of complex and responsive layouts with rows and columns. ",
      answer: " What is the <b>Grid</b> model. ",
    },
    {
      question:
        "This style element determines the placement of elements on a web page. ",
      answer:
        "What is <b>Positioning</b><br/><br/><b>Ex.</b><br/>Common values include static, relative, absolute and fixed. ",
    },
    {
      question: " ",
      answer: " ",
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
    {
      question: "",
      answer: "",
    },
    {
      question: "",
      answer: "",
    },
    {
      question: "",
      answer: "",
    },
  ],
};

//-------------- START GAME --------------------//
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

//------------- CHANGE BACKGROUND ---------------//
function changeBackgroundColor() {
  const body = document.body;
  const colors = ["#FFD700", "#90EE90", "#87CEEB"]; // Add more colors as needed
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  body.style.backgroundColor = randomColor;
}

//------------ QUESTION AND ANSWERS -------------//
function displayCurrentQuestion() {
  const flashcardContainer = document.getElementById("flashcard-container");
  const selectedCategory = categories[currentCategory];
  const currentQuestion = selectedCategory[currentQuestionIndex].question;

  flashcardContainer.innerHTML = `<div class="flashcard">${currentQuestion}</div>`;
  updateNavigationButtons();
}

function displayAnswer() {
  const flashcardContainer = document.getElementById("flashcard-container");
  const selectedCategory = categories[currentCategory];
  const currentAnswer = selectedCategory[currentQuestionIndex].answer;

  flashcardContainer.innerHTML = `<div class="flashcard">${currentAnswer}</div>`;
  typeText(0);
  updateNavigationButtons();
}

//----------- NAVIGATE Q & A --------------------//
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

//------------ EXPERIMENTAL FEATURES -------------//
/** Tester for Animatejs
 * 
function fitElementToParent(el, padding, exception) {
  var timeout = null;
  function resize() {
    if (timeout) clearTimeout(timeout);
    anime.set(el, { scale: 1 });
    if (exception) anime.set(exception, { scale: 1 });
    var pad = padding || 0;
    var parentEl = el.parentNode;
    var elOffsetWidth = el.offsetWidth - pad;
    var parentOffsetWidth = parentEl.offsetWidth;
    var ratio = parentOffsetWidth / elOffsetWidth;
    var invertedRatio = elOffsetWidth / parentOffsetWidth;
    timeout = setTimeout(function () {
      anime.set(el, { scale: ratio });
      if (exception) anime.set(exception, { scale: invertedRatio });
    }, 10);
  }
  resize();
  window.addEventListener("resize", resize);
}

// main logo animation

var logoAnimation = (function () {
  var logoAnimationEl = document.querySelector(".logo-animation");
  var bouncePath = anime.path(".bounce path");

  fitElementToParent(logoAnimationEl, 0, ".bounce svg");

  anime.set([".letter-a", ".letter-n", ".letter-i"], { translateX: 70 });
  anime.set(".letter-e", { translateX: -70 });
  anime.set(".dot", { translateX: 630, translateY: -200 });

  var logoAnimationTL = anime
    .timeline({
      autoplay: false,
      easing: "easeOutSine",
    })
    .add(
      {
        targets: ".letter-i .line",
        duration: 0,
        begin: function (a) {
          a.animatables[0].target.removeAttribute("stroke-dasharray");
        },
      },
      0
    )
    .add(
      {
        targets: ".bounced",
        transformOrigin: ["50% 100% 0px", "50% 100% 0px"],
        translateY: [
          {
            value: [150, -160],
            duration: 190,
            endDelay: 20,
            easing: "cubicBezier(0.225, 1, 0.915, 0.980)",
          },
          { value: 4, duration: 120, easing: "easeInQuad" },
          { value: 0, duration: 120, easing: "easeOutQuad" },
        ],
        scaleX: [
          { value: [0.25, 0.85], duration: 190, easing: "easeOutQuad" },
          { value: 1.08, duration: 120, delay: 85, easing: "easeInOutSine" },
          { value: 1, duration: 260, delay: 25, easing: "easeOutQuad" },
        ],
        scaleY: [
          { value: [0.3, 0.8], duration: 120, easing: "easeOutSine" },
          { value: 0.35, duration: 120, delay: 180, easing: "easeInOutSine" },
          { value: 0.57, duration: 180, delay: 25, easing: "easeOutQuad" },
          { value: 0.5, duration: 190, delay: 15, easing: "easeOutQuad" },
        ],
        delay: anime.stagger(80),
      },
      1000
    )
    .add(
      {
        targets: ".dot",
        opacity: { value: 1, duration: 100 },
        translateY: 250,
        scaleY: [4, 0.7],
        scaleX: { value: 1.3, delay: 100, duration: 200 },
        duration: 280,
        easing: "cubicBezier(0.350, 0.560, 0.305, 1)",
      },
      "-=290"
    )
    .add(
      {
        targets: ".letter-m .line",
        easing: "easeOutElastic(1, .8)",
        duration: 600,
        d: function (el) {
          return el.dataset.d2;
        },
        begin: function (a) {
          a.animatables[0].target.removeAttribute("stroke-dasharray");
        },
      },
      "-=140"
    )
    .add(
      {
        targets: [".letter-a", ".letter-n", ".letter-i", ".letter-e"],
        translateX: 0,
        easing: "easeOutElastic(1, .6)",
        duration: 800,
        delay: anime.stagger(40, { from: 2.5 }),
        change: function (a) {
          a.animatables[2].target.removeAttribute("stroke-dasharray");
        },
      },
      "-=600"
    )
    .add(
      {
        targets: ".letter-m .line",
        d: function (el) {
          return el.dataset.d3;
        },
        easing: "spring(.2, 200, 3, 60)",
      },
      "-=680"
    )
    .add(
      {
        targets: ".dot",
        translateX: bouncePath("x"),
        translateY: bouncePath("y"),
        rotate: { value: "1turn", duration: 790 },
        scaleX: { value: 1, duration: 50, easing: "easeOutSine" },
        scaleY: [
          { value: [1, 1.5], duration: 50, easing: "easeInSine" },
          { value: 1, duration: 50, easing: "easeOutExpo" },
        ],
        easing: "cubicBezier(0, .74, 1, .255)",
        duration: 800,
      },
      "-=1273"
    )
    .add(
      {
        targets: ".dot",
        scale: 1,
        rotate: "1turn",
        scaleY: { value: 0.5, delay: 0, duration: 150, delay: 230 },
        translateX: 430,
        translateY: [
          { value: 244, duration: 100 },
          { value: 204, duration: 200, delay: 130 },
          { value: 224, duration: 225, easing: "easeOutQuad", delay: 25 },
        ],
        duration: 200,
        easing: "easeOutSine",
      },
      "-=474"
    )
    .add(
      {
        targets: ".letter-i .line",
        transformOrigin: ["50% 100% 0", "50% 100% 0"],
        d: function (el) {
          return el.dataset.d2;
        },
        easing: "cubicBezier(0.400, 0.530, 0.070, 1)",
        duration: 80,
      },
      "-=670"
    )
    .add(
      {
        targets: ".logo-letter",
        translateY: [
          { value: 40, duration: 150, easing: "easeOutQuart" },
          { value: 0, duration: 800, easing: "easeOutElastic(1, .5)" },
        ],
        strokeDashoffset: [anime.setDashoffset, 0],
        delay: anime.stagger(60, { from: "center" }),
      },
      "-=670"
    )
    .add(
      {
        targets: ".bounced",
        scaleY: [
          { value: 0.4, duration: 150, easing: "easeOutQuart" },
          { value: 0.5, duration: 800, easing: "easeOutElastic(1, .5)" },
        ],
        delay: anime.stagger(60, { from: "center" }),
      },
      "-=1090"
    )
    .add(
      {
        targets: ".logo-text",
        translateY: [
          { value: 20, easing: "easeOutQuad", duration: 100 },
          { value: 0, easing: "easeOutElastic(1, .9)", duration: 450 },
        ],
        opacity: { value: [0.001, 1], duration: 50 },
        duration: 500,
      },
      "-=970"
    )
    .add(
      {
        targets: ".main-logo-circle",
        opacity: { value: [0.001, 1], duration: 1500 },
        backgroundImage: [
          "linear-gradient(-135deg, #FFFFFF 50%, #F6F4F2 75%, #F6F4F2 100%, #DDDAD7 100%)",
          "linear-gradient(-135deg, #FFFFFF 5%, #F6F4F2 40%, #F6F4F2 70%, #DDDAD7 100%)",
        ],
        translateY: {
          value: ["60px", 0],
          easing: "cubicBezier(0.175, 0.865, 0.245, 0.840)",
        },
        duration: 2000,
        easing: "easeInOutQuad",
      },
      "-=970"
    )
    .add(
      {
        targets: [".description-title", ".description-paragraph"],
        opacity: {
          value: [0.001, 1],
          easing: "cubicBezier(0.175, 0.865, 0.245, 0.840)",
        },
        translateY: {
          value: ["80px", 0],
          easing: "cubicBezier(0.175, 0.865, 0.245, 0.840)",
        },
        duration: 3500,
        delay: anime.stagger(75),
      },
      "-=1300"
    );

  return logoAnimationTL;
})();

logoAnimation.play(); 
 */
