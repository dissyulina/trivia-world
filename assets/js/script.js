// Variables declaration for Username
let inputName;
let userName;
let data;
let lastPlayer;

// Check last player on local storage
lastPlayer = localStorage.getItem('player',lastPlayer);
console.log(lastPlayer === null);

// If there's no lastPlayer saved in the local storage, show up modal to input username
if (lastPlayer === null) {
	$(window).on('load', function() {
		$("#username-modal").modal('show');
	});
} else {
	$("#last-player").text(lastPlayer);
	inputName = lastPlayer;
	retrieveData();
}

$('#btn-player').on('click', function(e) {
	saveData();
	$("#username-modal").modal('show');
    $("#username-modal h5").text("Change Player");
    $("#username-modal p").text("Add a new player or input your saved username");
});

//Event listener as the username has been filled and the submit button is clicked
$('#submit-username').on('click', function(e) {
    e.preventDefault();
    inputName = $('#username').val();

	// Check if user already exist as a key in local storage
	console.log(localStorage.getItem(inputName));
	if((inputName === "") || (localStorage.getItem(inputName) === null)) {
		console.log("new player");
		$("#last-player").text(inputName);
		localStorage.setItem('player',inputName);
	} else {
		console.log("data player exists");
		$("#last-player").text(inputName);
		retrieveData();
	}
});

function retrieveData() {
	// Retrieve the JSON string, parse it to object
	localStorage.setItem('player',inputName);
	data = JSON.parse(localStorage.getItem(inputName));
	console.log(data);

    if(data) {
        // Set object back as keys in local storage
        localStorage.setItem("Sports_score", data.sportsScore);
        localStorage.setItem("Sports_stars", data.sportsStars);
        localStorage.setItem("Computer_score", data.computerScore);
        localStorage.setItem("Computer_stars", data.computerStars);
        localStorage.setItem("Music_score", data.musicScore);
        localStorage.setItem("Music_stars", data.musicStars);
        localStorage.setItem("Film_score", data.filmScore);
        localStorage.setItem("Film_stars", data.filmStars);
        localStorage.setItem("Geography_score", data.geographyScore);
        localStorage.setItem("Geography_stars", data.geographyStars);
        localStorage.setItem("Science_score", data.scienceScore);
        localStorage.setItem("Science_stars", data.scienceStars);
    }

}
