function openNav() {
    document.getElementById("mySideNav").style.width = "250px";
  }

function closeNav() {
    document.getElementById("mySideNav").style.width = "0";
}

function openTimer(evt, timerName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(timerName).style.display ="block";
    evt.currentTarget.className += " active";
}

//variable
let workTitle = document.getElementById('work');
let breakTitle = document.getElementById('break');

let workTime = 25;
let breakTime = 5;

let seconds = "00"

//display
window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;

    workTitle.classList.add('active');
}

//timer start
function start() {
    //change button
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";
    

    //change the time
    seconds = 59;

    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;

    breakCount =0;

    //countdown
    let timerFunction = () => {
        //change the display
        document.getElementById('minutes').innerHTML = workMinutes;
        document.getElementById('seconds').innerHTML = seconds;

        //start
        seconds = seconds - 1;

        if(seconds == 0) {
            workMinutes = workMinutes - 1;
            if(workMinutes <= -1) {
                if((breakCount != 0) && (breakCount % 8 == 0)) {
                    //start break
                    workMinutes = breakMinutes + 10;
                    breakCount++;

                    //change the panel
                    setTimeout(function() {
                        workTitle.classList.remove('active');
                        breakTitle.classList.add('active');
                    }, 1)
                    
                }else if (breakCount % 2 == 0) {
                    //start break
                    workMinutes = breakMinutes;
                    breakCount++;

                    //change the panel
                    setTimeout(function() {
                        workTitle.classList.remove('active');
                        breakTitle.classList.add('active');
                    }, 1)
                }else { //continue work
                    workMinutes = workTime;
                    breakCount++;

                    //change the panel
                    setTimeout(function() {
                        breakTitle.classList.remove('active');
                        workTitle.classList.add('active');
                    }, 1)
                    
                }
            }
            seconds = 59;
        }
    }
    
    //start countdown
    setInterval(timerFunction, 1);
}

function stop() {
    clearInterval(timerFunction);
}

function clear() {
    stop();
}

function showSpotify()
{
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}