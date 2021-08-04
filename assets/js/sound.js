// JS file to toggle on and off

let sounds = document.getElementsByTagName("audio");
let toggleSound = document.getElementsByClassName("toggle-sound");
console.log(toggleSound);
let i; //increment for audio
let j; //increment for toggle sound

$(".toggle-sound").click(function() {
    if(sounds[0].muted){
        console.log("toggle button is clicked to play sound");
        for(i = 0; i < sounds.length; ++i) {
            sounds[i].muted = false;
        }
        for(j=0; j < toggleSound.length; j++) {
            toggleSound[j].innerHTML = '<i class="fas fa-volume-down"></i>';
        }
    } else {
        console.log("toggle button is clicked to mute");
        for(i = 0; i < sounds.length; ++i) {
            sounds[i].muted = true;
        }
        for(j=0; j < toggleSound.length; j++) {
            toggleSound[j].innerHTML = '<i class="fas fa-volume-mute"></i>';
        }
    }
});

