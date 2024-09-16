const courseData = {
  'HTML_QUESTIONS': {
    title: 'HTML_QUESTIONS',
    instructor: 'Vikas',
    description: 'Learn about the latest advancements in HTML.',
    // ... more course details
  },
  'CSS_QUESTIONS': {
    title: 'CSS_QUESTIONS',
    instructor: 'Vikas',
    description: 'Learn about the latest advancements in CSS.',
    // ... more course details
    
  },
  'JAVASCRIPT_QUESTIONS': {
    title: 'JAVASCRIPT_QUESTIONS',
    instructor: 'Vikas',
    description: 'Learn about the latest advancements in JAVASCRIPT.',
    // ... more course details
  },
  'SQL_QUESTIONS': {
    title: 'SQL_QUESTIONS',
    instructor: 'Vikas',
    description: 'Learn about the latest advancements in SQL.',
    // ... more course details
  },
  'REACT_QUESTIONS': {
    title: 'REACT_QUESTIONS',
    instructor: 'Vikas',
    description: 'Learn about the latest advancements in REACT.',
    // ... more course details
  },
  'C/C++_QUESTIONS': {
    title: 'C/C++_QUESTIONS',
    instructor: 'Vikas',
    description: 'Learn about the latest advancements in C/C++.',
    // ... more course details
  },
};

function openSlide(courseId) {
  // ... (rest of the openSlide function)

  const course = courseData[courseId];
  if (course) {
    // Populate slide content with course details
    document.getElementById('slideContent').innerHTML += `
      <p>Instructor: ${course.instructor}</p>
      <p>Description: ${course.description}</p>
      <!-- Add more course details -->
    `;
  } else {
    // Handle case where course data is not found
  }
}
function generateMCQQuestions(courseId) {
  const questionsContainer = document.getElementById('slideContent');
  questionsContainer.innerHTML = '';

  fetch('questions.json')
    .then(response => response.json())
    .then(data => {
      const questions = data[courseId];
      questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `
          <h3>Question ${index + 1}: ${question.question}</h3>
          <ul>
            ${question.options.map((option, optionIndex) => `
              <li>
                <input type="radio" id="option-${optionIndex}" name="question-${index}" value="${optionIndex}">
                <label for="option-${optionIndex}">${option}</label>
              </li>
            `).join('')}
          </ul>
        `;
        questionsContainer.appendChild(questionElement);
      });
    })
    .catch(error => console.error('Error fetching questions:', error));
}

function openSlide(courseId) {
  document.getElementById('slideContainer').style.display = 'flex';
  generateMCQQuestions(courseId);
}
function goBack() {
  window.history.back();
}

function openSlide(slideId) {
  document.getElementById('slideContainer').style.display = 'flex';
  document.getElementById('slideContent').innerHTML = `
    <span class="close-slide" onclick="closeSlide()">&#10006;</span>
    <h2>${slideId}</h2>
    <p>${getContent(slideId)}</p>
  `;
}

function closeSlide() {
  document.getElementById('slideContainer').style.display = 'none';
}

function getContent(slideId) {
  switch (slideId) {
    case 'home':
      return 'Welcome to QUIZ! This is the home page content.';
    case 'dashboard':
      return 'This is the dashboard page content.';
    case 'HTML_QUESTIONS':
      return 'Learn the basics of HTML and test your skills with our interactive quiz.';
    // Add more cases for each course
    default:
      return 'Unknown slide ID';
  }
}
const logoutBtn = document.querySelector('.logout-btn');



  document.getElementById('logout-btn').addEventListener('click', function() {
    localStorage.clear();
    // Clear cookies here
    window.location.href = 'login.html';
});