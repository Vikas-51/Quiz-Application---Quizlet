// Define the quiz data

const quizData = {
  HTML_QUESTIONS: [
    {
      question: "What is the purpose of the `<head>` tag in HTML?",
      options: [
        "To define the structure of the webpage",
        "To add styles to the webpage",
        "To add scripts to the webpage",
        "To define the metadata of the webpage",
      ],
      correctAnswer: "To define the metadata of the webpage",
    },
    {
      question:
        "What is the difference between `<p>` and `<span>` tags in HTML?",
      options: [
        "<p> is used for paragraphs, while <span> is used for inline text",
        "<p> is used for inline text, while <span> is used for paragraphs",
        "<p> and <span> are used for the same purpose",
        "<p> is used for headings, while <span> is used for paragraphs",
      ],
      correctAnswer:
        "<p> is used for paragraphs, while <span> is used for inline text",
    },
    {
      question: "What is the purpose of the `<body>` tag in HTML?",
      options: [
        "To define the metadata of the webpage",
        "To add styles to the webpage",
        "To add scripts to the webpage",
        "To define the content of the webpage",
      ],
      correctAnswer: "To define the content of the webpage",
    },
    {
      question:
        "What is the difference between `<div>` and `<span>` tags in HTML?",
      options: [
        "<div> is used for block-level elements, while <span> is used for inline elements",
        "<div> is used for inline elements, while <span> is used for block-level elements",
        "<div> and <span> are used for the same purpose",
        "<div> is used for headings, while <span> is used for paragraphs",
      ],
      correctAnswer:
        "<div> is used for block-level elements, while <span> is used for inline elements",
    },
    {
      question: "What is the purpose of the `<img>` tag in HTML?",
      options: [
        "To add a link to the webpage",
        "To add a paragraph to the webpage",
        "To add an image to the webpage",
        "To add a heading to the webpage",
      ],
      correctAnswer: "To add an image to the webpage",
    },
  ],
  CSS_QUESTIONS: [
    {
      question:
        "What is the purpose of the `background-color` property in CSS?",
      options: [
        "To set the text color of an element",
        "To set the background color of an element",
        "To set the border color of an element",
        "To set the font size of an element",
      ],
      correctAnswer: "To set the background color of an element",
    },
    {
      question: "What is the difference between `margin` and `padding` in CSS?",
      options: [
        "Margin is used to add space between elements, while padding is used to add space between an element and its content",
        "Margin is used to add space between an element and its content, while padding is used to add space between elements",
        "Margin and padding are used for the same purpose",
        "Margin is used to set the font size of an element, while padding is used to set the background color of an element",
      ],
      correctAnswer:
        "Margin is used to add space between elements, while padding is used to add space between an element and its content",
    },
    {
      question: "What is the purpose of the `font-size` property in CSS?",
      options: [
        "To set the font family of an element",
        "To set the font size of an element",
        "To set the font style of an element",
        "To set the font weight of an element",
      ],
      correctAnswer: "To set the font size of an element",
    },
    {
      question:
        "What is the difference between `display: block` and `display: inline` in CSS?",
      options: [
        "`display: block` is used for inline elements, while `display: inline` is used for block-level elements",
        "`display: block` is used for block-level elements, while `display: inline` is used for inline elements",
        "`display: block` and `display: inline` are used for the same purpose",
        "`display: block` is used for headings, while `display: inline` is used for paragraphs",
      ],
      correctAnswer:
        "`display: block` is used for block-level elements, while `display: inline` is used for inline elements",
    },
    {
      question: "What is the purpose of the `color` property in CSS?",
      options: [
        "To set the background color of an element",
        "To set the text color of an element",
        "To set the border color of an element",
        "To set the font size of an element",
      ],
      correctAnswer: "To set the text color of an element",
    },
  ],
  JAVASCRIPT_QUESTIONS: [
    {
      question: "What is the purpose of the `var` keyword in JavaScript?",
      options: [
        "To declare a variable",
        "To declare a function",
        "To declare a class",
        "To declare a constant",
      ],
      correctAnswer: "To declare a variable",
    },
    {
      question:
        "What is the difference between `let` and `const` in JavaScript?",
      options: [
        "Let is used to declare a constant, while const is used to declare a variable",
        "Let is used to declare a variable, while const is used to declare a constant",
        "Let and const are used for the same purpose",
        "Let is used to declare a function, while const is used to declare a class",
      ],
      correctAnswer:
        "Let is used to declare a variable, while const is used to declare a constant",
    },
    {
      question: "What is the purpose of the `if` statement in JavaScript?",
      options: [
        "To declare a variable",
        "To declare a function",
        "To execute a block of code if a condition is true",
        "To execute a block of code if a condition is false",
      ],
      correctAnswer: "To execute a block of code if a condition is true",
    },
    {
      question: "What is the difference between `==` and `===` in JavaScript?",
      options: [
        "`==` is used for strict equality, while `===` is used for loose equality",
        "`==` is used for loose equality, while `===` is used for strict equality",
        "`==` and `===` are used for the same purpose",
        "`==` is used to declare a variable, while `===` is used to declare a function",
      ],
      correctAnswer:
        "`==` is used for loose equality, while `===` is used for strict equality",
    },
    {
      question: "What is the purpose of the `for` loop in JavaScript?",
      options: [
        "To execute a block of code once",
        "To execute a block of code repeatedly for a specified number of times",
        "To execute a block of code while a condition is true",
        "To execute a block of code if a condition is true",
      ],
      correctAnswer:
        "To execute a block of code repeatedly for a specified number of times",
    },
  ],
  SQL_QUESTIONS: [
    {
      question: "What is the purpose of the `SELECT` statement in SQL?",
      options: [
        "To insert data into a table",
        "To update data in a table",
        "To delete data from a table",
        "To retrieve data from a table",
      ],
      correctAnswer: "To retrieve data from a table",
    },
    {
      question:
        "What is the difference between `INNER JOIN` and `LEFT JOIN` in SQL?",
      options: [
        "Inner join is used to combine rows from two tables where the join condition is met, while left join is used to combine rows from two tables where the join condition is not met",
        "Inner join is used to combine rows from two tables where the join condition is not met, while left join is used to combine rows from two tables where the join condition is met",
        "Inner join and left join are used for the same purpose",
        "Inner join is used to insert data into a table, while left join is used to update data in a table",
      ],
      correctAnswer:
        "Inner join is used to combine rows from two tables where the join condition is met, while left join is used to combine rows from two tables where the join condition is not met",
    },
    {
      question: "What is the purpose of the `INSERT INTO` statement in SQL?",
      options: [
        "To update data in a table",
        "To delete data from a table",
        "To retrieve data from a table",
        "To insert data into a table",
      ],
      correctAnswer: "To insert data into a table",
    },
    {
      question: "What is the difference between `WHERE` and `HAVING` in SQL?",
      options: [
        "Where is used to filter rows before grouping, while having is used to filter groups after grouping",
        "Where is used to filter groups after grouping, while having is used to filter rows before grouping",
        "Where and having are used for the same purpose",
        "Where is used to insert data into a table, while having is used to update data in a table",
      ],
      correctAnswer:
        "Where is used to filter rows before grouping, while having is used to filter groups after grouping",
    },
    {
      question: "What is the purpose of the `ORDER BY` statement in SQL?",
      options: [
        "To group data in a table",
        "To filter data in a table",
        "To sort data in a table",
        "To insert data into a table",
      ],
      correctAnswer: "To sort data in a table",
    },
  ],
  REACT_JS_QUESTIONS: [
    {
      question: "What is the purpose of the `JSX` syntax in React?",
      options: [
        "To write JavaScript code",
        "To write HTML code",
        "To write CSS code",
        "To combine JavaScript and HTML code",
      ],
      correctAnswer: "To combine JavaScript and HTML code",
    },
    {
      question:
        "What is the difference between a `functional component` and a `class component` in React?",
      options: [
        "A functional component is a class that extends the React.Component class, while a class component is a function that returns JSX",
        "A functional component is a function that returns JSX, while a class component is a class that extends the React.Component class",
        "A functional component and a class component are used for the same purpose",
        "A functional component is used for stateless components, while a class component is used for stateful components",
      ],
      correctAnswer:
        "A functional component is a function that returns JSX, while a class component is a class that extends the React.Component class",
    },
    {
      question: "What is the purpose of the `useState` hook in React?",
      options: [
        "To manage state in a functional component",
        "To manage state in a class component",
        "To manage props in a component",
        "To manage context in a component",
      ],
      correctAnswer: "To manage state in a functional component",
    },
    {
      question: "What is the difference between `props` and `state` in React?",
      options: [
        "Props are immutable, while state is mutable",
        "Props are mutable, while state is immutable",
        "Props and state are used for the same purpose",
        "Props are used for functional components, while state is used for class components",
      ],
      correctAnswer: "Props are immutable, while state is mutable",
    },
    {
      question: "What is the purpose of the `useEffect` hook in React?",
      options: [
        "To manage side effects in a functional component",
        "To manage side effects in a class component",
        "To manage state in a functional component",
        "To manage props in a component",
      ],
      correctAnswer: "To manage side effects in a functional component",
    },
  ],
  PYTHON_QUESTIONS: [
    {
      question: "What is the purpose of the `print` function in Python?",
      options: [
        "To read input from the user",
        "To write output to the screen",
        "To perform arithmetic operations",
        "To declare a variable",
      ],
      correctAnswer: "To write output to the screen",
    },
    {
      question: "What is the difference between `list` and `tuple` in Python?",
      options: [
        "List is immutable, while tuple is mutable",
        "List is mutable, while tuple is immutable",
        "List and tuple are used for the same purpose",
        "List is used for strings, while tuple is used for numbers",
      ],
      correctAnswer: "List is mutable, while tuple is immutable",
    },
    {
      question: "What is the purpose of the `len` function in Python?",
      options: [
        "To get the length of a string",
        "To get the length of a list",
        "To get the length of a dictionary",
        "To get the length of any data type",
      ],
      correctAnswer: "To get the length of any data type",
    },
    {
      question: "What is the difference between `==` and `is` in Python?",
      options: [
        "== is used to check for equality, while is is used to check for identity",
        "== is used to check for identity, while is is used to check for equality",
        "== and is are used for the same purpose",
        "== is used for strings, while is is used for numbers",
      ],
      correctAnswer:
        "== is used to check for equality, while is is used to check for identity",
    },
    {
      question: "What is the purpose of the `try-except` block in Python?",
      options: [
        "To handle errors and exceptions",
        "To perform arithmetic operations",
        "To declare a variable",
        "To write output to the screen",
      ],
      correctAnswer: "To handle errors and exceptions",
    },
  ],
};

