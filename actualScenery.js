
window.onload = function() {
    var backgroundAudio=document.getElementById("birds");
    backgroundAudio.volume=0.2;
}

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

function overlay_off() {
    document.getElementById("overlay").style.display = "none";
}

function timer_off() {
    document.getElementById("timer").style.display = "none";
}

function showSpotify()
{
    var x = document.getElementById("spotify");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function showSettings()
{
    var x = document.getElementById("overlay");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function showTimer()
{
    var x = document.getElementById("timer");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


var muted = false;
function mutePage() {
    var elems = document.querySelectorAll("video, audio");
    if (muted) {
        [].forEach.call(elems, function (elem) {
            unmuteMe(elem);
        });
        muted = false;
    } else {
        [].forEach.call(elems, function (elem) {
            muteMe(elem);
        });
        muted = true;
    }
}

function muteMe(elem) {
    elem.pause();
}

function unmuteMe(elem) {
    elem.play();
}





