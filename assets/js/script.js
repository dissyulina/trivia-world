//The script for spinning wheel was adapted and changed from youtube Weibenfalk - Vanilla Javascript Wheel of Fortune
// Immediately invoked function expression
(function () {
	let deg = 0;
	let sectionDeg = 30;

	const sectionNames = {
		1: "Science",
		2: "History",
		3: "Music",
		4: "Art",
		5: "Geography",
		6: "Sports",
		7: "Science",
		8: "History",
		9: "Music",
		10: "Art",
		11: "Geography",
		12: "Sports",
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
		const result = Math.ceil(actualDeg / sectionDeg);
		$("#topic-title").text("You got: " + sectionNames[result]);

	});
})();