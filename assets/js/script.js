//Variables declaration for Username
let inputName;
let userName;
let data;
let lastPlayer;

//Check last player on local storage
lastPlayer = localStorage.getItem('player',lastPlayer);
console.log(lastPlayer === null);

//If there's no lastPlayer saved in the local storage, show up modal to input username
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
});

//Show modal on window load
//$(window).on('load', function() {
//	$("#username-modal").modal('show');
//});

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

function saveData() {
    // All the quiz's datas are put into a new object
    let datas = new Object();
    console.log(localStorage.getItem("Sports_stars"));
    datas = {
        sportsStars: localStorage.getItem("Sports_stars"),
        sportsScore: localStorage.getItem("Sports_score"),
        computerStars: localStorage.getItem("Computer_stars"),
        computerScore: localStorage.getItem("Computer_score"),
        musicStars: localStorage.getItem("Music_stars"),
        musicScore: localStorage.getItem("Music_score"),
        geographyStars: localStorage.getItem("Geography_stars"),
        geographyScore: localStorage.getItem("Geography_score"),
        filmStars: localStorage.getItem("Film_stars"),
        filmScore: localStorage.getItem("Film_score"),
        scienceStars: localStorage.getItem("Science_stars"),
        scienceScore: localStorage.getItem("Science_score"),
    }
    console.log(localStorage.getItem("player"));
    inputName = localStorage.getItem("player");
    localStorage.setItem(inputName, JSON.stringify(datas));
    console.log(JSON.stringify(datas));

    //remove all keys, except the data key inputName
    window.localStorage.removeItem('Sports_stars');
    window.localStorage.removeItem('Sports_score');
    window.localStorage.removeItem('Computer_stars');
    window.localStorage.removeItem('Computer_score');
    window.localStorage.removeItem('Music_stars');
    window.localStorage.removeItem('Music_score');
    window.localStorage.removeItem('Geography_stars');
    window.localStorage.removeItem('Geography_score');
    window.localStorage.removeItem('Film_stars');
    window.localStorage.removeItem('Film_score');
    window.localStorage.removeItem('Science_stars');
    window.localStorage.removeItem('Science_score');
};