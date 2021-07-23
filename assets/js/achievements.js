//var topic = localStorage.getItem("History_stars");
//console.log(topic)
let topicArrays = $(".stars-achievement-wrapper");
let numberOfStars;
let achievementNames = {
    Sports_stars : topicArrays[0],
    Geography_stars : topicArrays[1],
    Art_stars : topicArrays[2],
    History_stars : topicArrays[3],
    Science_stars : topicArrays[4],
    Music_stars : topicArrays[5],
}



// append stars for Sports
//document.addEventListener("DOMContentLoaded", function() {


    //let topicArrays = document.getElementsByClassName("stars-achievement-wrapper");
    console.log(topicArrays);
    console.log(topicArrays[0]);

    for (let i in achievementNames) {
        console.log(achievementNames[i], " stars is for ", i, localStorage.getItem(i));
        console.log(localStorage.getItem(i));
        console.log(achievementNames[i]);
        numberOfStars = localStorage.getItem(i);
        //let image = document.createElement("img");
        let x=0;
        while (x < numberOfStars) {
            let image = document.createElement("img");
            image.src = "assets/images/star.png";
            image.className = "stars-achievement";
            achievementNames[i].appendChild(image);
            x++;
        }
        /*
        if (numberOfStars == 1) {
            document.createElement("img");
            image.className = "stars-achievement";
            image.src = "assets/images/star.png";
            achievementNames[i].appendChild(image);
        } else if (numberOfStars == 2) {
            numberOfStars = 2;
            displayStars();
	
        } else if (numberOfStars == 3) {
            achievementNames[i].append('<img src="assets/images/star.png">');
            achievementNames[i].append('<img src="assets/images/star.png">');
            achievementNames[i].append('<img src="assets/images/star.png">');
            //achievementNames[i].children("img").addClass("star-modal");
        }
        */
    }
    
//});

function displayStars() {
    let x=0;
    while (x < numberOfStars) {
        document.createElement("img");
        document.createElement("img").src = "assets/images/star.png";
        document.createElement("img").className = "stars-achievement";
        achievementNames[i].appendChild(image);
        x++;
    }
}