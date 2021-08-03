//Script for all things related to Quiz

//Variables for quiz data
const choices = Array.from(document.getElementsByClassName("choice-text"));
let quizDatas = []; // an array of objects of the quiz data
let currentQuestion = {};
let acceptingAnswers = false; //let the user submitting answer
let questionCounter = 0; //what number of question are the user on
let availableQuestions =[]; // an array of our question set

//Variables for points system
//const correctPoints = [50, 100, 150, 200];
const correctPoints = [300, 400, 500, 600];
const fullPoints = 1000;
const maxStars = 3;
let points;
let score = 0; //score starts from 0
let stars = 0;
let savedScore;
let difficultyLevel;

//Variables for local storage
let topic = localStorage.getItem("topicResult"); 
let getStars;
let getScore;

// Get the topic from local storage
//var topic = localStorage.getItem("topicResult"); 
console.log(localStorage.getItem(topic + "_stars", stars));

// Get the stars on the topic from local storage, to determine the level of difficulty of the questions
if ((localStorage.getItem(topic + "_stars", stars) === null) || (localStorage.getItem(topic + "_stars", stars) === "null")) {
	getStars = 0;
	console.log("star is null");
} else {
	getStars = Number(localStorage.getItem(topic + "_stars", stars));
}
console.log(topic);
console.log(getStars);

// Get the saved score on the topic from local storage
if ((localStorage.getItem(topic + "_score", savedScore) === null) || (localStorage.getItem(topic + "_score", savedScore) === "null")) {
	getScore = 0;
	console.log("score is null");
} else {
	getScore = Number(localStorage.getItem(topic + "_score", savedScore));
}
console.log(getScore);

// An array of URL inside object, with topic as key -> Topic: [easy, medium, hard]
const getUrl = {
	Science: ["https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple", "https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple", "https://opentdb.com/api.php?amount=10&category=17&difficulty=hard&type=multiple"],
	Computer: ["https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple", "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple", "https://opentdb.com/api.php?amount=10&category=18&difficulty=hard&type=multiple"],
	Music: ["https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple", "https://opentdb.com/api.php?amount=10&category=12&difficulty=medium&type=multiple", "https://opentdb.com/api.php?amount=10&category=12&difficulty=hard&type=multiple"],
	Film: ["https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple", "https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple", "https://opentdb.com/api.php?amount=10&category=11&difficulty=hard&type=multiple"],
	Geography: ["https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple", "https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple", "https://opentdb.com/api.php?amount=10&category=22&difficulty=hard&type=multiple"],
	Sports: ["https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple", "https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple", "https://opentdb.com/api.php?amount=10&category=21&difficulty=hard&type=multiple"],
}
console.log(getUrl[topic][getStars]);

// If there are 3 stars, get the hard difficulty level - same as when there are 2 stars
if (getStars >= 3) {
	difficultyLevel = 2;
} else {
	difficultyLevel = getStars;
}
// Fetch API for quiz data, get the url as parameter from the nested data above (code until line 125 was sourced from youtube video: James Q Quick - Build A Quiz App. Added comments as the developer understands the process)
fetch(getUrl[topic][difficultyLevel])
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
	// If 10th question is left unanswered and time's up, go back to wheel page
	if (availableQuestions.length === 0) {
		console.log("The end");
		return window.location.assign("wheel.html");
	};
	
	questionCounter++;

	// Assign one of the points randomly from the correctPoints array 
	points = correctPoints[Math.floor(Math.random() * correctPoints.length)];
	console.log(points);
	const questionIndex = Math.floor(Math.random() * availableQuestions.length); //set a random number to get a random question from the available questions left
	currentQuestion = availableQuestions[questionIndex];

	// Display points, question number, and the topic to the html
	$("#question-number").text("Question " + questionCounter);
	$("#question-points").text("Your question worth: " + points);
	$("#question-topic").text("Topic : " + topic);
	
	// Decode html entities and display the question
	$("#question-text").html(currentQuestion.question).text();

	// Display each of the choices into the html content
	choices.forEach(choice => {
		const number = choice.dataset['number'];
		choice.innerHTML = currentQuestion["choice" + number];
	});

	// Display progress bar from previous score
	console.log("Your score before: " + getScore);
	progressBar(0,getScore);
	console.log("your progress bar before : " + progressBarPoint);
	$("#progress-bar-yellow").css("width",progressBarPoint + "%");

	//Display stars from previous stars
	progressStars(getStars);

	// Call function countdown for the timer
	countdown();
	
	// Take out the question that has been used
	availableQuestions.splice(questionIndex, 1);
	acceptingAnswers = true;
};