// Define the quiz functionality
const quiz = {
  currentQuestion: 0,
  score: 0,
  selectedAnswer: null,
  course: null,
  questions: [],

  handleCourseChange: (course) => {
    quiz.course = course;
    quiz.questions = quizData[course];
    quiz.currentQuestion = 0;
    quiz.score = 0;
    quiz.selectedAnswer = null;
  },
  handleAnswer: (option) => {
    quiz.selectedAnswer = option;
    const isCorrect =
      option === quiz.questions[quiz.currentQuestion].correctAnswer;
    if (isCorrect) {
      quiz.score++;
    }
    quiz.currentQuestion++;
    return isCorrect;
  },
  getQuestion: () => {
    if (quiz.currentQuestion < quiz.questions.length) {
      return quiz.questions[quiz.currentQuestion];
    } else {
      return null;
    }
  },

  getScore: () => {
    return quiz.score;
  },
};

// Define the backend functionality
const backend = {
  getQuizData: () => {
    return quizData;
  },

  getQuizStatus: () => {
    return {
      currentQuestion: quiz.currentQuestion,
      score: quiz.score,
      selectedAnswer: quiz.selectedAnswer,
      course: quiz.course,
      questions: quiz.questions,
    };
  },

  handleCourseChange: (course) => {
    quiz.handleCourseChange(course);
  },

  handleAnswer: (option) => {
    quiz.handleAnswer(option);
  },
};

