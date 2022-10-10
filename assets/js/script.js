var titleEl = document.querySelector(".Title");
var leaderboardButton = document.querySelector(".LeaderBoard");
var timerEl = document.querySelector(".timer");
var mainMenuEl = document.querySelector(".mainMenu");
var startButton = document.querySelector(".gameStart");
var questionContainEl = document.getElementById("question-container");
var infoEl = document.getElementById('info');
var randomizeQuestion;
var questionTracker; 
var questions = [
    {
        question: "What does a varible do?",
        answers: [
            {text: "Holds a type of data", correct:true},
            {text:"A block of code that can be called"},
            {text:"Holds entire array of data"},
            {text:"Loops a block of code repetiviley while conditions are met"}
        ]
    }
];


function startGame() {
    timerCount = 60;
    
    questionContainEl.classList.remove("hide");
    
    startButton.classList.add("hide");
    
    infoEl.classList.add("hide");
    randomizeQuestion = questions.sort(()=>Math.random()- .5);
}

startButton.addEventListener("click",startGame);
console.log(infoEl);