// Script for the Quiz

const choices = Array.from(document.getElementsByClassName("choice-text"));
let quizDatas = []; // an array of objects of the quiz data
let currentQuestion = {};
let acceptingAnswers = false; //let the user submitting answer
let score = 0; //score starts from 0
let questionCounter = 0; //what number of question are the user on
let availableQuestions =[]; // an array of our question set

const correctPoints = [50, 100, 150, 200];
let points;
const maxQuestion = 10;
const fullPoints = 1000;

// Get the topicResult from local storage
var topic = localStorage.getItem("topicResult");  
console.log(topic);

// Get the url for the topic
const getUrl = {
	Science: "https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple",
	History: "https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple",
	Music: "https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple",
	Art: "https://opentdb.com/api.php?amount=10&category=25&difficulty=easy&type=multiple",
	Geography: "https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple",
	Sports: "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple",
}

// Fetch API for quiz data, use the url as parameter
fetch(getUrl[topic])
	.then(res => {
		return res.json();
	})
	.then(loadedQuestions => {
		console.log(loadedQuestions.results);
		//convert the questions that we get into a new form
		// get each of the original question
		quizDatas = loadedQuestions.results.map(loadedQuestion => {
			//format that question to match the format that we need
			const formattedQuestion = {
				question: loadedQuestion.question
			};
			//spread individual answer and put it into an array of answerChoices
			const answerChoices = [...loadedQuestion.incorrect_answers];
			//push the correct answer to the array by putting it on random (could be the first answer, second answer, and so on
			formattedQuestion.answer = Math.floor(Math.random() * 3) + 1;
			answerChoices.splice(
				formattedQuestion.answer - 1,
				0,
				loadedQuestion.correct_answer
			);
			
			answerChoices.forEach((choice, index) => {
				formattedQuestion["choice" + (index + 1)] = choice;
			});

			return formattedQuestion;

		});
		
		startGame();
	})
	// Handle error scenario
	.catch(err => {
		console.error(err);
	});


startGame = () => {
	accumulativePoints = 0;
	// Spread the quizDatas array and put it into the availableQuestion array
	availableQuestions = [...quizDatas];
	console.log(availableQuestions);
	getNewQuestion();
};

getNewQuestion = () => {

	if (availableQuestions.length === 0) {
		console.log("The end");
		return window.location.assign("/index.html");
	};
	questionCounter++;
	// Assign one of the points randomly from the correctPoints array 
	points = correctPoints[Math.floor(Math.random() * correctPoints.length)];
	const questionIndex = Math.floor(Math.random() * availableQuestions.length); //set a random number to get a random question from the available questions left
	currentQuestion = availableQuestions[questionIndex];

	// Display points, question number, and the question to the html
	$("#question-number").text("Question " + questionCounter);
	$("#question-points").text("Your question worth: " + points);
	$("#question-topic").text("Topic : " + topic);
	$("#question-text").text(currentQuestion.question);
	// Replace error string &#039; and &quot; with a single quote and a double quote
	$('#question-text').text(function(index,text){
		return text.replace("&#039;","'");
	});
	$('#question-text').text(function(index,text){
		return text.replace('&quot;','""');
	});

	// Display each of the choices into the html content
	choices.forEach(choice => {
		const number = choice.dataset['number'];
		choice.innerHTML = currentQuestion["choice" + number];
	});

	// Call function countdown for the timer
	countdown();
	
	// Take out the question that has been used
	availableQuestions.splice(questionIndex, 1);
	acceptingAnswers = true;

};

// Set 20 seconds timer
let counter;
function countdown () {
	let count = 20;
	counter = setInterval(timer, 1000);
	function timer() {
		count--;
		if (count === 0) {
			//counter ended, stop timer and move on to the next question
			clearInterval(counter);
			getNewQuestion();
			return;
		};
		// dispay the number of seconds	
		$("#timer").text(count);
	};
};

// After a choice is clicked, record the choice, stop the countdown, and move on to next question, 
choices.forEach(choice => {
	choice.addEventListener("click", e => {
		if (!acceptingAnswers) return;
		acceptingAnswers = false;
		const selectedChoice = e.target;
		const selectedAnswer = selectedChoice.dataset["number"];
		clearInterval(counter);
		// If the answer is correct, add points into score
		if(selectedAnswer == currentQuestion.answer) {
			points = points;
		} else {
			points = 0;
		};
		score = score + points;
		console.log("You got: " + points + "points");
		console.log("Your total points are :" + score);
		console.log(fullPoints);
		// display the accumulative score in the progress bar
		let progressBarPoint = (score / fullPoints * 100);
		console.log("your progress bar : " + progressBarPoint);
		$("#progress-bar-yellow").css("width",progressBarPoint + "%");

		getNewQuestion();

	});
});

