let hasKey = false;
let doorOpen = false;

const keyView = document.querySelector(".black-key");
keyView.addEventListener("click", function(){
    alert("Key picked up");
    keyView.remove();
    hasKey = true;
});


const doorView = document.querySelector(".door");
doorView.addEventListener("click", function(){
    if (doorOpen){ 
        window.location.href = "buiten.html"
    }
    if(hasKey){
        doorOpen = true
        alert("door opened");
        doorView.src = 'img/pngimg.com - door_PNG17555.png';

    }
    else{
        alert("find the key")
    }
});