// Define the frontend functionality
// script.js
const frontend = {
  renderQuiz: () => {
    const quizContainer = document.getElementById("mcq-questions");
    const questionElement = document.createElement("h2");
    const optionsElement = document.createElement("ul");
    const scoreElement = document.createElement("p");
    const correctAnswerElement = document.createElement("p");
    const nextButton = document.createElement("button"); // New Next button
    //const previousButton = document.createElement("button"); // New Previous button

    const question = quiz.getQuestion();
    if (question) {
      questionElement.textContent = question.question;
      optionsElement.innerHTML = "";
      correctAnswerElement.textContent = "";

      question.options.forEach((option, index) => {
        const optionElement = document.createElement("li");
        const buttonElement = document.createElement("button");
        buttonElement.textContent = option;

        buttonElement.addEventListener("click", () => {
          const isCorrect = backend.handleAnswer(option);

          // Update score immediately if the answer is correct
          if (isCorrect) {
            backend.updateScore(); // Call a method to update the score
            buttonElement.classList.add("correct");
            buttonElement.style.backgroundColor = "green";
            buttonElement.style.color = "white";
          } else {
            buttonElement.classList.add("incorrect");
            buttonElement.style.backgroundColor = "red";
            buttonElement.style.color = "white";
          }

          // Show the correct answer below the question
          //correctAnswerElement.textContent = `Correct Answer: ${question.correctAnswer}`;

          // Change the background color of the correct answer to green
          question.options.forEach((opt, idx) => {
            if (opt === question.correctAnswer) {
              const correctButton = optionsElement.children[idx].children[0];
              correctButton.style.backgroundColor = "green";
              correctButton.style.color = "white";
            }
          });

          // Enable the Next button
          nextButton.disabled = false;

          // Update the score display
          scoreElement.textContent = `Score: ${quiz.getScore()}`; // Update score display
        });

        optionElement.appendChild(buttonElement);
        optionsElement.appendChild(optionElement);
      });

      // Setup Next button
      nextButton.textContent = "Next";
      nextButton.disabled = true; // Initially disabled
      nextButton.addEventListener("click", () => {
        quiz.currentQuestion++; // Move to the next question
        frontend.renderQuiz(); // Render the next question
      });

      // Setup Previous button
      /*previousButton.textContent = "Previous";
      previousButton.disabled = quiz.currentQuestion === 0; // Disable on the first question
      previousButton.style.marginRight = "580px";
      previousButton.addEventListener("click", () => {
        quiz.currentQuestion--; // Move to the previous question
        frontend.renderQuiz(); // Render the previous question
      });*/

      scoreElement.textContent = `Score: ${quiz.getScore()}`;
      quizContainer.innerHTML = "";
      quizContainer.appendChild(questionElement);
      quizContainer.appendChild(optionsElement);
      quizContainer.appendChild(correctAnswerElement);
      quizContainer.appendChild(scoreElement);
      //quizContainer.appendChild(previousButton); // Append the Previous button
      quizContainer.appendChild(nextButton); // Append the Next button
    } else {
      questionElement.textContent = "Quiz Complete!";
      optionsElement.innerHTML = "";
      scoreElement.textContent = `Final Score: ${quiz.getScore()}`;
      quizContainer.innerHTML = "";
      quizContainer.appendChild(questionElement);
      quizContainer.appendChild(optionsElement);
      quizContainer.appendChild(scoreElement);
    }
  },

  renderCourseSelection: () => {
    const courseSelectionElement = document.getElementById("course-selection");
    courseSelectionElement.innerHTML = "";
    Object.keys(quizData).forEach((course, index) => {
      const courseElement = document.createElement("button");
      courseElement.textContent = course;
      courseElement.addEventListener("click", () => {
        backend.handleCourseChange(course);
        frontend.renderQuiz();
      });
      courseSelectionElement.appendChild(courseElement);
    });
  },
};

// Initialize the quiz
frontend.renderCourseSelection();

// Add event listeners
document.getElementById("start-quiz").addEventListener("click", () => {
  frontend.renderQuiz();
});

// Add event listeners to course cards
document.getElementById("course1").addEventListener("click", () => {
  backend.handleCourseChange("HTML_QUESTIONS");
  frontend.renderQuiz();
});

document.getElementById("course2").addEventListener("click", () => {
  backend.handleCourseChange("CSS_QUESTIONS");
  frontend.renderQuiz();
});

document.getElementById("course3").addEventListener("click", () => {
  backend.handleCourseChange("JAVASCRIPT_QUESTIONS");
  frontend.renderQuiz();
});

document.getElementById("course4").addEventListener("click", () => {
  backend.handleCourseChange("SQL_QUESTIONS");
  frontend.renderQuiz();
});

document.getElementById("course5").addEventListener("click", () => {
  backend.handleCourseChange("REACT_JS_QUESTIONS");
  frontend.renderQuiz();
});

document.getElementById("course6").addEventListener("click", () => {
  backend.handleCourseChange("PYTHON_QUESTIONS");
  frontend.renderQuiz();
});
