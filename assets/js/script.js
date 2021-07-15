//The script for spinning the wheel was adapted and changed from youtube: Weibenfalk - Vanilla Javascript Wheel of Fortune
// Immediately invoked function expression
(function () {
	let deg = 0;
	let sectionDeg = 30;
/*
	const displayTopics = {
		1: "Science",
		2: "History",
		3: "Music", 
		4: "Art", 
		5: "Geography", 
		6: "Sports", 
	}
*/

	const displayTopics = {
		1: ["Science", "assets/images/science.jpg"],
		2: ["History", "assets/images/history.jpg"],
		3: ["Music", "assets/images/music.jpg"],
		4: ["Art", "assets/images/art.jpg"],
		5: ["Geography", "assets/images/geography.jpg"],
		6: ["Sports", "assets/images/sports.jpg"],
	}


	// Create a spin between 3000 - 6000 degree
	$("#btn-wheel").click(function() {
		$("#btn-wheel").css('pointer-events','none');
		deg = Math.floor(3000 + Math.random() * 3000);
		$("#wheel").css("transition","all 7s ease-out");
		$("#wheel").css("transform","rotate(" + deg + "deg)");
		$("#wheel").addClass("blur");
	});

	// As soon as the transition ends
	document.getElementById("wheel").addEventListener('transitionend', () => {
		$("#btn-wheel").css('pointer-events','auto');
		$("#wheel").removeClass("blur");
		// Calculate the actual deg (0-360deg), because we want the next spin to start from that degree.
		// and transform the wheel instantly without the user seeing it
		const actualDeg = deg % 360;
		$("#wheel").css("transition","none");
		$("#wheel").css("transform","rotate(" + actualDeg + "deg)");
	
/*
	wheel.addEventListener('transitionend', () => {
		buttonSpin.style.pointerEvents = 'auto';
		wheel.classList.remove('blur');
		// Calculate the actual deg (0-360deg), because we want the next spin to start from that degree.
		// and transform the wheel instantly without the user seeing it
		const actualDeg = deg % 360;
		wheel.style.transition = 'none';
		wheel.style.transform = `rotate(${actualDeg}deg)`;
*/

		// Calculate and display the result
		$("#modal-topic").modal("show");
		let result = Math.ceil(actualDeg / sectionDeg);
		if (result > 6) {
			result = result - 6;
		}
		$("#topic-title").text("You got: " + displayTopics[result][0] + "!");

		// Display the complete content to the modal
		$(".topic-explanation").text("You’ll get 10 questions related to" + displayTopics[result][0] + ". For each question you answered correctly, you’ll get between 50 - 200 points. But watch out for the timer! You only have 10 seconds to answer each question.");
		$(".topic-explanation").append("<p>Are you ready?</p>");

		$(".topic-image").append('<img src="' + displayTopics[result][1] + '">"');
		$(".topic-image").children("img").addClass("img-fluid");

	});
})();