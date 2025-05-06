// Flashcard data
const flashcards = [
    {
      question: "What is the capital of France?",
      answer: "Paris"
    },
    {
      question: "What is the largest planet in our solar system?",
      answer: "Jupiter"
    },
    {
      question: "What does HTML stand for?",
      answer: "HyperText Markup Language"
    },
    {
      question: "What does CSS stand for?",
      answer: "Cascading Style Sheets"
    },
    {
      question: "What does JS stand for?",
      answer: "JavaScript"
    }

  ];
  
  let currentIndex = 0;
  
  // DOM elements
  const frontText = document.getElementById('card-front').querySelector('p');
  const backText = document.getElementById('card-back').querySelector('p');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  
  // Load card content
  function loadCard(index) {
    frontText.textContent = flashcards[index].question;
    backText.textContent = flashcards[index].answer;
  }
  
  // Event listeners
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % flashcards.length;
    loadCard(currentIndex);
  });
  
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
    loadCard(currentIndex);
  });
  
  // Initial load
  loadCard(currentIndex);
  