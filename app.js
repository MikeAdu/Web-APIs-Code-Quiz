var questions = [{
    title: "What did we learn during week 1",
    choices: ["HTML", "CSS", "JavaScript", "Node.JS"],
    answer: "HTML"
},
{
    title: "Which array method returns the length of an array",
    choices: ["length", "git status", "push", "pop"],
    answer: "length"
},
{
    title: " What does API stand for",
    choices: ["Apps Programs Ice cream", "Application Programming Interface", "Application Python Interface", "All of the above."],
    answer: "Application Programming Interface"
},
{
    title: "Which one is an IDE",
    choices: ["YouTube", "Atom", "Visual Studio Code", "Coda"],
    answer: "Visual Studio Code"
},
{
    title: "WHich one is a JavaScript framework",
    choices: ["React", "BootStrap", "Material Design ", "Material UI"],
    answer: "React"
}
]

var score = 0;
var currentQuestion = -1;
var countDown =0;
var timer;

function start() {

    countDown = 75;
    document.getElementById("countDown").innerHTML = countDown;

    timer = setInterval(function() {
        countDown--;
        document.getElementById("countDown").innerHTML = countDown;
        
        if (countDown <= 0) {
            clearInterval(timer);
            endGame(); 
        }
    }, 1000);

    next();
}


