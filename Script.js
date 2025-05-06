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

  const cardFront = document.getElementById("card-front").querySelector("p");
  const cardBack = document.getElementById("card-back").querySelector("p");
  const flashcard = document.getElementById("flashcard");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  
  function loadCard(index) {
    cardFront.textContent = flashcards[index].question;
    cardBack.textContent = flashcards[index].answer;
  }
  
  flashcard.addEventListener("click", () => {
    flashcard.classList.toggle("flipped");
  });
  
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % flashcards.length;
    loadCard(currentIndex);
    flashcard.classList.remove("flipped");
  });
  
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
    loadCard(currentIndex);
    flashcard.classList.remove("flipped");
  });
  
  loadCard(currentIndex);
  
  
