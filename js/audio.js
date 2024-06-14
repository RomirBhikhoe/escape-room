const audioButton = document.querySelector(".play-button");
const muteButton = document.querySelector(".mute-button")
const music = document.querySelector(".music")

audioButton.addEventListener("click", function (){
    music.play();
    music.muted = false;
});

muteButton.addEventListener("click", function (){
    music.muted = true;
});

