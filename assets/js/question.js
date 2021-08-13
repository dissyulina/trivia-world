// JS for all things related to the quiz

// Variables for quiz data
const choices = Array.from(document.getElementsByClassName("choice-text"));
let quizDatas = []; // an array of objects of the quiz data
let currentQuestion = {};
let acceptingAnswers = false; //let the user submitting answer
let questionCounter = 0; //what number of question are the user on
let availableQuestions =[]; // an array of our question set

// Variables for points and stars system
const correctPoints = [100, 150, 200, 250];
const fullPoints = 1000;
const maxStars = 3;
let points;
let score = 0; //score starts from 0
let stars = 0; //stars starts from 0
let savedScore;
let difficultyLevel;

// Variables for local storage
let topic = localStorage.getItem("topicResult"); 
let getStars;
let getScore;

// Variables for timer
let counter;
let count;

// Variable for progress bar
let progressBarPoint;
let incrementWidth;

// An array of URL inside object, with topic as key -> Topic: [easy, medium, hard]
const getUrl = {
	Science: ["https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple", 
	"https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple", "https://opentdb.com/api.php?amount=10&category=17&difficulty=hard&type=multiple"],
	Computer: ["https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple", "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple", "https://opentdb.com/api.php?amount=10&category=18&difficulty=hard&type=multiple"],
	Music: ["https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple", "https://opentdb.com/api.php?amount=10&category=12&difficulty=medium&type=multiple", "https://opentdb.com/api.php?amount=10&category=12&difficulty=hard&type=multiple"],
	Film: ["https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple", "https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple", "https://opentdb.com/api.php?amount=10&category=11&difficulty=hard&type=multiple"],
	Geography: ["https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple", "https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple", "https://opentdb.com/api.php?amount=10&category=22&difficulty=hard&type=multiple"],
	Sports: ["https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple", "https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple", "https://opentdb.com/api.php?amount=10&category=21&difficulty=hard&type=multiple"],
}

// Get the stars on the topic from local storage, to determine the level of difficulty of the questions
if ((localStorage.getItem(topic + "_stars", stars) === null) || (localStorage.getItem(topic + "_stars", stars) === "null")) {
	getStars = 0;
} else {
	getStars = Number(localStorage.getItem(topic + "_stars", stars));
}

// Get the saved score on the topic from local storage
if ((localStorage.getItem(topic + "_score", savedScore) === null) || (localStorage.getItem(topic + "_score", savedScore) === "null")) {
	getScore = 0;
} else {
	getScore = Number(localStorage.getItem(topic + "_score", savedScore));
}

// If there are 3 stars, get the hard difficulty level - same as when there are 2 stars
if (getStars >= 3) {
	difficultyLevel = 2;
} else {
	difficultyLevel = getStars;
}

