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


function endGame() {
    clearInterval(timer);

    var quizContent = `
    <h2>Game over!</h2>
    <h3>You got a ` + score +  ` /100!</h3>
    <h3>That means you got ` + score / 20 +  ` questions correct!</h3>
    <input type="text" id="name" placeholder="First name"> 
    <button onclick="setScore()">Set score!</button>`;

    document.getElementById("quizBody").innerHTML = quizContent;
}


function setScore() {
    localStorage.setItem("highscore", score);
    localStorage.setItem("highscoreName",  document.getElementById('name').value);
    getScore();
}


function getScore() {
    var quizContent = `
    <h2>` + localStorage.getItem("highscoreName") + `'s highscore is:</h2>
    <h1>` + localStorage.getItem("highscore") + `</h1><br> 
    
    <button onclick="clearScore()">Clear score!</button><button onclick="resetGame()">Play Again!</button>
    
    `;

    document.getElementById("quizBody").innerHTML = quizContent;
}


