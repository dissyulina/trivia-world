//Variables declaration for Username
let inputName;
let userName;
let data;

//Show modal on window load
$(window).on('load', function() {
	$("#username-modal").modal('show');
});

//Event listener as the username has been filled and the submit button is clicked
$('#submit-username').on('click', function(e) {
    e.preventDefault();
    inputName = $('#username').val();

	// Check if user already exist as a key in local storage
	console.log(localStorage.getItem(inputName));
	if((inputName === "") || (localStorage.getItem(inputName) === null)) {
		console.log("new player");
		localStorage.setItem('player',inputName);
	} else {
		console.log("data player exists");

		// Retrieve the JSON string, parse it to object
		localStorage.setItem('player',inputName);
		data = JSON.parse(localStorage.getItem(inputName));
		console.log(data);

		// Set object back as keys in local storage
		localStorage.setItem("Sports_score", data.sportsScore);
		localStorage.setItem("Sports_stars", data.sportsStars);
		localStorage.setItem("History_score", data.historyScore);
		localStorage.setItem("History_stars", data.historyStars);
		localStorage.setItem("Music_score", data.musicScore);
		localStorage.setItem("Music_stars", data.musicStars);
		localStorage.setItem("Film_score", data.filmScore);
		localStorage.setItem("Film_stars", data.filmStars);
		localStorage.setItem("Geography_score", data.geographyScore);
		localStorage.setItem("Geography_stars", data.geographyStars);
		localStorage.setItem("Science_score", data.scienceScore);
		localStorage.setItem("Science_stars", data.scienceStars);
	}
});
