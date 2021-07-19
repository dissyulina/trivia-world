//Script for the Spinning Wheel
const displayTopics = {
	1: ["Science", "assets/images/science.jpg","https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple"],
	2: ["History", "assets/images/history.jpg","https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple"],
	3: ["Music", "assets/images/music.jpg","https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple"],
	4: ["Art", "assets/images/art.jpg","https://opentdb.com/api.php?amount=10&category=25&difficulty=easy&type=multiple"],
	5: ["Geography", "assets/images/geography.jpg","https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple"],
	6: ["Sports", "assets/images/sports.jpg","https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple"],
}

let deg = 0;
var result;

// if wheel = true (to prevent error in other pages)
//let wheel = document.getElementById('wheel');
if(document.getElementById('wheel')) {
	// Create a spin between 3000 - 6000 degree (code adapted and changed to jQuery, from youtube video: Weibenfalk - Vanilla Javascript Wheel of Fortune)
	$("#btn-wheel").click(function() {
		$("#btn-wheel").css('pointer-events','none');
		deg = Math.floor(3000 + Math.random() * 3000);
		$("#wheel").css("transition","all 7s ease-out");
		$("#wheel").css("transform","rotate(" + deg + "deg)");
		$("#wheel").addClass("blur");
	});

	// As soon as the transition ends (code adapted and changed to jQuery, from youtube video: Weibenfalk - Vanilla Javascript Wheel of Fortune)
	document.getElementById("wheel").addEventListener("transitionend", function() {
		$("#btn-wheel").css('pointer-events','auto');
		$("#wheel").removeClass("blur");

		// Calculate the actual deg (0-360deg), because we want the next spin to start from that degree, and transform the wheel instantly without the user seeing it
		const actualDeg = deg % 360;
		$("#wheel").css("transition","none");
		$("#wheel").css("transform","rotate(" + actualDeg + "deg)");

		// Calculate and display the result
		const sectionDeg = 30;
		result = Math.ceil(actualDeg / sectionDeg);
		if (result > 6) {
			result = result - 6;
		}

		// Show the modal pop up
		$("#modal-topic").modal("show");
		$("#topic-title").text("You got: " + displayTopics[result][0] + "!");

		// Display the complete content to the modal
		$(".topic-explanation").text("You’ll get 10 questions related to" + displayTopics[result][0] + ". For each question you answered correctly, you’ll get between 50 - 200 points. But watch out for the timer! You only have 10 seconds to answer each question.");
		$(".topic-explanation").append("<p>Are you ready?</p>");

		// Empty the div (delete the image from previous spin), then add the new image according to the topic
		$(".topic-image").empty();
		$(".topic-image").append('<img src="' + displayTopics[result][1] + '">');
		$(".topic-image").children("img").addClass("img-fluid");
		$("#question-topic").text("Topic : " + displayTopics[result][0]);

		console.log(result === undefined);
		topic = result;
	
	});
	console.log(result === undefined);

};
/*
const sectionDeg = 30;
function calculateTopic(spin) {
	
	result = Math.ceil(spin / sectionDeg);
	if (result > 6) {
		result = result - 6;
	}
	return result;
}
*/
// Script for the Quiz

//const question = document.getElementById("question-text");
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
console.log(result === undefined);

// this only applies to the Question.html page (if statement to prevent error in other html pages)

if ($("body").data("title") === "question-page") {

	//Fetch API for quiz data
	fetch("https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple")
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
		// handle error scenario
		.catch(err => {
			console.error(err);
		});


	startGame = () => {
		accumulativePoints = 0;
		availableQuestions = [...quizDatas]; //spread the quizDatas array and put it into the availableQuestion array
		console.log(availableQuestions);
		getNewQuestion();
	};
	
	getNewQuestion = () => {
	
		if (availableQuestions.length === 0) {
			console.log("The end");
			return window.location.assign("/index.html");
		};
		questionCounter++;
		points = correctPoints[Math.floor(Math.random() * correctPoints.length)]; // assign one of the points randomly from the correctPoints array 
		const questionIndex = Math.floor(Math.random() * availableQuestions.length); //set a random number to get a random question from the available questions left
		currentQuestion = availableQuestions[questionIndex];

		//display points, question number, and the question to the html
		$("#question-number").text("Question " + questionCounter);
		$("#question-points").text("Your question worth: " + points);
		$("#question-topic").text("Topic : " + result);
		$("#question-text").text(currentQuestion.question);
		//replace error string &#039; and &quot; with a single quote and a double quote
		$('#question-text').text(function(index,text){
			return text.replace("&#039;","'");
		});
		$('#question-text').text(function(index,text){
			return text.replace('&quot;','""');
		});

		// display each of the choices into the html content
		choices.forEach(choice => {
			const number = choice.dataset['number'];
			choice.innerHTML = currentQuestion["choice" + number];
		});

		// call function countdown for the timer
		countdown();
		
		//take out the question that has been used
		availableQuestions.splice(questionIndex, 1);
		acceptingAnswers = true;
	
	};
	let counter;
	// set 10 seconds timer
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
	
	// after a choice is clicked, record the choice, stop the countdown, and move on to next question, 
	choices.forEach(choice => {
		choice.addEventListener("click", e => {
			if (!acceptingAnswers) return;
			acceptingAnswers = false;
			const selectedChoice = e.target;
			const selectedAnswer = selectedChoice.dataset["number"];
			clearInterval(counter);
			//if the answer is correct, add points into score
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
	
};




	
	
	
	

	







	//var elems = document.getElementsByTagName( "div" );
// Convert the NodeList to an Array
//var arr = jQuery.makeArray( elems );
	//let choices = jQuery.makeArray(document.getElementsByClassName("choice-text"));
	//$(".choice-text").makeArray();
	//console.log($(".choice-text").makeArray());
