// Script for Stars Achievement display

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
let numberOfStars;

console.log(topicArrays);
console.log(topicArrays[0]);
for (let i in achievementDatas) {
    console.log(achievementDatas[i][0], " stars is for ", i, localStorage.getItem(i));
    console.log(localStorage.getItem(i));
    console.log(achievementDatas[i][0]);
    console.log(achievementDatas[i][1]);

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

    // if the numberOfStars is null, create an empty div with the same height and width
    if ((numberOfStars === null) || (numberOfStars === "null")) {
        let emptyDiv = document.createElement("div");
        emptyDiv.className = "stars-achievement";
        achievementDatas[i][0].append(emptyDiv);
    }

    // Display "Complete" if number of stars = 3
    if ((numberOfStars === "3")) {
        console.log("number of stars for :" + (i) + localStorage.getItem(i));
        achievementDatas[i][1].innerHTML ='<p>Complete <span><i class="fas fa-check"></i></span></p>';
        achievementDatas[i][1].children[0].className = "complete-achievement-text";
        /*
        achievementDatas[i][1].children[0].children[0].children[0].style.color = "color","#01a74b";
       */
        
    } else {
        // Create an empty div so that every topic will be at the same line
        let emptyText = document.createElement("p");
        emptyText.className = "complete-achievement-text";
        achievementDatas[i][1].append(emptyText);
    }

    


}

/*
console.log(topicArrays);
console.log(topicArrays[0]);
// For every topic_stars in achievementDatas, count the number of stars, and display them in the matching achievementDatas[i] element.
for (let i in achievementDatas) {
    console.log(achievementDatas[i], " stars is for ", i, localStorage.getItem(i));
    console.log(localStorage.getItem(i));
    console.log(achievementDatas[i]);
    numberOfStars = localStorage.getItem(i);

    // According to the how many numberOfStars, create stars
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
        achievementDatas[i].append(emptyDiv);
    }

    //Call function to display "Complete" if number of stars = 3
    if ((numberOfStars === "null")) {
        console.log("number of stars for :" + (i) + localStorage.getItem(i));
        completeAchievementArray[i].append('<p>Complete hello<span><i class="fas fa-check"></i></span></p>');
        
        
        $(".complete-achievement-wrapper p").css("color","FF9900");
        $(".complete-achievement-wrapper p i").css("color","#01a74b");
       
    } 
}


for (i=0; i < topicArrays.length; i++) {
    if (achievementDatas[i] === "3") {
        achievementDatas[i]
    }
}
*/