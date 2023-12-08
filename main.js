let circle = document.querySelector("#circle");
let circleIcon = document.querySelector("#circle i");
let timerIcon = document.querySelector("header i");
let seconds = 1;
let minutes = 0;
let hours = 0;
let secText = document.querySelector("#sec-text");
let minText = document.querySelector("#min-text");
let hourText = document.querySelector("#hour-text");
let intervalId;
let rotateIntervalId;
let rotate = 0;
let resetCon = document.querySelector("#reset")
let stopIcon = document.querySelector(".fa-stop")

circle.onclick = function () {
    // Flipping icon from play to pause and vice versa
    if (circleIcon.classList.contains("fa-play")) {
        // Sliding in reset
        resetCon.style.transform = "translateX(0%)";
        circle.style.borderRadius = "50% 0% 0% 50%";
        circleIcon.classList.replace("fa-play", "fa-pause")
        // Starting Timer
        intervalId = setInterval(function () {
            // Returning seconds to 0 if it gets to 59
            if (seconds > 59) {
                seconds = 0;
                minutes++;
                if (minutes > 59) {
                    minutes = 0;
                    hours++;
                }

            }
            // Incrementing rotate value


            // Pushing time to html
            secText.innerHTML = seconds < 10 ? `0${seconds}` : seconds
            minText.innerHTML = `${minutes < 10 ? `0${minutes}` : minutes}`
            hourText.innerHTML = `${hours < 10 ? `0${hours}` : hours}`
            seconds++;


        }, 1000)
        // Adding rotation to timer
        // timerIcon.classList.add("rotate")

        rotateIntervalId = setInterval(() => {
            // Rotating timer
            rotate += 20;
            timerIcon.style.transition = "all 0.3s linear"
            timerIcon.style.transform = `translate(-50%, 0) rotate(${rotate}deg)`
        }, 100)

    } else {
        circleIcon.classList.replace("fa-pause", "fa-play")
        clearInterval(intervalId)
        clearInterval(rotateIntervalId)
        // Removing rotation from timer
        // timerIcon.classList.remove("rotate");
    }

}

// stopping Timer

stopIcon.onclick = function () {
    // Resetting values of variables
    seconds = 1;
    minutes = 0;
    hours = 0;
    rotate = 0;
    // Resetting rotate
    timerIcon.style.transition = "none"
    timerIcon.style.transform = `translate(-50%, 0) rotate(0deg)`
    resetCon.style.transform = "translateX(-100%)";
    circle.style.borderRadius = "50%"
    // Pushing time to html
    secText.innerHTML = "00"
    minText.innerHTML = "00"
    hourText.innerHTML = "00"
    circleIcon.classList.replace("fa-pause", "fa-play")
    clearInterval(intervalId)
    clearInterval(rotateIntervalId)
}