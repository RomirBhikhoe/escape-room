const com = document.querySelector(".com");
const ghost = document.querySelector("#ghost");
const screen = document.querySelector("#hint");
const bars = document.querySelector("#bars");

function hideScreen() {
    if (screen.style.display === "none") {
        screen.style.display = "block";
    } else {
        screen.style.display = "none";
    }
}

alert("Een computer.. en een spook?");


ghost.addEventListener("click", function () {
    alert("Ik heb een raadsel voor jouuu");
    alert("Wanneer je mijn naam hardop zegt, ben ik verdwenen. Wat ben ik?");
    let antwoord = prompt("Wanneer je mijn naam hardop zegt, ben ik verdwenen. Wat ben ik?");
    if (antwoord == "stilte" || antwoord == "Stilte") {
        alert("holy shit dat is goed");
        alert("nu raadsel tweeee");
        alert("Wat wordt nooit natter, ongeacht hoeveel het regent?");
    } else {
        alert("hahahaa dat is fout");
    }
    antwoord = prompt("Wat wordt nooit natter, ongeacht hoeveel het regent?");
    if (antwoord == "zee" || antwoord == "Zee" || antwoord == "De zee" || antwoord == "de zee") {
        alert("Oh shit, nu kan je het wachtwoord ontcijferen...");
        alert("Maarr jij bent daar niet slim genoeg voorrrrrr");
        document.getElementById("ghost").style.display = "none";
    } else {
        alert("Ook fout, jij zuigt echt");
    }
});

com.addEventListener("click", function () {
    let password = prompt("PASSWORD")
    if (password == "Stille Oceaan" || password == "stille oceaan" || password == "Stille oceaan") {
        window.location.href = "gang1.html";
    } else {
        alert("ERR (hint: combineer de antwoorden)");
    };
});