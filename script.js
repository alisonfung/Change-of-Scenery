<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom Timer Sample</title>

    <!-- FONT -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Raleway:wght@500&display=swap" rel="stylesheet">
    
    <!-- ICONS -->
    <script src="https://kit.fontawesome.com/6913c766ad.js" crossorigin="anonymous"></script>

    <!-- CSS -->
    <link rel="stylesheet" href="./timerstyle.css">
</head>

<body>
    <section id="customize_section">
        <div id="custom_timer">
            <div class="time_container">
                <h1 id="custom">custom timer</h1>
    
                <div class="customization">
                    <div class="custom_work">
                        <div class="time_title">
                            <h2 id="work">work</h2>
                        </div>
                        <div class="custom_worktime">
                            <p id="work_minutes"></p>
                            <p>:</p>
                            <p id="work_seconds"></p>
                        </div>
                        <div class="custom_button" id="work_button">
                            <button id="up" onclick="increaseWork()"><i class="fa-solid fa-square-caret-up"></i></button>
                            <button id="down" onclick="decreaseWork()"><i class="fa-solid fa-square-caret-down"></i></button>
                        </div>
                    </div>
    
                    <div class="custom_break">
                        <div class="time_title">
                            <h2 id="break">break</h2>
                        </div>
                        <div class="custom_breaktime">
                            <p id="break_minutes"></p>
                            <p>:</p>
                            <p id="break_seconds"></p>
                        </div>
                        <div class="custom_button" id="break_button">
                            <button id="up" onclick="increaseBreak()"><i class="fa-solid fa-square-caret-up"></i></button>
                            <button id="down" onclick="decreaseBreak()"><i class="fa-solid fa-square-caret-down"></i></button>
                        </div>
                    </div>
    
                    <div class="finish_setup">
                        <button id="done" onclick="openTimer()">done</button>
                    </div>
                </div>
            </div>
            <div class="auto_pomo">
                <button id="auto" onclick="openPomoTimer()">Or try using Pomodoro Timer here!</button>
            </div>
        </div>
    </section>

    <section id="timer_section">
        <div id="final_timer"> 

            <div class="final_time_container">
                <h1 id="final">timer</h1>

                <div class="final_time_clock">
                    <div class="timer_part">
                        <div class="circle">
                            <div class="time">
                                <p id="minutes"></p>
                                <p>:</p>
                                <p id="seconds"></p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="control_panel">
                        <div class="control_panel_container">
                            <div class="panel">
                                <p id="work_panel">work</p>
                                <p id="break_panel">break</p>
                            </div>
                
                            <div class="time_control">
                                <button id="start" onclick="startTimer()"><i class="fa-solid fa-play"></i>start</button>
                                <button id="pause" onclick="pauseTimer()"><i class="fa-solid fa-pause"></i>pause</button>
                                <button id="resume" onclick="resumeTimer()"><i class="fa-solid fa-play"></i>resume</button>
                                <button id="reset" onclick="stopTimer()"><i class="fa-solid fa-rotate-left"></i>reset</button>
                            </div>
                        </div>
        
                    </div>
                </div>  
            </div>
            
            <div class="time_nav">
                <button id="time_back" onclick="stopTimer(); backToCustom()"><i class="fa-solid fa-chevron-left"></i>back</button>
            </div>
        </div>
    </section>
    <!-- SCRIPT -->
    <script src="./script.js"></script>
</body>
</html>
