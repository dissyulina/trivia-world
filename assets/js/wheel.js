//Script for the Spinning Wheel
const displayTopics = {
	1: ["Science", "assets/images/science.jpg"],
	2: ["Computer", "assets/images/computer.jpg"],
	3: ["Music", "assets/images/music.jpg"],
	4: ["Film", "assets/images/film.jpg"],
	5: ["Geography", "assets/images/geography.jpg"],
	6: ["Sports", "assets/images/sports.jpg"],
}
/*
const displayTopics = {
	1: ["Science", "assets/images/science.jpg","https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple"],
	2: ["Computer", "assets/images/computer.jpg","https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple"],
	3: ["Music", "assets/images/music.jpg","https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple"],
	4: ["Film", "assets/images/film.jpg","https://opentdb.com/api.php?amount=10&category=25&difficulty=easy&type=multiple"],
	5: ["Geography", "assets/images/geography.jpg","https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple"],
	6: ["Sports", "assets/images/sports.jpg","https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple"],
}
*/
let deg = 0;
let result;

// Create a spin between 3000 - 6000 degree (code adapted and changed to jQuery, from youtube video: Weibenfalk - Vanilla Javascript Wheel of Fortune)
$("#btn-wheel").click(function() {
	$("#btn-wheel").css('pointer-events','none');
	deg = Math.floor(3600 + Math.random() * 7200);
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


// Function save data
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