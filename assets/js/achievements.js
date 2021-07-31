// Script for Stars Achievement display

let topicArrays = $(".stars-achievement-wrapper");
let achievementDatas = {
    Sports_stars : topicArrays[0],
    Geography_stars : topicArrays[1],
    Film_stars : topicArrays[2],
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
        if ((numberOfStars === null) || (numberOfStars === "null")) {
            let emptyDiv = document.createElement("div");
            emptyDiv.className = "stars-achievement";
            achievementDatas[i].appendChild(emptyDiv);
        }
    }

function saveData() {
    // All the quiz's datas are put into a new object
    let datas = new Object();
    console.log(localStorage.getItem("Sports_stars"));
    datas = {
        sportsStars: localStorage.getItem("Sports_stars"),
        sportsScore: localStorage.getItem("Sports_score"),
        historyStars: localStorage.getItem("History_stars"),
        historyScore: localStorage.getItem("History_score"),
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
    window.localStorage.removeItem('History_stars');
    window.localStorage.removeItem('History_score');
    window.localStorage.removeItem('Music_stars');
    window.localStorage.removeItem('Music_score');
    window.localStorage.removeItem('Geography_stars');
    window.localStorage.removeItem('Geography_score');
    window.localStorage.removeItem('Film_stars');
    window.localStorage.removeItem('Film_score');
    window.localStorage.removeItem('Science_stars');
    window.localStorage.removeItem('Science_score');
};