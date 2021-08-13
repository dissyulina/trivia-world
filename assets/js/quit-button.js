// JS file that corresponds to Quit button on Wheel page, Question page (modal), and Achievement page.

// Function to save points and stars of a user to local storage, attached to click event of "Quit" button
function saveData() {
    // All the quiz's datas are put into a new object
    let datas = new Object();
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
    inputName = localStorage.getItem("player");
    localStorage.setItem(inputName, JSON.stringify(datas));

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