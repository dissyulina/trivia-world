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
let result;

// Create a spin between 3000 - 6000 degree (code adapted and changed to jQuery, from youtube video: Weibenfalk - Vanilla Javascript Wheel of Fortune)
$("#btn-wheel").click(function() {
	$("#btn-wheel").css('pointer-events','none');
	deg = Math.floor(3000 + Math.random() * 8000);
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
	};

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
	//$("#question-topic").text("Topic : " + displayTopics[result][0]);

	console.log(result);
});

//When the user click 'Bring it on' Button, it stores the topic to the local storage
$("#btn-start-quiz").click(function(e) {
	e.preventDefault();
	localStorage.setItem("topicResult", displayTopics[result][0]);
	$(location).attr("href","question.html");
});



