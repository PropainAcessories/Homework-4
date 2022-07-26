// Array for the questions and answers.
var questions = [
    {
        question: "What does DOM stand for?",    
        answer: [
            {a: "Document Object Model", id: "a"}, 
            {b: "Direct Ordinance Machine", id: "b"},
            {c: "Document Orientation Management", id: "c"}, 
            {d: "Document Object Machine", id: "d"},
        ],
        hit: "a",
    },
    
    {
        question: "What is JavaScript usually used for in web development?",   
        answer: [
            {a: "Cybersecurity", id: "a"}, 
            {b: "Web Marketing", id: "b"},
            {c: "Military Applications", id: "c"}, 
            {d: "Creating interactive and dynamic web apps", id: "d"},
            ],
            hit: "d",
    },
    
    {
        question: "What is the difference between querySelector and querySelectorAll?",
        answer: [
            {a: "One selects a given name; the other selects all within the parent", id: "a"},
            {b: "There is no difference", id: "b"},
            {c: "querySelectorAll selects the entire page", id: "c"},
            {d: "None of the above", id: "d"},
            ],
            hit: "a",
    },
   
    {
        question: "What is the difference between a method and a function?",
        answer: [
            {a: "A method is pre-defined, you must define a function yourself", id: "a"},
            {b: "Method man is a rapper dude", id: "b"},
            {c: "You can function but you can't method", id: "c"},
            {d: "None of the above", id: "d"},
        ],
        hit: "a",
    },
    
    {
        question: "What is the purpose of an iteration?",
        answer: [
            {a: "To re-tell a story in a different time i.e: Comic books", id: "a"},
            {b: "Marketing gimmick", id: "b"},
            {c: "To destabilize the global economy", id: "c"},
            {d: "To get code to execute a certain number of times or until conditions are met", id: "d"},
            ],
            hit: "d",
    },
    
    {
        question: "What type of statement begins with if?",
        answer: [
            {a: "A question isn't a statement dummy", id: "a"},
            {b: "Ifs begin questions", id: "b"},
            {c: "A conditional statement", id: "c"},
            {d: "A fashion statement", id: "d"},
            ],
            hit: "c",
    },
   
    {
        question: "What does the push method do?",
        answer: [
            {a: "Puts items to an object or array", id: "a"},
            {b: "Pushes weaker code out of the way", id: "b"},
            {c: "Git pushes so you don't have to", id: "c"},
            {d: "All of the above", id: "d"},
            ],
            hit: "a",
    },

    {
        question: "What are the three types of variable?",
        answer: [
            {a: "Larry, Curly, and Moe", id: "a"},
            {b: "Letter, Number, and Symbol", id: "b"},
            {c: "String, Boolean, and Number", id: "c"},
            {d: "None of the above.", id: "d"},
            ],
            hit: "c",
    },

    {
        question: "Which of the following correctly defines boolean?",
        answer: [
            {a: "A spicy soup from Lousiana", id: "a"},
            {b: "A spicy soup from the Middle-East", id: "b"},
            {c: "That guy that always sits outside of the gas station", id: "c"},
            {d: "A variable set to true or false", id: "d"},
            ],
            hit: "d",
    },

    {
        question: "Are Java and JavaScript related?",
        answer: [
            {a: "Yes by blood", id: "a"},
            {b: "Yes Same inventor", id: "b"},
            {c: "No", id: "c"},
            {d: "Yes, but only by marriage", id: "d"},
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
// To put in the questions
var questionEl = document.querySelector("#quiz", "h2");
// For the answers
var answerEl = document.querySelector(".btn");
// Time keeping section
var time = document.querySelector("#time");
// Buttons for the answers
var mkBtn = document.createElement("button");
// High scores
var hiscore = document.querySelector("#hiscore");
// Quiz Reset
var reset = document.querySelector("#reset");


// quiz starts here.

function startQuiz() {
    //variables for the quiz
    quizArray = 0;
    points = 0;
    inQuiz = true;
    timer = 120;
    hiscore.setAttribute("disabled", "true");


    quizTimer();

};

// Clears what is currently on the page
function clearPage () {
    questionEl.textContent = "";
    answerEl.textContent = "";

};

// Brings on the next question; or the end of the quiz.
function nextpage() {

};

// Adds to your score if you get an answer correct.
function ansCorrect(){
    score++;
    quizArray++;
    clearPage();
    //placeholder for code to be written
    //placeholder for code to be written
    nextpage();

}

// deducts from your time and keeps score when you get an answer wrong.
function ansWrong(){
    timer = timer - 10;
    quizArray++;
    clearPage();
    //placeholder
    //placeholder
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
};

function scoreMgr(){

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



