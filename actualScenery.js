
function selectScenery(num){
    console.log("reached");
    var sceneryOptions = [
        "images/Rose_Garden.png",
        "images/Japanese_Garden.png",
        "images/Palace_Garden.png",
        "images/Cafe.png",
        "images/NewYork_Library.png",
        "images/Tavern.png",
        "images/Tokyo.png",
        "images/Bayside_Sunset.png",
        "images/Taiwan_Fireworks.png"
    ];
    var labels =[
        "Rose Garden",
        "Japanese Garden",
        "San Anton Palace Garden",
        "Cafe",
        "NYC Library",
        "Tavern",
        "Tokyo",
        "Bayside Sunset",
        "Taiwan Fireworks"
    ]
    var pic = document.getElementById("current");
    console.log(sceneryOptions[num]);
    pic.src = sceneryOptions[num];

    var header = document.getElementById("sceneryLabel");
    console.log(labels[num]);
    header.textContent = labels[num];
}

function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}

window.onload = function() {
    var backgroundAudio=document.getElementById("birds");
    backgroundAudio.volume=0.2;
}