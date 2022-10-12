var titleEl = document.querySelector(".Title");
var leaderboardButton = document.querySelector(".LeaderBoard");
var scoreDisplay = document.querySelector(".score"); 
var timerEl = document.querySelector(".timer");
var mainMenuEl = document.querySelector(".mainMenu");
var startButton = document.querySelector(".gameStart");
var questionContainEl = document.getElementById("question-container");
var infoEl = document.getElementById('info');
var questionEl = document.getElementById('question');
var answerEl = document.getElementById('answer-buttons');
var scoreEl = document.getElementById('LeaderBoards');
var scoreFormEl = document.getElementById('#scoreForm');
var gameRestart = document.querySelector(".gameReStart");
var scoreFormEl2 = document.querySelector("fix");
var randomizeQuestion;
var questionTracker; 
var timerCount = 0;
var scoreCount = 0;
var questions = [
    {
        question: "What does a varible do?",
        answers: [
            {text:"A: Holds a type of data", correct:true},
            {text:"B: block of code that can be called"},
            {text:"C: Holds entire array of data"},
            {text:"D: Loops a block of code repetiviley while conditions are met"}
        ]
    },{
        question: "A array can store...",
        answers: [
            {text:"A: only one type of data at a time"},
            {text:"B: only objects"},
            {text:"C: multiple sets of data", correct:true},
            {text:"D: data only as a string"}
        ]
    },{
        question: "In which ways can you access HTML elements through javascript",
        answers: [
            {text:"A: getElementbyId()"},
            {text:"B: Both A and C",correct:true},
            {text:"C: getElementsbyCLassName()", },
            {text:"D: None of the above"}
        ]
    },{
        question: "Which of the following methods can be used to display data in some form using Javascript?",
        answers: [
            {text:"A: document.write()"},
            {text:"B: console.log()"},
            {text:"C: window.alert()"},
            {text:"D: all of the above",correct:true }
        ]
    },{
        question: "What does the Javascript “debugger” statement do?",
        answers: [
            {text:"A: It debugs all the errors in the program when its run"},
            {text:"B: Acts as a breakpoint in the program",correct:true},
            {text:"C: It will debug any currnet errors in the statement"},
            {text:"D: None of the above"}
        ]
    },{
        question: "Which function is used to serialize an object into a JSON string in Javascript?",
        answers: [
            {text:"A: stringify()",correct:true},
            {text:"B: parse()"},
            {text:"C: convert()"},
            {text:"D: None of the above"}
        ]
    },
];


function startGame() {
    timerCount = 25;
    scoreCount = 0;
    
    questionContainEl.classList.remove("hide");
    startButton.classList.add("hide");  
    infoEl.classList.add("hide");
    randomizeQuestion = questions.sort(()=>Math.random()- .5);
    questionTracker = 0;
    setTime();
    nextQuestion();
}
function nextQuestion(){
    resetQuestion(); 
    
    if (randomizeQuestion.length > questionTracker ){
        showQuestion(randomizeQuestion[questionTracker]);
    }else{
        gameEnd();
    }
}
function showQuestion(question){
    questionEl.innerText = question.question;
    question.answers.forEach(answer => {
        var button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        answerEl.appendChild(button);
        button.addEventListener("click", ()=>{
            questionTracker++
            if(answer.correct) {
               timerCount = timerCount + 10;
                scoreCount = scoreCount + 10;
                console.log(timerCount);  
            }
            nextQuestion(); 
        })
    });
}
function handleFormSubmit(event){
    event.preventDefeault();
    var name = document.querySelector("#name").value;
}
function resetQuestion(){
    while (answerEl.firstChild) {
        answerEl.removeChild(answerEl.firstChild);
    }
}
function gameEnd(){
    questionContainEl.classList.add("hide");
    //startButton.classList.remove("hide");  
    gameRestart.classList.remove('hide'); 
    scoreEl.classList.remove('hide');
    scoreDisplay.classList.remove('hide');
    scoreDisplay.textContent = "You got a score of " + scoreCount;
    scoreFormEl.classList.remove("hide"); 
    scoreFormEl.onabort('submit', handleFormSubmit());
    //infoEl.classList.remove("hide");
    
}
function setTime(){
    var timerInterval = setInterval(function(){
        timerCount--;
        timerEl.textContent = "Timer: " + timerCount;
        if(timerCount === 0) {
            clearInterval(timerInterval);
            gameEnd();
        }
    }, 1000);
}
function gameReset(){
    questionContainEl.classList.add("hide");
    startButton.classList.remove("hide");  
    infoEl.classList.remove("hide");
    gameRestart.classList.add("hide");
    scoreDisplay.classList.add("hide");
    scoreFormEl2.classList.add("hide"); 
}
startButton.addEventListener("click",startGame);

console.log(gameRestart);
gameRestart.addEventListener("click",gameReset)
    
    
