// Query Selectors.
var hiscore = document.querySelector("hiscore");
var quizbutton = document.querySelectorAll(".btn");
var a = document.querySelector("#one");
var b = document.querySelector("#two");
var c = document.querySelector("#three");
var d = document.querySelector("#four");

// Array for the questions and answers.
var questions = [
    question1 = "What does DOM stand for?",
    question2 = "What is JavaScript usually used for in web development?",
    question3 = "What is the difference between querySelector and querySelectorAll?",
    question4 = "What is the difference between a method and a function?",
    question5 = "What is the purpose of an iteration?",
    question6 = "What type of statement begins with if?",
    question7 = "What does the push method do?",
    question8 = "What are the three types of variable?",
    question9 = "Which of the following correctly defines boolean?",
    question10 = "Are Java and JavaScript related?",
];

var answers = [
    
    answer1 = [
        a = "Document Object Model", 
        b = "Direct Ordinance Machine",
        c = "Document Orientation Management", 
        d = "Document Object Machine"
    ],

    answer2 = [
        a = "Cybersecurity", 
        b = "Web Marketing",
        c = "Military Applications", 
        d = "Creating interactive and dynamic web apps"
    ],

    answer3 = [
        a = "One selects a given name; the other selects all within the parent",
        b = "There is no difference",
        c = "querySelectorAll selects the entire page",
        d = "None of the above"
    ],

    answer4 = [
        a = "A method is pre-defined, you must define a function yourself",
        b = "Method man is a rapper dude",
        c = "You can function but you can't method",
        d = "None of the above"
    ],

    answer5 = [
        a = "To re-tell a story in a different time i.e: Comic books",
        b = "Marketing gimmick",
        c = "To destabilize the global economy",
        d = "To get code to execute a certain number of times or until conditions are met"
    ],

    answer6 = [
        a = "A question isn't a statement dummy",
        b = "Ifs begin questions",
        c = "A conditional statement",
        d = "A fashion statement"
    ],

    answer7 = [
        a = "Combines items to an object or array",
        b = "Pushes weaker code out of the way",
        c = "Git pushes so you don't have to",
        d = "All of the above"
    ],

    answer8 = [
        a = "Larry, Curly, and Moe",
        b = "Letter, Number, and Symbol",
        c = "String, Boolean, and Number",
        d = "None of the above."
    ],

    answer9 = [
        a = "A spicy soup from Lousiana",
        b = "A spicy soup from the Middle-East",
        c = "That guy that always sits outside of the gas station",
        d = "A variable set to true or false"
    ],

    answer10 = [
        a = "Yes by blood",
        b = "Yes Same inventor",
        c = "No",
        d = "Yes, but only by marriage"
    ]
];





// Event Listeners.


