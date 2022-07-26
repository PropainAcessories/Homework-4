// Array for the questions and answers.
var questions = [
    {
        question1: "What does DOM stand for?",    
        answer1: [
            {a: "Document Object Model", id: "a"}, 
            {b: "Direct Ordinance Machine", id: "b"},
            {c: "Document Orientation Management", id: "c"}, 
            {d: "Document Object Machine", id: "d"},
        ],
    },
    
    {
        question2: "What is JavaScript usually used for in web development?",   
        answer2: [
            {a: "Cybersecurity", id: "a"}, 
            {b: "Web Marketing", id: "b"},
            {c: "Military Applications", id: "c"}, 
            {d: "Creating interactive and dynamic web apps", id: "d"},
            ],
    },
    
    {
        question3: "What is the difference between querySelector and querySelectorAll?",
        answer3: [
            {a: "One selects a given name; the other selects all within the parent", id: "a"},
            {b: "There is no difference", id: "b"},
            {c: "querySelectorAll selects the entire page", id: "c"},
            {d: "None of the above", id: "d"},
            ],
    },
   
    {
        question4: "What is the difference between a method and a function?",
        answer4: [
            {a: "A method is pre-defined, you must define a function yourself", id: "a"},
            {b: "Method man is a rapper dude", id: "b"},
            {c: "You can function but you can't method", id: "c"},
            {d: "None of the above", id: "d"},
        ],
    },
    
    {
        question5: "What is the purpose of an iteration?",
        answer5: [
            {a: "To re-tell a story in a different time i.e: Comic books", id: "a"},
            {b: "Marketing gimmick", id: "b"},
            {c: "To destabilize the global economy", id: "c"},
            {d: "To get code to execute a certain number of times or until conditions are met", id: "d"},
            ],
    },
    
    {
        question6: "What type of statement begins with if?",
        answer6: [
            {a: "A question isn't a statement dummy", id: "a"},
            {b: "Ifs begin questions", id: "b"},
            {c: "A conditional statement", id: "c"},
            {d: "A fashion statement", id: "d"},
            ],
    },
   
    {
        question7: "What does the push method do?",
        answer7: [
            {a: "Puts items to an object or array", id: "a"},
            {b: "Pushes weaker code out of the way", id: "b"},
            {c: "Git pushes so you don't have to", id: "c"},
            {d: "All of the above", id: "d"},
            ],
    },

    {
        question8: "What are the three types of variable?",
        answer8: [
            {a: "Larry, Curly, and Moe", id: "a"},
            {b: "Letter, Number, and Symbol", id: "b"},
            {c: "String, Boolean, and Number", id: "c"},
            {d: "None of the above.", id: "d"},
            ],
    },

    {
        question9: "Which of the following correctly defines boolean?",
        answer9: [
            {a: "A spicy soup from Lousiana", id: "a"},
            {b: "A spicy soup from the Middle-East", id: "b"},
            {c: "That guy that always sits outside of the gas station", id: "c"},
            {d: "A variable set to true or false", id: "d"},
            ],
    },

    {
        question10: "Are Java and JavaScript related?",
        answer10: [
            {a: "Yes by blood", id: "a"},
            {b: "Yes Same inventor", id: "b"},
            {c: "No", id: "c"},
            {d: "Yes, but only by marriage", id: "d"},
            ],
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
// Time keeping section
var time = document.querySelector("#time");
// High scores
var hiscore = document.querySelector("#hiscore");
// Quiz Reset
var reset = document.querySelector("#reset")


// quiz starts here.

function startQuiz() {
    //variables for the quiz
    quizArray = 0;
    points = 0;
    inQuiz = true;
    timer = 120;
    hiscore.setAttribute("disabled", "true");
    reset.setAttribute("disabled", "true");

    quizTimer();

};

// Clears what is currently on the page
function clearPage () {

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
    //Something to put scores up will go here
};

function scoreMgr(){

}

function hiscores() {

};

function reset() {

};

function clearScore() {

}

function showScore() {

}


// Event Listeners.
quizbtn.addEventListener("click", startQuiz);



