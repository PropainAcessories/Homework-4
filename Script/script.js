// Array for the questions and answers.
var questions = [
    {
        question: "What does DOM stand for?",    
        answer: [
            {choice: "Document Object Model", id: "a"}, 
            {choice: "Direct Ordinance Machine", id: "b"},
            {choice: "Document Orientation Management", id: "c"}, 
            {choice: "Document Object Machine", id: "d"},
        ],
        hit: "a",
    },
    
    {
        question: "What is JavaScript usually used for in web development?",   
        answer: [
            {choice: "Cybersecurity", id: "a"}, 
            {choice: "Web Marketing", id: "b"},
            {choice: "Military Applications", id: "c"}, 
            {choice: "Creating interactive and dynamic web apps", id: "d"},
            ],
            hit: "d",
    },
    
    {
        question: "What is the difference between querySelector and querySelectorAll?",
        answer: [
            {choice: "One selects a given name; the other selects all within the parent", id: "a"},
            {choice: "There is no difference", id: "b"},
            {choice: "querySelectorAll selects the entire page", id: "c"},
            {choice: "None of the above", id: "d"},
            ],
            hit: "a",
    },
   
    {
        question: "What is the difference between a method and a function?",
        answer: [
            {choice: "A method is pre-defined, you must define a function yourself", id: "a"},
            {choice: "Method man is a rapper dude", id: "b"},
            {choice: "You can function but you can't method", id: "c"},
            {choice: "None of the above", id: "d"},
        ],
        hit: "a",
    },
    
    {
        question: "What is the purpose of an iteration?",
        answer: [
            {choice: "To re-tell a story in a different time i.e: Comic books", id: "a"},
            {choice: "Marketing gimmick", id: "b"},
            {choice: "To destabilize the global economy", id: "c"},
            {choice: "To get code to execute a certain number of times or until conditions are met", id: "d"},
            ],
            hit: "d",
    },
    
    {
        question: "What type of statement begins with if?",
        answer: [
            {choice: "A question isn't a statement dummy", id: "a"},
            {choice: "Ifs begin questions", id: "b"},
            {choice: "A conditional statement", id: "c"},
            {choice: "A fashion statement", id: "d"},
            ],
            hit: "c",
    },
   
    {
        question: "What does the push method do?",
        answer: [
            {choice: "Puts items to an object or array", id: "a"},
            {choice: "Pushes weaker code out of the way", id: "b"},
            {choice: "Git pushes so you don't have to", id: "c"},
            {choice: "All of the above", id: "d"},
            ],
            hit: "a",
    },

    {
        question: "What are the three types of variable?",
        answer: [
            {choice: "Larry, Curly, and Moe", id: "a"},
            {choice: "Letter, Number, and Symbol", id: "b"},
            {choice: "String, Boolean, and Number", id: "c"},
            {choice: "None of the above.", id: "d"},
            ],
            hit: "c",
    },

    {
        question: "Which of the following correctly defines boolean?",
        answer: [
            {choice: "A spicy soup from Lousiana", id: "a"},
            {choice: "A spicy soup from the Middle-East", id: "b"},
            {choice: "That guy that always sits outside of the gas station", id: "c"},
            {choice: "A variable set to true or false", id: "d"},
            ],
            hit: "d",
    },

    {
        question: "Are Java and JavaScript related?",
        answer: [
            {choice: "Yes by blood", id: "a"},
            {choice: "Yes Same inventor", id: "b"},
            {choice: "No", id: "c"},
            {choice: "Yes, but only by marriage", id: "d"},
            ],
            hit: "c",
    },
];

// Index that goes through the array.
var quizArray = 0;

//correct answers
var points = 0;

// How much time you get
var timer = 0;

// Variables for hiscores
var userHiScore = [];
if (localStorage.getItem("userHiScore") !== null) {
        userHiScore = JSON.parse(localStorage.getItem("userHiScore"));
};