// Fetch API for quiz data, get the url as parameter from the nested data above (code until line 121 was sourced from youtube video: James Q Quick - Build A Quiz App. Added comments as the developer understands the process)
fetch(getUrl[topic][difficultyLevel])
	.then(res => {
		return res.json();
	})
	.then(loadedQuestions => {
		console.log(loadedQuestions.results);
		// Get each of the original question, and format that question to match the format that we need
		quizDatas = loadedQuestions.results.map(loadedQuestion => {
			const formattedQuestion = {
				question: loadedQuestion.question
			};
			// Spread individual answer and put it into an array of answerChoices
			const answerChoices = [...loadedQuestion.incorrect_answers];
			// Push the correct answer to the array by putting it on random - could be the first answer, second answer, and so on
			formattedQuestion.answer = Math.floor(Math.random() * 3) + 1;
			answerChoices.splice(
				formattedQuestion.answer - 1,
				0,
				loadedQuestion.correct_answer
			);
			// For each choice in answerChoices array, put them into choice 1 to 4 in the formattedQuestion
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
	getNewQuestion();
	// Remove loader when the question is ready
	$("#question-start").removeClass("hidden");
	$("#loader-question").remove();
};

getNewQuestion = () => {
	// If 10th question is left unanswered and time's up, show up modal
	if (availableQuestions.length === 0) {
		showModalTenQuestions();
	};
	questionCounter++;

	// Assign one of the points randomly from the correctPoints array 
	points = correctPoints[Math.floor(Math.random() * correctPoints.length)];
	const questionIndex = Math.floor(Math.random() * availableQuestions.length); //set a random number to get a random question from the available questions left
	currentQuestion = availableQuestions[questionIndex];

	// Decode html entities and display the question
	$("#question-text").html(currentQuestion.question).text();
	// Display each of the choices into the html content
	choices.forEach(choice => {
		const number = choice.dataset['number'];
		choice.innerHTML = currentQuestion["choice" + number];
	});

	// Display points, question number, the topic, and difficulty level to the html
	$("#question-number").text("Question " + questionCounter);
	$("#question-points").text("This question worth: " + points);
	$("#your-score").text("Your total score : " + getScore);
	$("#question-topic").text("Topic : " + topic);
	$("#question-level").text('Difficulty level : ' + questionLevel());
	
	// Take out the question that has been used
	availableQuestions.splice(questionIndex, 1);
	acceptingAnswers = true;

	// Display progress bar from previous score
	if(getScore >= 3000) {
		progressBarFull();
	} else {
		progressBar(0, getScore);
	}
	$("#progress-bar-yellow").css("width",progressBarPoint + "%");

	// Call function to display stars next to progress bar and countdown timer
	progressStars(getStars);
	countdown();
};

// After a choice is clicked, record the choice, stop the countdown, and move on to next question
choices.forEach(choice => {
	choice.addEventListener("click", e => {
		if (!acceptingAnswers) return;
		acceptingAnswers = false;
		const selectedChoice = e.target;
		const selectedAnswer = selectedChoice.dataset["number"];
		clearInterval(counter);
		let classRightOrWrong;
		// If the answer is correct, add points into score, and put response - play sound and change background color
		if(selectedAnswer == currentQuestion.answer) {
			points = points;
			$("#correct-sound")[0].play();
			classRightOrWrong = "correct";
			e.target.classList.add(classRightOrWrong);
		} else {
			points = 0;
			$("#wrong-sound")[0].play();
			classRightOrWrong = "wrong";
			e.target.classList.add(classRightOrWrong);
		};
		
		score = Number(getScore) + points;

		// Save score to local storage, accumulate score from previous one
		savedScore = score;
		localStorage.setItem(topic + "_score", savedScore);
		getScore = localStorage.getItem(topic + "_score", savedScore);

		// Call function progressBar to display the accumulative score in the progress bar 
		if (progressBarPoint === 100) {
			progressBarFull();
		} else {
			progressBar(progressBarPoint,savedScore);
		}
		$("#progress-bar-yellow").css("width", progressBarPoint + "%");
		
		// Assign stars if score reach each 1000 points
		stars = Math.min(Math.floor(savedScore / fullPoints), maxStars);

		// Listen for changes in stars value (ie. from 0 to 1 star, from 1 to 2 stars, and from 2 to 3 stars) by getting previous stars value, and comparing it to the newest stars value
		let diffStars = stars - getStars;
		if (diffStars >= 1) { 
			stopTimer();
			// Wait until the transition of the progress bar is done, then show modal
			document.getElementById("progress-bar-yellow").addEventListener("transitionend", function() {
				showModalStars(e);
			});
			// Save the stars value into local storage
			localStorage.setItem(topic + "_stars", stars);
			getStars = localStorage.getItem(topic + "_stars", stars);
			return;
		}

		// After 10th question is answered, a modal pops up
		const maxQuestion = 10;
		if (questionCounter === maxQuestion) {
			if(diffStars === 0) {
				stopTimer();
				showModalTenQuestions(e);
			}
		} else {
			setTimeout(function() {
				e.target.classList.remove(classRightOrWrong);
				getNewQuestion();
			}, 1000);
		}
	});
});

//Function to get difficulty level of question
function questionLevel() {
	if (difficultyLevel === 0) {
		return "Easy";
	} else if (difficultyLevel === 1) {
		return "Medium";
	} else {
		return "Hard";
	}
}

// Function countdown to set 20 seconds timer
function countdown () {
	count = 20;
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

//Function to stop the timer
function stopTimer () {
	clearInterval(counter);
	$("#timer").text(count);
	return;
}

// Function display progress bar
function progressBar(progressBefore, scoreAfter) {
	progressBarPoint = Math.floor((scoreAfter / fullPoints * 100) % 100);
	if (progressBarPoint < progressBefore) {
		$("#progress-bar-yellow").animate({ width: '100%'});
		// Change stars from gray to yellow
		for (let i=0; i < ($(".stars-achievement").length); i++) {
			$("#progress-bar-stars img:first").remove();
			$("#progress-bar-stars").append('<img src="assets/images/star.png">');
			$("#progress-bar-stars img").addClass("stars-achievement");
		}	
	} else {
		incrementWidth = Math.floor(progressBarPoint - progressBefore);
		$("#progress-bar-yellow").animate({ width: '+=(incrementWidth)'});
	}
}

//Function to display progress bar full achievement
function progressBarFull() {
	$("#progress-bar-yellow").css("width","100%");
	progressBarPoint = 100;
}

// Function display stars next to progress bar
function progressStars(st) {
	$("#progress-bar-stars").empty();
	if(st <= 2) {
		let i=0;
		while (i <= Math.min(st, 2)) {
			$("#progress-bar-stars").append('<img src="assets/images/gray-star.png">');
			$("#progress-bar-stars img").addClass("stars-achievement");
			$("#progress-bar-stars").css("width","auto");
			i++;
		}
	} else {
		$("#progress-bar-stars").append('<img src="assets/images/achievement-complete.png">');
		$("#progress-bar-stars img").addClass("complete-achievement");
		$("#progress-bar-stars").css("width","auto");
	}
}

// Function to show modal after 10 set of questions end
function showModalTenQuestions(e) {
	$("#modal-stars").modal("show");
	$("#ten-questions-sound")[0].play();
	$("#stars-title").text("You’ve answered 10 questions and you’ve got " + score + " points in this round. Your total points are " + savedScore);
	// Display text according to score
	if (score == 0) {
		$("#stars-text").text("Ooopps.. was it harder than you thought, or did you just got distracted while answering the questions? Don't worry! You can redeem yourself by choosing 'Play Again'. You can see your all of your stars achievement by choosing ‘See my stars’. Or if you wish to quit the game, click the ‘Quit’ button.");
	} else {
	$("#stars-text").text("Not bad! What do you want to do next? You can choose ‘play again’ to challenge yourself and increase your points to get stars. You can see all of the stars that you've earned by choosing ‘See my stars’. Or if you wish to quit the game, click the ‘Quit’ button.");
	}
}

// Function to show modal after the user get an additional star
function showModalStars(e) {
	e.preventDefault();
	$("#modal-stars").modal("show");
	$("#getstar-sound")[0].play();
	$("#stars-title").text("Woohooo! You’ve made it to " + savedScore + " points in " + topic + ". You get " + stars + " star!");
	// Display the stars
	let i=0;
    while (i < stars) {
		$("#stars-img").append('<img src="assets/images/star.png">');
        i++;
    }
	$("#stars-img").children("img").addClass("star-modal");
	// Display the text
	if (stars === 1) {
		$("#stars-text").text("Yeah! You know basic knowlegde of " + topic + ". Challenge yourself and increase your points to get more stars! What do you want to do next?")
	} else if (stars === 2) {
		$("#stars-text").text("Amazing! You’re a " + topic + " fan and you're quite knowledgable in this. You earn your two stars achievement! Play another round and see if you’re as great in other topics as well.")
	} else if (stars === 3) {
		$("#stars-text").text("Congratulations, achievement's completed for " + topic + " !! You’re now (unofficially) a " + topic +"s professor! You know all about it. You read relevant articles about it and always keep up with the news. Play another round and see if you’re as amazing in other topics as well.")	
	}
}