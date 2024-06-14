const painting = document.querySelector(".painting");
const numpad = document.querySelector(".numpad");
const arrow = document.querySelector("#arrow");

painting.addEventListener("click", function () {
    alert("Je ziet een schilderij met 4 kleuren: Rood, Blauw, Groen en Paars");
});

numpad.addEventListener("click", function() {
    let key = prompt("RGBP")
    if (key == "3245") {
        alert("Correct")
        document.getElementById("arrow").style.display = "block"
    } else {
        alert("ERR")
    } 
});

arrow.addEventListener("click", function() {
    window.location.href = "gang.html"
});

