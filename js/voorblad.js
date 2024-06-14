const button = document.querySelector(".tips");
const popup = document.querySelector(".hint");
const storyButton = document.querySelector(".story");
const popupTwo = document.querySelector(".plot");
const startButton = document.querySelector(".start");

button.addEventListener("click", function(){
    if (popup.style.display === "block") {
        popup.style.display = "none";
    } else {
        popup.style.display = "block";
    }
});

startButton.addEventListener("click", function(){
    window.location.href = "kelder.html"
});

storyButton.addEventListener("click", function(){
    if (popupTwo.style.display === "block") {
        popupTwo.style.display = "none";
    } else {
        popupTwo.style.display = "block";
    }
});