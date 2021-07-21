// Script for the Quiz

const choices = Array.from(document.getElementsByClassName("choice-text"));
let quizDatas = []; // an array of objects of the quiz data
let currentQuestion = {};
let acceptingAnswers = false; //let the user submitting answer
let questionCounter = 0; //what number of question are the user on
let availableQuestions =[]; // an array of our question set

//const correctPoints = [50, 100, 150, 200];
const correctPoints = [400, 500, 600];
let points;
let score = 0; //score starts from 0
let stars = 0;
let savedScore;

const fullPoints = 1000;

// Get the topicResult from local storage
var topic = localStorage.getItem("topicResult");  
console.log(topic);

// Get the url for the topic
const getUrl = {
	Science: "https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple",
	History: "https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple",
	Music: "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple",
	Art: "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple",
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
	// localStorage.clear();
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

	// Display progress bar from previous score
	if (localStorage.getItem(topic + "_score") !== null) {
		progressBar(parseInt(localStorage.getItem(topic + "_score", savedScore)));
		console.log("your progress bar : " + progressBarPoint);
		$("#progress-bar-yellow").css("width",progressBarPoint + "%");
	}

	// Call function countdown for the timer
	countdown();
	
	// Take out the question that has been used
	availableQuestions.splice(questionIndex, 1);
	acceptingAnswers = true;

};

// Function countdown to set 20 seconds timer
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

// Display progress bar
let progressBarPoint;
function progressBar(s) {
	if (s > 3000) {
		progressBarPoint = ((s - 3000) / fullPoints * 100);
	} else if (s > 2000) {
		progressBarPoint = ((s - 2000) / fullPoints * 100);
	} else if (s > 1000) {
		progressBarPoint = ((s - 1000) / fullPoints * 100);
	} else {
		progressBarPoint = (s / fullPoints * 100);
	}
}

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

		// Save score to local storage, accumulate score from previous one
		console.log(localStorage.getItem(topic + "_score") !== null);
		console.log(parseInt(localStorage.getItem(topic + "_score", savedScore)));
		if (localStorage.getItem(topic + "_score") !== null) {
			savedScore = points + parseInt(localStorage.getItem(topic + "_score", savedScore));
			localStorage.setItem(topic + "_score", savedScore);
		} else {
			savedScore = score;
			localStorage.setItem(topic + "_score", savedScore);
		}

		// call function progressBar to display the accumulative score in the progress bar 
		//progressBar(savedScore);
		progressBar(parseInt(localStorage.getItem(topic + "_score", savedScore)));
		console.log("your progress bar : " + progressBarPoint);
		$("#progress-bar-yellow").css("width",progressBarPoint + "%");

		// Assign stars if score reach each 1000 points
		stars = Math.floor(savedScore / fullPoints);
		console.log("You have now " + stars + " stars");

		// Listen for changes in stars value (ie. from 0 to 1 star, from 1 to 2 stars, and from 2 to 3 stars) by getting previous stars value, and comparing it to the newest stars value
		console.log("The stars you have before: " + localStorage.getItem(topic + "_stars", stars));
		let diffStars = stars - parseInt(localStorage.getItem(topic + "_stars", stars));
		if (diffStars === 1) { 
			console.log(stars);
			console.log("CONGRATS!!");
			showModalStars(e);
			return;
		}
		// Save the stars value into local storage
		localStorage.setItem(topic + "_stars", stars);

		// After 10 questions are up, a modal pops up
		const maxQuestion = 10;
		console.log(questionCounter === maxQuestion);
		if (questionCounter === maxQuestion) {
			showModalTenQuestions(e);
			return;
		} else {
			getNewQuestion();
		}

	});
});

function showModalTenQuestions(e) {
	e.preventDefault();
	$("#modal-stars").modal("show");
	$("#stars-title").text("You’ve answered 10 questions and you’ve got " + score + " points in this round. Your total points are " + savedScore);
	$("#stars-text").text("Not bad! What do you want to do next? You can choose ‘play again’ to challenge yourself and increase your points to get stars. You can see your stars achievement by choosing ‘See my stars’. Or if you wish to quit the game, click the ‘Quit’ button.")
}

function showModalStars(e) {
	e.preventDefault();
	$("#modal-stars").modal("show");
	$("#stars-title").text("Woohooo! You’ve made it to " + savedScore + " points in " + topic + ". You get " + stars + " star!");
	if (stars === 1) {
		$("#stars-img").append('<img src="assets/images/star.png">');
		$("#stars-img").children("img").addClass("star-modal");
		$("#stars-text").text("Yeah! You know basic knowlegde of " + topic + ". Challenge yourself and increase your points to get more stars! What do you want to do next?")
	} else if (stars === 2) {
		$("#stars-img").append('<img src="assets/images/star.png">');
		$("#stars-img").append('<img src="assets/images/star.png">');
		$("#stars-img").children("img").addClass("star-modal");
		$("#stars-text").text("Amazing! You’re a " + topic + " fan and you're quite knowledgable in this. You earn your two stars achievement! Play another trivia and see if you’re as amazing in another topics as well.")		
	} else if (stars === 3) {
		$("#stars-img").append('<img src="assets/images/star.png">');
		$("#stars-img").append('<img src="assets/images/star.png">');
		$("#stars-img").append('<img src="assets/images/star.png">');
		$("#stars-img").children("img").addClass("star-modal");
		$("#stars-text").text("Congratulations! You’re now officially a " + topic + " professor! You know all about this topic. You read relevant articles about it and always keep up with the news. Play another trivia and see if you’re as amazing in another topics as well.")	
	}

	
}