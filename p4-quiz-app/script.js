const nextBtn = document.getElementById("nextBtn");
const questionText = document.getElementById("question");
const optionsDiv = document.getElementById("options")

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

function display() {
    optionsDiv.innerHTML = "";

    questionText.innerText = questions[current].question;

    const newOptions = questions[current].options;
    newOptions.forEach(opt => {

        const newBtn = document.createElement("button");
        optionsDiv.appendChild(newBtn);
        newBtn.textContent = opt;
        newBtn.addEventListener("click", () => {
            console.log("clicked");
        });
    });
}

nextBtn.addEventListener("click", () => {
    if (current < questions.length) {
        display();
        current++;
    }
    //current = (current + 1) % questions.length;
});