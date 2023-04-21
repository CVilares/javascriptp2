let questions = [
    {
        question: "Which country won the 2018 FIFA World Cup?",
        answers: ["France", "Brazil", "Germany", "Spain"],
        correctAnswer: "France"
    },
    {
        question: "Who won the Ballon d'Or in 2021?",
        answers: ["Lionel Messi", "Cristiano Ronaldo", "Kylian Mbappé", "Robert Lewandowski"],
        correctAnswer: "Lionel Messi"
    }
];

let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 15;

function displayQuestion() {
    document.getElementById("question").innerHTML = questions[currentQuestion].question;
    document.getElementById("answer1").innerHTML = questions[currentQuestion].answers[0];
    document.getElementById("answer2").innerHTML = questions[currentQuestion].answers[1];
    document.getElementById("answer3").innerHTML = questions[currentQuestion].answers[2];
    document.getElementById("answer4").innerHTML = questions[currentQuestion].answers[3];
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerHTML = `Time left: ${timeLeft}`;

        if (timeLeft === 0) {
            clearInterval(timer);
            document.getElementById("answer1").disabled = true;
            document.getElementById("answer2").disabled = true;
            document.getElementById("answer3").disabled = true;
            document.getElementById("answer4").disabled = true;
            document.getElementById("next-btn").style.display = "block";
            document.getElementById("timer").innerHTML = "Time's up!";
        }
    }, 1000);
}

function checkAnswer(selectedAnswer) {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
        score++;
        document.getElementById(selectedAnswer).style.backgroundColor = "green";
    } else {
        document.getElementById(selectedAnswer).style.backgroundColor = "red";
        document.getElementById(questions[currentQuestion].correctAnswer).style.backgroundColor = "green";
    }

    document.getElementById("answer1").disabled = true;
    document.getElementById("answer2").disabled = true;
    document.getElementById("answer3").disabled = true;
    document.getElementById("answer4").disabled = true;
    document.getElementById("next-btn").style.display = "block";
    clearInterval(timer);
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion === questions.length) {
        document.getElementById("quiz-wrapper").innerHTML = `You got ${score} out of ${questions.length} questions correct!`;
    } else {
        timeLeft = 15;
        displayQuestion();
        document.getElementById("timer").innerHTML = `Time left: ${
