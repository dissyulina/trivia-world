// Script for Stars Achievement display

// Variables declaration
let numberOfStars;
let topicArrays = $(".stars-achievement-wrapper");
let completeAchievementArray = $(".complete-achievement-wrapper");
let achievementDatas = {
    Sports_stars : [topicArrays[0], completeAchievementArray[0]],
    Geography_stars : [topicArrays[1], completeAchievementArray[1]],
    Film_stars : [topicArrays[2], completeAchievementArray[2]],
    Computer_stars : [topicArrays[3], completeAchievementArray[3]],
    Science_stars : [topicArrays[4], completeAchievementArray[4]],
    Music_stars : [topicArrays[5], completeAchievementArray[5]],
}

// Iterate through achievementDatas, display stars
for (let i in achievementDatas) {

    numberOfStars = localStorage.getItem(i);

    // According to the how many numberOfStars, create stars
    let j=0;
    while (j < numberOfStars) {
        let image = document.createElement("img");
        image.src = "assets/images/star.png";
        image.className = "stars-achievement";
        achievementDatas[i][0].appendChild(image);
        j++;
    }

    // If the numberOfStars is null, create an empty div with the same height and width
    if ((numberOfStars === null) || (numberOfStars === "null")) {
        let emptyDiv = document.createElement("div");
        emptyDiv.className = "stars-achievement";
        achievementDatas[i][0].append(emptyDiv);
    }

    // Display "Complete" if number of stars = 3
    if ((numberOfStars === "3")) {
        achievementDatas[i][1].innerHTML ='<p>Complete <span><i class="fas fa-check"></i></span></p>';
        achievementDatas[i][1].children[0].className = "complete-achievement-text";
    } else {
        // Create an empty div so that every topic will be at the same line
        let emptyText = document.createElement("p");
        emptyText.className = "complete-achievement-text";
        achievementDatas[i][1].append(emptyText);
    }
}
