const questions = [
    {
        question: "Commonly used data types do NOT include:",
        answers: [
            { text: "strings", correct: false },
            { text: "booleans", correct: false },
            { text: "alerts", correct: false },
            { text: "numbers", correct: true },
        ],
    },
    {
        question: "The condition in an if / else statement is enclosed with ____",
        answers: [
            { text: "quotes", correct: false },
            { text: "curly brackets", correct: false },
            { text: "parentheses", correct: true },
            { text: "square brackets", correct: false },
        ],
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        answers: [
            { text: "numbers and strings", correct: false },
            { text: "other arrays", correct: false },
            { text: "functions", correct: false },
            { text: "all of the above", correct: true },
        ],
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

const timerElement = document.getElementById("timer")
let timeLeft = 60;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    startTimer();
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer);
    
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++
  }else{
    selectedBtn.classList.add("incorrect");
    timeLeft -= 10;
  }

  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block"
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
});

function endQuiz() {
    questionElement.innerHTML = "Quiz Over! Your Score: " + score + "/" + questions.length;
    nextButton.style.display = "none";
    resetState();
    
}
function startTimer() {
    const timerInterval = setInterval(function (){
       timerElement.textContent = `Time: ${timeLeft}`;

        if (timeLeft <= 0 || currentQuestionIndex >= questions.length) {
            clearInterval(timerInterval);
            endQuiz();
        }else{
            timeLeft--;
        }
    },1000);
}

    const initialsForm = document.getElementById("initials-form");
    initialsForm.innerHTML = `
        <label for="initials">Enter Your Initials:</label>
        <input type="text" id="initials" maxlength="3">
        <button id="save-score-btn">Save Score</button>
    `;

    const saveScoreButton = document.getElementById("save-score-btn");
    saveScoreButton.addEventListener("click", () => {
        const initialsInput = document.getElementById("initials");
        const initials = initialsInput.value;

        const userScore = { initials, score };
        localStorage.setItem("userScore", JSON.stringify(userScore));

    });




startQuiz();