// Variable to check if quiz is ongoing
var inQuiz = false;


// Variable for any button to start the quiz at the beginning.
var quizbtn = document.querySelector("#start");
// Selects the main section of the page
var bigBox = document.querySelector("#bigbox");
// To access the question section
var question1 = document.querySelector("#question");
// To put in the questions
var questionEl = document.querySelector(".question");
// For the answers
var answerEl = document.querySelector(".answers");
// For Hits
var hits = document.querySelector(".hit");
// Buttons for the answers
var mkBtn = document.createElement("button");
// For the done page
var finished = document.querySelector("#finshed");
// Defines the score
var userScore = document.querySelector("#userScore");
// For the submit button
var submitBtn = document.querySelector("#submit");
// Time keeping section
var time = document.querySelector("#time");
// for their initials
var initials = document.querySelector("#inputform");
// goes back to the main page
var goback = document.querySelector("#goBack");
// clears the highscores
var cleanScores = document.querySelector("#clear");
// High score button
var hiscore = document.querySelector("#hiscore");
// quiz starts here.

function startQuiz() {
    //variables for the quiz
    quizArray = 0;
    points = 0;
    inQuiz = true;
    timer = 120;
    hiscore.setAttribute("disabled", "true");

    quizTimer();

    bigBox.classList.remove("beercan");
    bigBox.classList.add("bounce");

    bigBox.classList.add("beercan");
    bigBox.classList.remove("bounce");
    nextpage();

};

// Clears what is currently on the page
function clearPage () {
    questionEl.textContent = "";
    answerEl.textContent = "";
    hits.textContent = "";

    if (showScore) {
        // If quizArray >= 0 {
        bigBox.classList.remove("beercan");
        bigBox.classList.add("bounce");
        finished.classList.remove("beercan");
        finished.classList.add("bounce");
    } else {
        return;
    }
    //}
};

// Brings on the next question; or the end of the quiz.
function nextpage() {
    if (!inQuiz || quizArray === questions.length) return;
    // Puts a margin on the bottom of the questions.
    questionEl.classList.add("mb-5");
    questionEl.innerHTML = questions[quizArray].question;

    for (let i=0; i < questions[quizArray].answer.length; i++) {
        var mkBtn = document.createElement("button");
        mkBtn.classList.add("btn");
        mkBtn.textContent = questions[quizArray].answer[i].choice;
        answerEl.classList.add("beercan");
        answerEl.appendChild("mkBtn");
        if (questions[quizArray].answer[i].id === questions[quizArray].hit) {
            mkBtn.addEventListener("click", ansCorrect);
        } else {
            mkBtn.addEventListener("click", ansWrong);
        }

    }

};

// Adds to your score if you get an answer correct.
function ansCorrect(){
    score++;
    quizArray++;
    clearPage();
    hits.textContent = "CORRECT"
    nextpage();

}

// deducts from your time and keeps score when you get an answer wrong.
function ansWrong(){
    timer = timer - 10;
    quizArray++;
    clearPage();
    hits.textContent = "WRONG"
    nextpage();
}
   
// Timer
function quizTimer() {
    var timerLeft = setInterval(function() {
        timer = timer-1;

        time.innerHTML = timer;

        if (timer <= 0 || quizArray === questions.length) {
            clearInterval(timerLeft);
            stopQuiz();
        }
    }, 1000);
};

function stopQuiz() {
    timer = 0;
    inQuiz = false;
    clearPage();
    hiscore.removeAttribute("disabled");
    finished.classList.remove("bounce");
    finished.classList.add("beercan");
    userScore.textContent = points;

    if (initials.value !== "") {
        initials.value = "";
    }
};

function scoreMgr() {

}

function hiscores() {

};

function resetPage() {

};

function clearScore() {

}

function showScore() {

}


// Event Listeners.
quizbtn.addEventListener("click", startQuiz);



