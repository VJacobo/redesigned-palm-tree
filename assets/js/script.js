const questions = [
    {
        question: "Commonly used data types do NOT include:",
        answers: [
            { text: "strings", correct: false},
            { text: "booleans", correct: false},
            { text: "alerts", correct: false},
            { text: "numbers", correct: true},
        ]
    },
    {
        question: "The condition in an if / else statement is enclosed with ____",
        answers: [
            { text: "quotes", correct: false},
            { text: "curly brackts", correct: false},
            { text: "parenthesis", correct: true},
            { text: "square brackets", correct: false},
        ]  
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        answers: [
            { text: "numbers and strings", correct: false},
            { text: "other arrays", correct: false},
            { text: "parenthesis", correct: true},
            { text: "square brackets", correct: false},
        ]  
    },
]

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("answer-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    answerButton.innerHTML = "";

    currentQuestion.answers.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}

startQuiz();