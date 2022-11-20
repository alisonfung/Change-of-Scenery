
function selectScenery(num){
    console.log("reached");
    var sceneryOptions = [
        "SceneryPics/rosegarden.jpg",
        "SceneryPics/japanesegarden.jfif",
        "SceneryPics/sanantongarden.png",
        "SceneryPics/cafe.webp",
        "SceneryPics/nylibrary.avif",
        "SceneryPics/bar.jpeg",
        "SceneryPics/tokyo.jpeg",
        "SceneryPics/baysidesunset.jpeg",
        "SceneryPics/taiwanfireworks.jpeg"
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
