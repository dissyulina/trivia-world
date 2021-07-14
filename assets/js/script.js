//The script for spinning wheel was adapted and changed from youtube Weibenfalk - Vanilla Javascript Wheel of Fortune
// Immediately invoked function expression
(function () {
	const wheel = document.querySelector('#wheel');
	const buttonSpin = document.querySelector('#btn-wheel');
	const modalTopic = document.querySelector('#modal-topic')
	const topicName = document.querySelector('#modal-title');
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
	/*
	const handleResult = (actualDeg) => {
		
	}
	*/
	$("#modal-topic").modal("hide");

	// Create a spin between 3000 - 6000 degree
	buttonSpin.addEventListener('click', () => {
		buttonSpin.style.pointerEvents = 'none';
		deg = Math.floor(3000 + Math.random() * 3000);
		wheel.style.transition = 'all 7s ease-out';
		wheel.style.transform = `rotate(${deg}deg)`;
		wheel.classList.add('blur');
	});

	// As soon as the transition ends
	wheel.addEventListener('transitionend', () => {
		buttonSpin.style.pointerEvents = 'auto';
		wheel.classList.remove('blur');
		// Calculate the actual deg (0-360deg), because we want the next spin to start from that degree.
		// and transform the wheel instantly without the user seeing it
		const actualDeg = deg % 360;
		wheel.style.transition = 'none';
		wheel.style.transform = `rotate(${actualDeg}deg)`;
		// Calculate and display the result
		//handleResult(actualDeg);
		$('#modal-topic').appendTo("body").modal('show');
		//$("#modal-topic").modal("show");
		//modalTopic.modal("show");
		const result = Math.ceil(actualDeg / sectionDeg);
		topicName.innerHTML = sectionNames[result];

	});
})();