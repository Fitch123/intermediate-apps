const nextBtn = document.getElementById("nextBtn");
const questionText = document.getElementById("question");
const optionsDiv = document.getElementById("options");
const qNum = document.getElementById("qNum");
const quizContainer = document.getElementById("quizContainer");
const finalScore = document.getElementById("finalScore");
const finalScoreText = document.getElementById("finalScoreText");
const restartBtn = document.getElementById("restart");

const questions = [
    {
        question: "What does console.log() do in JavaScript?",
        options: ["Displays a message", "Creates a popup", "Changes HTML", "Stops code"],
        answer: 0
    },
    {
        question: "Which tag makes a hyperlink?",
        options: ["<link>", "<href>", "<a>", "<p>"],
        answer: 2
    },
    {
        question: "Which CSS property changes text color?",
        options: ["background-color", "color", "font-style", "text-color"],
        answer: 1
    }
];

let current = 0;
let score = 0;

function display() {
    optionsDiv.innerHTML = "";
    let currentOpt = 0;

    // Hide next Button
    nextBtn.style.display = 'none';

    // Set the question text
    questionText.innerText = questions[current].question;

    // Get options and answer
    const newOptions = questions[current].options;
    const answer = questions[current].answer;

    qNum.textContent = `Question #${current + 1}`

    // Create buttons for each option
    newOptions.forEach(opt => {
        const newBtn = document.createElement("button");
        optionsDiv.appendChild(newBtn);
        newBtn.textContent = opt;
        newBtn.classList.add(currentOpt); // give it a class with its index

        newBtn.addEventListener("click", () => {
            const optionBtn = optionsDiv.querySelectorAll("button");

            if (newBtn.classList.contains(answer)) {
                // Correct choice
                score++;
                newBtn.classList.add("correct");
            } else {
                // Wrong choice
                newBtn.classList.add("wrong");
            }

            // Loop through each option
            optionBtn.forEach(opt => {
                // Disable all options
                opt.disabled = true;

                // Highlight correct option
                if (opt.classList.contains(answer) && !opt.classList.contains("correct")) {
                    opt.classList.add("highlight");
                }
            });

            //Show next button again
            nextBtn.style.display = 'block';
        });

        currentOpt++;
    });
}

function helper() {
     if (current < questions.length) {
        display();
    } else if (current === questions.length){
        quizContainer.style.display = "none";
        finalScore.style.display = "block";
        finalScoreText.textContent = `Your score: ${score}/${questions.length}`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    helper();
});

nextBtn.addEventListener("click", () => {
    current++
    helper();
});

restartBtn.addEventListener("click", () => {
    current = 0;
    score = 0;
    helper();
    quizContainer.style.display = "block";
    finalScore.style.display = "none";
});



