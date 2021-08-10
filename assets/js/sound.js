// JS file to toggle on and off

let sounds = document.getElementsByTagName("audio");
let toggleSound = document.getElementsByClassName("toggle-sound");
console.log(toggleSound);
let getSound = sessionStorage.getItem("sound");

let i; //increment for audio tag
let j; //increment for toggle sound

console.log("sound for this page is :" + getSound);
// If toggle sound is clicked
$(".toggle-sound").click(function() {
    getSound = sessionStorage.getItem("sound");
    console.log("sound is : " + getSound);
    if ((getSound === "on") || (getSound === null)) {
        sessionStorage.setItem("sound", "off");
        console.log("toggle button is clicked to mute");
        soundOff();
    } else {
        sessionStorage.setItem("sound", "on");
        console.log("toggle button is clicked to play sound");
        soundOn();
    }
});

//Set sound when loading a new page
if ((getSound === "on") || (getSound === null)) {
    soundOn();
} else {
    soundOff();
}

//Function when sound is off
function soundOff() {
    for(i = 0; i < sounds.length; ++i) {
        sounds[i].muted = true;
    }
    for(j=0; j < toggleSound.length; j++) {
        toggleSound[j].innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
}

//Function when sound is on
function soundOn() {
    for(i = 0; i < sounds.length; ++i) {
        sounds[i].muted = false;
    }
    for(j=0; j < toggleSound.length; j++) {
        toggleSound[j].innerHTML = '<i class="fas fa-volume-up"></i>';
    }
}

