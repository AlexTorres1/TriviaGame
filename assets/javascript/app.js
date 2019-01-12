//Click Start

var wins = 0;
var loss = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;
var number = 30;
var intervalId;

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  function decrement() {
    number--;
    $("#time").html("<h2>" + number + "</h2>");
    if (number === 0) {
      stop();
      alert("Time Up!");
    }
  }

  function stop() {
    clearInterval(intervalId);
  }  

//to get the modal to load to start 
$(document).ready(function(){
    $("#myModal").modal();
    run();
});

//to push the wins/loss on the selection for the questions/answers
$("#wins").text("Fights won: "+ wins);
$("#loss").text("Fights lost: "+ loss);

//function to start the game

function startGame()
{
    for(var i = 0; i < questions.length; i++){
        $("#trivia").append("<h5>"+questions[i].question+"</h5>");
        for (var j = 0; j < questions[i].answers.length; j++){
            $("#trivia").append('<div class="form-check form-check-inline"> <input class="form-check-input" type="radio" name="element'+i+'" questionIndex="'+i+'" answerIndex="'+j+'" id="inlineCheckbox2" value="option2"> <label class="form-check-label" for="inlineCheckbox2">' +questions[i].answers[j]+ '</label></div>');
        }
    }
}

//questions array
var questions = [{
    question: "Which game did Ryu Debut in?",
    answers: ["Street Fighter", "Street Fighter II", "Street Fighter Alpha", "Puzzle Fighter"],
    correctAnswer: 0
    },{
    question: "How many characters were playable in the original Street Fighter II?",
    answers: ["6", "8", "12", "14"],
    correctAnswer: 1
     },{
         question: "M. Bison was first featured as a boss in which game?",
         answers: ["Street Fighter", "Street Fighter II", "Street Fighter 2010", "Street Fighter Alpha 2"],
         correctAnswer: 1
     }
    ,{
        question: "Which military branch did Guile serve in?",
        answers: ["The Army", "The Marines", "The Air Force", "The Navy"],
        correctAnswer: 2
    },{
        question: "Who was the boss in the original Street Fighter?",
        answers: ["Birdie", "Sagat", "Vega", "Akuma"],
        correctAnswer: 1
    },]
    //     question: "What is the name of Sagat’s projectile move?",
    //     answers: ["Tiger Blast", "Tiger Shot", "Tiger Knee", "Sonic Boom"],
    //     correctAnswer: 
    // },{
    //     question: "Where is Blanka’s home country?",
    //     answers: ["United States", "Japan", "Brazil", "India"],
    //     correctAnswer: 2
    // },{
    //     question: "What is the name of the mysterious masked fighter in Third Strike?",
    //     answers: ["Twelve", "Necro", "Q", "Oro"],
    //     correctAnswer: 2
    // },{
    //     question: "What is the name of M. Bison's trademark move?",
    //     answers: ["Psycho Smasher", "Psycho Crusher", "Psycho Torpedo", "Psycho Trucker"],
    //     correctAnswer: 1
    // // },{
    // //     question: "Which of these aren’t one of Dhalsim’s abilities?",
    // //     answers: ["Teleportation", "Fire Breathing", "Elongated Limbs", "Health Regeneration"],
    // //     correctAnswer: 3
    // // }]


//function to check the questions and answers

$(document).on("click", ".form-check-input", checkIput);

function checkIput(){
    var questionIndex = $(this).attr("questionIndex");
    var answerIndex = $(this).attr("answerIndex");
    checkAnswer(questionIndex, answerIndex)
}

//create questions and see which is checked. generate them dynamically, create a funtion to caputre the click
function checkAnswer(questionIndex, answerIndex){
    console.log(questionIndex, answerIndex);
    questions[questionIndex]
    if(answerIndex == questions[questionIndex].correctAnswer){
        wins++;
        $("#wins").text("Fights won: "+ wins);
        console.log("correct");
    }else{
        loss++;
        $("#loss").text("Fights lost: "+ loss);
        console.log("wrong");
    }
}
$("").on("click", function(){
    $(this).attr("")
})


//calls start game function
startGame();

//create timer

// var element = document.getElementsByName("element");

//Timer runs out go to the answers
//Show correct/incorrect answers
