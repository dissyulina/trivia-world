//var topic = localStorage.getItem("History_stars");
//console.log(topic)
let topicArrays = $(".stars-achievement-wrapper");
let achievementNames = {
    Sports_stars : topicArrays[0],
    Geography_stars : topicArrays[1],
    Art_stars : topicArrays[2],
    History_stars : topicArrays[3],
    Science_stars : topicArrays[4],
    Music_stars : topicArrays[5],
}
let numberOfStars;


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
        let j=0;
        while (j < numberOfStars) {
            let image = document.createElement("img");
            image.src = "assets/images/star.png";
            image.className = "stars-achievement";
            achievementNames[i].appendChild(image);
            j++;
        }
        if (numberOfStars === null) {
            let emptyDiv = document.createElement("div");
            emptyDiv.className = "stars-achievement";
            achievementNames[i].appendChild(emptyDiv);
        }

