/*** INPUT DATA FOR LANGUAGE CONCEPTS  ***/
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

export default categories;
/**
 * HTML CONTENT
 * HTML (Hypertext Markup Language):

HTML is the standard markup language for creating web pages. It structures content using a system of elements and tags.
Element:

An element is a fundamental component in HTML, represented by a start tag, content, and an end tag. Examples include <p> for paragraphs and <img> for images.
Tag:

Tags are used to define elements in HTML. They consist of an opening tag, content, and a closing tag. For example, <h1> is the opening tag for a top-level heading.
Attribute:

Attributes provide additional information about HTML elements and are always included in the opening tag. For instance, <a href="https://example.com"> uses the href attribute.
DOCTYPE Declaration:

The DOCTYPE declaration specifies the HTML version being used by the document and helps browsers to render the page correctly.
Head:

The <head> section of an HTML document contains metadata, including the title, links to stylesheets, and other information that doesn't appear directly on the page.
Body:

The <body> element contains the content of the HTML document, such as text, images, links, and other elements that are displayed on the webpage.
Heading Tags (h1 to h6):

These tags (<h1> to <h6>) define headings of different levels, where <h1> is the highest level and <h6> is the lowest.
Paragraph Tag (p):

The <p> tag is used to define paragraphs in HTML, separating blocks of text.
Anchor Tag (a):

The <a> tag creates hyperlinks, allowing users to navigate to other web pages or resources.
Image Tag (img):

The <img> tag embeds images into a webpage, with the src attribute specifying the image source.
List Tags (ul, ol, li):

<ul> creates an unordered list, <ol> an ordered list, and <li> represents list items within these lists.
Hyperlink (href):

The href attribute in the <a> tag specifies the destination URL for hyperlinks.
HTML Forms:

HTML forms (<form>) are used to collect user input, such as text, checkboxes, and radio buttons.
Input Tags:

<input> elements are used within forms to create fields for various types of user input, like text, password, checkbox, etc.
Button Tag (button):

The <button> tag creates clickable buttons, often used within forms.
Div Tag (div):

The <div> tag is a container used to group and structure content, often styled with CSS.
Span Tag (span):

The <span> tag is an inline container used for applying styles or scripting to a specific portion of text.
HTML Semantics:

HTML5 introduced semantic elements like <header>, <nav>, <section>, <article>, <aside>, and <footer> to provide more meaning to the structure of a webpage.
HTML Comments:

Comments (<!-- comment -->) are used to include remarks within the HTML code that are not displayed on the webpage but provide information for developers or editors.

 */

// CSS //
/** CSS CONTENT
 *
 * Selectors:
Description: Selectors are patterns that are used to select and style HTML elements. They define the target elements for applying styles.

Properties:
Description: CSS properties define the visual style of selected elements. They include attributes like color, font-size, margin, padding, etc.

Values:
Description: Values are assigned to CSS properties and determine the specific style characteristics. For example, color: red; where "red" is the value.

Box Model:
Description: The box model consists of content, padding, border, and margin. It governs how space is distributed around and within an element.

Layout:
Description: Layout in CSS refers to the arrangement and positioning of elements on a webpage. Techniques include Flexbox and Grid.

Flexbox:
Description: Flexbox is a layout model that allows for the creation of flexible and efficient layouts. It's particularly useful for one-dimensional layouts.

Grid:
Description: CSS Grid is a two-dimensional layout system, allowing for the creation of complex and responsive layouts with rows and columns.

Positioning:
Description: Positioning determines the placement of elements on a page. Common values include static, relative, absolute, and fixed.

Responsive Design:
Description: Responsive design ensures that a webpage adapts to different screen sizes and devices, providing an optimal user experience.

Media Queries:
Description: Media queries are used to apply different styles for different devices or screen sizes, making a website responsive.


Transitions:
Description: CSS transitions enable smooth animations between property changes, enhancing the user experience.

Transforms:
Description: CSS transforms allow you to modify the appearance and position of elements in two-dimensional or three-dimensional space.

Animations:
Description: CSS animations provide a way to create more complex and dynamic animations on a webpage.

Pseudo-classes:
Description: Pseudo-classes are used to define styles for specific states or elements, such as :hover or :nth-child.

Pseudo-elements:
Description: Pseudo-elements allow the styling of specific parts of an element, like ::before or ::after.

Selectors Combinators:
Description: Combinators like descendant, child, adjacent sibling, and general sibling selectors enable more precise element targeting.

Units (px, em, rem, %):
Description: CSS units define the measurement used for various properties, like pixels (px), em, rem, and percentages.

Colors:
Description: Colors in CSS can be specified by name, hexadecimal code, RGB, or HSL values, influencing the visual appearance of elements.

Font Properties:
Description: Font properties, such as font-family, font-size, and font-weight, control the appearance of text on a webpage.

CSS Variables:
Description: CSS variables allow for the creation of reusable values in stylesheets, improving maintainability and flexibility.

Understanding these CSS concepts is crucial for creating well-designed, responsive, and visually appealing webpages.
 *
 */

// JAVASCRIPT CONTENT
/**
 *
 *
 */