// Function countdown to set 20 seconds timer
let counter;
let count;
function countdown () {
	count = 10;
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

function stopTimer () {
	clearInterval(counter);
	$("#timer").text(count);
	console.log(count);
	return;

}

// Function display progress bar
let progressBarPoint;
let incrementWidth;
function progressBar(progressBefore, scoreAfter) {
	progressBarPoint = (scoreAfter / fullPoints * 100) % 100;
	/*
	if (scoreAfter >= 3000) {
		progressBarPoint = ((scoreAfter - 3000) / fullPoints * 100);
	} else if (scoreAfter >= 2000) {
		progressBarPoint = ((scoreAfter - 2000) / fullPoints * 100);
	} else if (scoreAfter >= 1000) {
		progressBarPoint = ((scoreAfter - 1000) / fullPoints * 100);
	} else {
		progressBarPoint = (scoreAfter / fullPoints * 100);
	}
	*/
	//progressBarPoint = Math.min(progressBarPoint, 100);
	console.log("progress bar point: " + progressBarPoint);
	if (progressBarPoint < progressBefore) {
		console.log("increment width for progress bar: " + incrementWidth + "%");
		$("#progress-bar-yellow").animate({ width: '100%'});
	} else {}
		incrementWidth = Math.floor(progressBarPoint - progressBefore);
		console.log("increment width for progress bar: " + incrementWidth + "%");
		$("#progress-bar-yellow").animate({ width: '+=(incrementWidth)'});
}

// Function display stars next to progress bar
function progressStars(st) {
	$("#progress-bar-stars").empty();
	let i=0;
    while (i <= Math.min(st, 2)) {
		$("#progress-bar-stars").append('<img src="assets/images/star.png">');
		$("#progress-bar-stars img").addClass("stars-achievement");
		$("#progress-bar-stars").css("width","auto");
		i++;
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
			console.log("Your answer is correct");
		} else {
			points = 0;
			console.log("Your answer is wrong")
		};
		score = Number(getScore) + points;
		console.log("You got: " + points + "points");
		console.log("Your total points are :" + score);

		// Save score to local storage, accumulate score from previous one
		savedScore = score;
		localStorage.setItem(topic + "_score", savedScore);
		console.log(savedScore);
		console.log(localStorage.getItem(topic + "_score", savedScore));
		getScore = localStorage.getItem(topic + "_score", savedScore);
		console.log(getScore);

		// Call function progressBar to display the accumulative score in the progress bar 
		progressBar(progressBarPoint,savedScore);
		console.log("your progress bar after: " + progressBarPoint);
		$("#progress-bar-yellow").css("width", progressBarPoint + "%");
		
		// Assign stars if score reach each 1000 points
		stars = Math.min(Math.floor(savedScore / fullPoints), maxStars);
		console.log("You have now " + stars + " stars");

		// Listen for changes in stars value (ie. from 0 to 1 star, from 1 to 2 stars, and from 2 to 3 stars) by getting previous stars value, and comparing it to the newest stars value
		console.log("The stars you have before: " + getStars);
		let diffStars = stars - getStars;
		console.log(diffStars);
		if (diffStars >= 1) { 
			console.log(stars);
			console.log("CONGRATS!!");
			stopTimer();
			showModalStars(e);
			// Save the stars value into local storage
			localStorage.setItem(topic + "_stars", stars);
			getStars = localStorage.getItem(topic + "_stars", stars);
			//Display stars from previous stars
			//progressStars(getStars);
			return;
		}
		
		console.log(stars);

		// After 10th question is answered, a modal pops up
		const maxQuestion = 10;
		console.log(questionCounter === maxQuestion);
		console.log(availableQuestions.length === 0);
		if (questionCounter === maxQuestion) {
			if(diffStars === 0) {
				stopTimer();
				showModalTenQuestions(e);
			}
		} else {
			getNewQuestion();
		}
	});
});

// Function to show modal after 10 set of questions end
function showModalTenQuestions(e) {
	e.preventDefault();
	$("#modal-stars").modal("show");
	$("#stars-title").text("You’ve answered 10 questions and you’ve got " + score + " points in this round. Your total points are " + savedScore);
	console.log(score);
	console.log(score == 0);
	if (score == 0) {
		$("#stars-text").text("Ooopps.. was it harder than you thought, or did you just got distracted while answering the questions? Don't worry! You can redeem yourself by choosing 'Play Again'. You can see your all of your stars achievement by choosing ‘See my stars’. Or if you wish to quit the game, click the ‘Quit’ button.");
	} else {
	$("#stars-text").text("Not bad! What do you want to do next? You can choose ‘play again’ to challenge yourself and increase your points to get stars. You can see all of your stars achievement by choosing ‘See my stars’. Or if you wish to quit the game, click the ‘Quit’ button.");
	}
}

// Function to show modal after the user get an additional star
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
		$("#stars-text").text("Congratulations, level's completed for " + topic + " !! You’re now unofficially a " + topic + " professor! You know all about it. You read relevant articles about it and always keep up with the news. Play another trivia and see if you’re as amazing in another topics as well.")	
	}
}

// Function to save points and stars of a user to local storage, attached to click event of "Quit" button
function saveData() {
    // All the quiz's datas are put into a new object
    let datas = new Object();
    console.log(localStorage.getItem("Sports_stars"));
    datas = {
        sportsStars: localStorage.getItem("Sports_stars"),
        sportsScore: localStorage.getItem("Sports_score"),
        computerStars: localStorage.getItem("Computer_stars"),
        computerScore: localStorage.getItem("Computer_score"),
        musicStars: localStorage.getItem("Music_stars"),
        musicScore: localStorage.getItem("Music_score"),
        geographyStars: localStorage.getItem("Geography_stars"),
        geographyScore: localStorage.getItem("Geography_score"),
        filmStars: localStorage.getItem("Film_stars"),
        filmScore: localStorage.getItem("Film_score"),
        scienceStars: localStorage.getItem("Science_stars"),
        scienceScore: localStorage.getItem("Science_score"),
    }
    console.log(localStorage.getItem("player"));
    inputName = localStorage.getItem("player");
    localStorage.setItem(inputName, JSON.stringify(datas));
    console.log(JSON.stringify(datas));

    //remove all keys, except the data key inputName
    window.localStorage.removeItem('Sports_stars');
    window.localStorage.removeItem('Sports_score');
    window.localStorage.removeItem('Computer_stars');
    window.localStorage.removeItem('Computer_score');
    window.localStorage.removeItem('Music_stars');
    window.localStorage.removeItem('Music_score');
    window.localStorage.removeItem('Geography_stars');
    window.localStorage.removeItem('Geography_score');
    window.localStorage.removeItem('Film_stars');
    window.localStorage.removeItem('Film_score');
    window.localStorage.removeItem('Science_stars');
    window.localStorage.removeItem('Science_score');
};