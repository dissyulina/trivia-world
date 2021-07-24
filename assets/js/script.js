
$(window).on('load', function() {
	$("#username-modal").modal('show');
});

let inputName;
let userName;
let data;
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
		console.log(data.sportsScore);
		console.log(data.musicScore);
		// Set object back as keys in local storage
	
		localStorage.setItem("Sports_score", data.sportsScore);
		localStorage.setItem("Sports_stars", data.sportsStars);
		localStorage.setItem("History_score", data.historyScore);
		localStorage.setItem("History_stars", data.historyStars);
		localStorage.setItem("Music_score", data.musicScore);
		localStorage.setItem("Music_stars", data.musicStars);
		localStorage.setItem("Art_score", data.artScore);
		localStorage.setItem("Art_stars", data.artStars);
		localStorage.setItem("Geography_score", data.geographyScore);
		localStorage.setItem("Geography_stars", data.geographyStars);
		localStorage.setItem("Science_score", data.scienceScore);
		localStorage.setItem("Science_stars", data.scienceStars);
		

	}

});
/*

var user = new Array();
player1 = new Object();
player1 = {
	name: inputName,
	Sports_stars: 0,
	Sports_score: 0,
	History_stars: 0,
	History_score: 0,
	Music_stars: 0,
	Music_score: 0,
	Geography_stars: 0,
	Geography_score: 0,
	Art_stars: 0,
	Art_score: 0,
	Science_stars: 0,
	Science_score: 0,
}


let 
let userName = sessionStorage.getItem("userName"); // Load username

function checkUser() {
    // check if user already exists
    if ((userName === null) || (userName === "Player") || (userName === "")) {
        sessionStorage.setItem("tvHighScore", 0);
        sessionStorage.setItem("chartHighScore", 0);
        sessionStorage.setItem("tbHighScore", 0);
        sessionStorage.setItem("movieHighScore", 0);
        
        // If user does not exist, they have to enter data
        $("#player-info").css("display", "block");
    }
    else {
        userName = sessionStorage.getItem("userName");

        sessionStorage.getItem("tvHighScore");
        sessionStorage.getItem("chartHighScore");
        sessionStorage.getItem("tbHighScore");
        sessionStorage.getItem("movieHighScore");

        $("#player-info").css("display", "none");
        $("#header").css("display", "block");
        $("#home").css("display", "block");
        $(".footer-home").css("display", "block");
        $(".footer-sm").css("display", "block");
        return;
    }
}


function userData() {
    // enters player information
    userName = $('#username').val();

    sessionStorage.setItem("userName", userName);
    
    if ((userName)|| ((userName !== null) && (userName !== "Player") && (userName !== ""))) { 
        $("#player-info").css("display", "none");
        $("#header").css("display", "block");
        $("#home").css("display", "block");
        $(".footer-home").css("display", "block");
        $(".footer-sm").css("display", "block");
    }
}
*/