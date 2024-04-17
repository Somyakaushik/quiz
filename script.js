const questions = [
    {
        question: "What is Energy?",
        answers: [
            { text: "Energy is the ability to exercise", correct: false },
            { text: "Energy is the ability to do workout", correct: false },
            { text: "Energy is the ability to do work", correct: true },
            { text: "Energy is the ability to study", correct: false },
        ]
    },
    {
        question: "Which of the following activities use energy?",
        answers: [
            { text: "Using mobile", correct: false },
            { text: "Coloring the walls", correct: false },
            { text: "While driving a vehicle", correct: false },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "Which of the following is an energy source?",
        answers: [
            { text: "Coal", correct: false },
            { text: "Hydro", correct: false },
            { text: "Solar", correct: false },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "Which of these is a source of renewable energy?",
        answers: [
            { text: "Petrol", correct: false },
            { text: "Wind Energy", correct: true },
            { text: "Diesel", correct: false },
            { text: "Kerosene", correct: false }
        ]
    },
    {
        question: "Which of the following are the sources of fossil energy?",
        answers: [
            { text: "All of the above", correct: true },
            { text: "Oil", correct: false },
            { text: "Coal", correct: false },
            { text: "Natural Gas", correct: false }
        ]
    },
    {
        question: "15000 Watt-hour of energy consumption is equal to?",
        answers: [
            { text: "1 unit", correct: false },
            { text: "5 unit", correct: false },
            { text: "10 unit", correct: false },
            { text: "15 unit", correct: true }
        ]
    },
    {
        question: "1000 Watt-hour of energy consumption is equal to?",
        answers: [
            { text: "1 KWh", correct: true },
            { text: "1 W", correct: false },
            { text: "1 KW", correct: false },
            { text: "1 Wh", correct: false }
        ]
    },
    {
        question: "Which of the following are the primary energy sources that we use in our daily life?",
        answers: [
            { text: "Petrol/Diesel", correct: false },
            { text: "Coal", correct: false },
            { text: "LPG", correct: false },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "Carbon footprint is the emission of greenhouse gases by",
        answers: [
            { text: "a person", correct: false },
            { text: "an organization", correct: false },
            { text: "any product", correct: false },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "How much percentage of CO2 emissions are due to carbon-based fuels?",
        answers: [
            { text: "about 85%", correct: false },
            { text: "about 65%", correct: true },
            { text: "about 75%", correct: false },
            { text: "about 95%", correct: false }
        ]
    },
    {
        question: "Carbon footprint includes the emission of greenhouse gases from",
        answers: [
            { text: "transportation", correct: false },
            { text: "electricity generation", correct: false },
            { text: "cooking gas", correct: false },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "Climate change has led to many bizarre events across the world. Which of these is possible in modern times due to climate change?",
        answers: [
            { text: "Floods", correct: false },
            { text: "Heatwaves", correct: false },
            { text: "large scale forest fires", correct: false },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "Which Hurricane has hit the United States causing immense devastation?",
        answers: [
            { text: "Hurricane Ida", correct: true },
            { text: "Hurricane Gulaab", correct: false },
            { text: "Hurricane Tauktae", correct: false },
            { text: "Hurricane Yaas", correct: false }
        ]
    },
    {
        question: "Adopting renewable energy can be the solution to",
        answers: [
            { text: "climate change", correct: false },
            { text: "job creation", correct: false },
            { text: "energy independence", correct: false },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "Use of fossil Energy has created problem for humans in the form of:",
        answers: [
            { text: "Encouraging sustaining life", correct: false },
            { text: "Reducing poverty", correct: false },
            { text: "induces climate change", correct: true },
            { text: "Growing GDP", correct: false }
        ]
    },
    {
        question: "What are the major components used for making solar panels?",
        answers: [
            { text: "Silicon → Silicon Wafer → Solar Cell → Solar Module", correct: true },
            { text: "Silicon → Silicon Cell → Solar Module", correct: false },
            { text: "Silicon → Silicon Wafer→ Solar Module", correct: false },
            { text: "Silicon → Silicon Wafer → Silicon Cell", correct: false }
        ]
    },
    {
        question: "Energy efficient appliances help in reducing energy consumption. How?",
        answers: [
            { text: "because they are used for less time", correct: false },
            { text: "because they require less power to do the same work", correct: true },
            { text: "they are used for more time", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "How much energy is saved if normal fans are replaced with an efficient BLDC fan?",
        answers: [
            { text: "20-30%", correct: true },
            { text: "31-40%", correct: false },
            { text: "41-50%", correct: false },
            { text: "51-70%", correct: false }
        ]
    },
    {
        question: "What is the full form of AMG rule?",
        answers: [
            { text: "Avoid, Modernize and Generate", correct: false },
            { text: "Assimilate, Modernize and Guarantee", correct: false },
            { text: "Avoid, Minimize and Generate", correct: true },
            { text: "Assimilate, Minimize and Generate", correct: false }
        ]
    },
    {
        question: "Which form of energy is currently causing the largest amount of greenhouse gas emissions, globally?",
        answers: [
            { text: "Natural gas", correct: false },
            { text: "Coal", correct: false },
            { text: "Oil", correct: true },
            { text: "Nuclear", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
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
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if (isCorrect) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "View Certificate";
    nextButton.style.display = "block";
    nextButton.removeEventListener("click", handleNextButton);  // Remove the existing event listener
    nextButton.addEventListener("click", () => {
        window.location.href = 'certificate.html';  // Redirect to the certificate page
    });
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
