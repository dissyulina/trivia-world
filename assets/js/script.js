// Immediately invoked function expression
(function () {
	const wheel = document.querySelector('#wheel');
	const buttonSpin = document.querySelector('#btn-wheel');
	let deg = 0;

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
		// Calculate the actual deg (0-360deg) and transform the wheel instantly without the user seeing it
		const actualDeg = deg % 360;
		wheel.style.transition = 'none';
		wheel.style.transform = `rotate(${actualDeg}deg)`;
	});
})();