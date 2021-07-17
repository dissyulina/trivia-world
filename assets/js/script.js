//Script for the Spinning Wheel
const displayTopics = {
	1: ["Science", "assets/images/science.jpg"],
	2: ["History", "assets/images/history.jpg"],
	3: ["Music", "assets/images/music.jpg"],
	4: ["Art", "assets/images/art.jpg"],
	5: ["Geography", "assets/images/geography.jpg"],
	6: ["Sports", "assets/images/sports.jpg"],
}

let deg = 0;

// if wheel = true (to prevent error in other pages)
let wheel = document.getElementById('wheel');
if(wheel) {
	// Create a spin between 3000 - 6000 degree (code adapted and changed to jQuery, from youtube video: Weibenfalk - Vanilla Javascript Wheel of Fortune)
	$("#btn-wheel").click(function() {
		$("#btn-wheel").css('pointer-events','none');
		deg = Math.floor(3000 + Math.random() * 3000);
		$("#wheel").css("transition","all 7s ease-out");
		$("#wheel").css("transform","rotate(" + deg + "deg)");
		$("#wheel").addClass("blur");
	});

	// As soon as the transition ends (code adapted and changed to jQuery, from youtube video: Weibenfalk - Vanilla Javascript Wheel of Fortune)
	wheel.addEventListener('transitionend', () => {
		$("#btn-wheel").css('pointer-events','auto');
		$("#wheel").removeClass("blur");
		// Calculate the actual deg (0-360deg), because we want the next spin to start from that degree, and transform the wheel instantly without the user seeing it
		const actualDeg = deg % 360;
		$("#wheel").css("transition","none");
		$("#wheel").css("transform","rotate(" + actualDeg + "deg)");


		// Calculate and display the result
		$("#modal-topic").modal("show");
		let sectionDeg = 30;
		let result = Math.ceil(actualDeg / sectionDeg);
		if (result > 6) {
			result = result - 6;
		}
		$("#topic-title").text("You got: " + displayTopics[result][0] + "!");

		// Display the complete content to the modal
		$(".topic-explanation").text("You’ll get 10 questions related to" + displayTopics[result][0] + ". For each question you answered correctly, you’ll get between 50 - 200 points. But watch out for the timer! You only have 10 seconds to answer each question.");
		$(".topic-explanation").append("<p>Are you ready?</p>");
		// Empty the div (delete the image from previous spin), then add the new image according to the topic
		$(".topic-image").empty();
		$(".topic-image").append('<img src="' + displayTopics[result][1] + '">');
		$(".topic-image").children("img").addClass("img-fluid");

	});
};


// Script for the Quiz
let quizData = [
	{
		question: "What Los Angeles community is noted for celebrities and mansions?",
		choice1: "A) Nob Hill",
		choice2: "B) Beverly Hills",
		choice3: "C) Chestnut Hill",
		choice4: "D) Bunker Hill",
		answer: 2,
	},
	{
		question: "Which country has the largest capacity reservoir in the world?",
		choice1: "A) Egypt",
		choice2: "B) United States",
		choice3: "C) Uganda",
		choice4: "D) Brazil",
		answer: 3,
	},
	{
		question: "Substances that have fast-moving particles that are far apart, and have no definite volume nor shape are:",
		choice1: "A) Gases",
		choice2: "B) Liquids",
		choice3: "C) Solids",
		choice4: "D) None of the above",
		answer: 1,
	},
	{
		question: "Which state is known as the “Beehive State”?",
		choice1: "A) North Dakota",
		choice2: "B) Oregon",
		choice3: "C) Georgia",
		choice4: "D) Utah",
		answer: 4,
	},
	{
		question: "The First Triumvirate was established in 60 B.C. by Julius Caesar, Marcus Licinius Crassus, and this Roman general and consul. He was one of Caesar’s many enemies and his son-in-law,he became a ruler of Rome. Who was he?",
		choice1: "A) Augustus Caesar",
		choice2: "B) Marcus Brutus",
		choice3: "C) Marc Antony",
		choice4: "D) Pompey",
		answer: 4,
	},
	{
		question: "Which member of Chicago killed himself in 1978?",
		choice1: "A) Terry Kath",
		choice2: "B) Tommy Bolin",
		choice3: "C) Rick Desmond",
		choice4: "D) Johnny Hendrix",
		answer: 1,
	},
	{
		question: "Which country is home to Yap, Chuuk, and Pohnpei Islands?",
		choice1: "A) Micronesia",
		choice2: "B) Marshall Islands",
		choice3: "C) Fiji",
		choice4: "D) Kiribati",
		answer: 1,
	},
	{
		question: "What does a vulcanologist study?",
		choice1: "A) Constellations",
		choice2: "B) Plants",
		choice3: "C) Volcanoes",
		choice4: "D) Biology",
		answer: 3,
	},
	{
		question: "What U.S. state has the most counties?",
		choice1: "A) Texas",
		choice2: "B) California",
		choice3: "C) Alabama",
		choice4: "D) Minnesota",
		answer: 1,
	},
	{
		question: "Birds have two:",
		choice1: "A) Livers",
		choice2: "B) Stomachs",
		choice3: "C) Brains",
		choice4: "D) Bladders",
		answer: 2,
	},
	{
		question: "Scientists today estimate that the first star was born _______ years after the big bang.",
		choice1: "A) 1/2 Billion Years",
		choice2: "B) 1 Billion Years",
		choice3: "C) 200 Million Years",
		choice4: "D) 15 Million Years",
		answer: 1,
	},
];

const question = document.getElementById("question-text");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = false; //let the user submitting answer
let score = 0; //score starts from 0
let questionCounter = 0; //what number of question are the user on
let availableQuestions =[]; // an array of our question set

const correctPoints = 200;
const maxQuestion = 5;
console.log(question);

// if there's question element (if statement to prevent error in other html pages)
if (question) {
	startGame = () => {
		accumulativePoints = 0;
		availableQuestions = [...quizData]; //spread the quizData array and put it into the availableQuestion array
		console.log(availableQuestions);
		getNewQuestion();
	};
	
	getNewQuestion = () => {
		if (availableQuestions.length === 0) {
			console.log("The end");
			return window.location.assign("/index.html");
		};
		questionCounter++;
		const questionIndex = Math.floor(Math.random() * availableQuestions.length); //set a random number to get a random question from the available questions left
		currentQuestion = availableQuestions[questionIndex];
		console.log(questionIndex);
		console.log(availableQuestions[questionIndex]);
		console.log(question);
		question.innerHTML = currentQuestion.question;

		// display each of the choices into the html content
		choices.forEach(choice => {
			const number = choice.dataset['number'];
			choice.innerHTML = currentQuestion["choice" + number];
		});
	
		//take out the question that has been used
		availableQuestions.splice(questionIndex, 1);
		acceptingAnswers = true;
	
	};
	
	//when a choice is clicked, record the choice and move on to next question
	choices.forEach(choice => {
		choice.addEventListener("click", e => {
			if (!acceptingAnswers) return;
			acceptingAnswers = false;
			const selectedChoice = e.target;
			const selectedAnswer = selectedChoice.dataset["number"];
			console.log(selectedAnswer);
			getNewQuestion();
	
		});
	});
	
	startGame();
};




	
	
	
	

	







	//var elems = document.getElementsByTagName( "div" );
// Convert the NodeList to an Array
//var arr = jQuery.makeArray( elems );
	//let choices = jQuery.makeArray(document.getElementsByClassName("choice-text"));
	//$(".choice-text").makeArray();
	//console.log($(".choice-text").makeArray());
