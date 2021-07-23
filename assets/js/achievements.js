// Script for Stars Achievement display

let topicArrays = $(".stars-achievement-wrapper");
let achievementDatas = {
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
    // for every topic_stars in achievementDatas, count the number of stars, and display them in the matching achievementDatas[i] element.
    for (let i in achievementDatas) {
        console.log(achievementDatas[i], " stars is for ", i, localStorage.getItem(i));
        console.log(localStorage.getItem(i));
        console.log(achievementDatas[i]);
        numberOfStars = localStorage.getItem(i);

        // according to the how many numberOfStars, do this
        let j=0;
        while (j < numberOfStars) {
            let image = document.createElement("img");
            image.src = "assets/images/star.png";
            image.className = "stars-achievement";
            achievementDatas[i].appendChild(image);
            j++;
        }
        // if the numberOfStars is null, create an empty div with the same height and width
        if (numberOfStars === null) {
            let emptyDiv = document.createElement("div");
            emptyDiv.className = "stars-achievement";
            achievementDatas[i].appendChild(emptyDiv);
        }
    }
