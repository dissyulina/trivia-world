//Script for the Spinning Wheel

//Variables declaration
let deg = 0;
let result;
const displayTopics = {
	1: ["Science", "assets/images/science.jpg"],
	2: ["Computer", "assets/images/computer.jpg"],
	3: ["Music", "assets/images/music.jpg"],
	4: ["Film", "assets/images/film.jpg"],
	5: ["Geography", "assets/images/geography.jpg"],
	6: ["Sports", "assets/images/sports.jpg"],
};

// Create a spin between 3000 - 6000 degree (code sourced from youtube video: Weibenfalk - Vanilla Javascript Wheel of Fortune, and changed to jQuery by the developer.)
$("#btn-wheel").click(function() {
	$("#btn-wheel").css('pointer-events','none');
	deg = Math.floor(3600 + Math.random() * 7200);
	$("#wheel").css("transition","all 7s ease-out");
	$("#wheel").css("transform","rotate(" + deg + "deg)");
	$("#wheel").addClass("blur");
	$("#wheel-sound")[0].play();
});

// As soon as the transition ends (code until line 39 was sourced from youtube video: Weibenfalk - Vanilla Javascript Wheel of Fortune, and changed to jQuery by the developer. Added comments as the developer understands the process)
document.getElementById("wheel").addEventListener("transitionend", function() {
	$("#btn-wheel").css('pointer-events','auto');
	$("#wheel").removeClass("blur");
	//$("#wheel-sound")[0].pause();
	//$("#wheel-sound")[0].currentTime = 0;

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

	//Call the showModalTopic function after 0.5 second (to allow the user to see at which topic the wheel stops)
	setTimeout(showModalTopic, 500);
});

// Function to show the result in a modal
function showModalTopic() {
	// Show the modal pop up
	$("#modal-topic").modal("show");
	$("#topic-sound")[0].play();
	$("#topic-title").text("You got: " + displayTopics[result][0] + "!");

	// Display the complete content to the modal
	$(".topic-explanation").text("You’ll get 10 questions related to " + displayTopics[result][0] + ". For each question you answered correctly, you’ll get between 100 - 250 points. But watch out for the timer! You only have 20 seconds to answer each question.");
	$(".topic-explanation").append("<p>Are you ready?</p>");

	// Empty the div (delete the image from previous spin), then add the new image according to the topic
	$(".topic-image").empty();
	$(".topic-image").append('<img src="' + displayTopics[result][1] + '">');
	$(".topic-image").children("img").addClass("img-fluid");
}

//When the user click 'Bring it on' Button, it stores the topic to the local storage
$("#btn-start-quiz").click(function(e) {
	e.preventDefault();
	localStorage.setItem("topicResult", displayTopics[result][0]);
	$(location).attr("href","question.html");
});