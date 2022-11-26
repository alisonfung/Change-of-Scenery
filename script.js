let custom_workTime = "00";
let custom_breakTime = "00";
let custom_seconds = "00";

document.getElementById('work_minutes').innerHTML = custom_workTime;
document.getElementById('work_seconds').innerHTML = custom_seconds;
document.getElementById('break_minutes').innerHTML = custom_workTime;
document.getElementById('break_seconds').innerHTML = custom_seconds;

function increaseWork() {
    custom_workTime = document.getElementById("work_minutes").innerHTML;
    custom_workTime++;
    if (custom_workTime > 60) {
        custom_workTime = 0;
    }
    document.getElementById("work_minutes").innerHTML = custom_workTime;
}

function decreaseWork() {
    custom_workTime = document.getElementById("work_minutes").innerHTML;
    custom_workTime--;
    if (custom_workTime < 0) {
        custom_workTime = 60;
    }
    document.getElementById("work_minutes").innerHTML = custom_workTime;
}

function increaseBreak() {
    custom_breakTime = document.getElementById("break_minutes").innerHTML;
    custom_breakTime++;
    if (custom_breakTime > 60) {
        custom_breakTime = 0;
    }
    document.getElementById("break_minutes").innerHTML = custom_breakTime;
}

function decreaseBreak() {
    custom_breakTime = document.getElementById("break_minutes").innerHTML;
    custom_breakTime--;
    if (custom_breakTime < 0) {
        custom_breakTime = 60;
    }
    document.getElementById("break_minutes").innerHTML = custom_breakTime;
}

function openTimer() {
    document.getElementById('custom_timer').style.display = "none";
    document.getElementById('final_timer').style.display = "contents";
    document.getElementById('done').style.display = "none"; 
    document.getElementById('back').style.display = "block"; 
    document.getElementById('minutes').innerHTML = document.getElementById("work_minutes").innerHTML;
    workTitle.classList.add('active');
}

function openPomoTimer() {
    document.getElementById('custom_timer').style.display = "none";
    document.getElementById('final_timer').style.display = "contents";
    document.getElementById('done').style.display = "none"; 
    document.getElementById('back').style.display = "block"; 
    document.getElementById("work_minutes").innerHTML = 25;
    document.getElementById("break_minutes").innerHTML = 5;
    document.getElementById('minutes').innerHTML = document.getElementById("work_minutes").innerHTML;
}

let workTitle = document.getElementById('work_panel');
let breakTitle = document.getElementById('break_panel');

let seconds = "00"
document.getElementById('seconds').innerHTML = seconds;

let breakCount = 0;

var check = null ;

//timer start
function startTimer() {
    let workTime = document.getElementById("work_minutes").innerHTML;
    let breakTime = document.getElementById("break_minutes").innerHTML;
    if (workTime <= 0 || breakTime <= 0) {
        window.alert("Time must be larger than 0!");
    }
    else {

        //change button
        document.getElementById('start').style.display = "none";
        document.getElementById('pause').style.display = "block";
        document.getElementById('reset').style.display = "block";
        

        //change the time
        seconds = 59;

        let workMinutes = workTime - 1;
        let breakMinutes = breakTime - 1;

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
                        workMinutes = workTime - 1;
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
        check = setInterval(timerFunction, 100);
    }
}

function pauseTimer() {
    clearInterval(check);
    document.getElementById('pause').style.display = "none";
    document.getElementById('resume').style.display = "block";
}

function resumeTimer() {
    let workTime = document.getElementById("work_minutes").innerHTML;
    let breakTime = document.getElementById("break_minutes").innerHTML;
    let breakMinutes = breakTime -1;
    let workMinutes = document.getElementById("minutes").innerHTML;
    let seconds = document.getElementById('seconds').innerHTML

    let timerFunction = () => {
        //change the display
        document.getElementById('minutes').innerHTML = workMinutes;
        document.getElementById('seconds').innerHTML = seconds;

        //start
        seconds = seconds - 1;

        if(seconds == 0) {
            workMinutes = workMinutes -1 ;
            if(workMinutes <0) {
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
                    workMinutes = workTime - 1;
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
    check = setInterval(timerFunction, 100);
    document.getElementById('pause').style.display = "block";
    document.getElementById('resume').style.display = "none";
}

function stopTimer() {
    clearInterval(check);
    document.getElementById("minutes").innerHTML = document.getElementById("work_minutes").innerHTML;
    document.getElementById("seconds").innerHTML = "00";
    document.getElementById('start').style.display = "block";
    document.getElementById('pause').style.display = "none";
    document.getElementById('resume').style.display = "none";
    document.getElementById('reset').style.display = "none";
    breakCount = 0;
    breakTitle.classList.remove('active');
    workTitle.classList.add('active');
}


function clear() {
    stop();
}


function backToCustom() {
    document.getElementById('final_timer').style.display = "none";
    document.getElementById('custom_timer').style.display = "contents";
    document.getElementById('back').style.display = "none";
    document.getElementById('done').style.display = "block";
}

