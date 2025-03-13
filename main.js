const hrElem = document.getElementById("hr");
const minElem = document.getElementById("min");
const secElem = document.getElementById("sec");

const stopHr = document.getElementById("stop-hr");
const stopMin = document.getElementById("stop-min");
const stopSec = document.getElementById("stop-sec");
const stopMiliSec = document.getElementById("stop-mili-sec");

const updateClock = () => {
    const date = new Date();

    const hr = date.getHours().toString().padStart(2, 0) + " :";
    const min = date.getMinutes().toString().padStart(2, 0) + " :";
    const sec = date.getSeconds().toString().padStart(2, 0);

    hrElem.textContent = hr;
    minElem.textContent = min;
    secElem.textContent = sec;
};

updateClock();

setInterval(updateClock, 1000);

let hr = 0;
let min = 0;
let sec = 0;
let miliSec = 0;

const stopWatch = () => {
    stopHr.textContent = hr.toString().padStart(2, 0) + " :";
    stopMin.textContent = min.toString().padStart(2, 0) + " :";
    stopSec.textContent = sec.toString().padStart(2, 0) + " :";
    stopMiliSec.textContent = miliSec.toString().padStart(3, 0);
};

stopWatch();

let interval;

const startWatch = () => {
    if (!interval) {
        interval = setInterval(() => {
            miliSec += 1;

            if (miliSec === 100) {
                sec += 1;
                miliSec = 0;
            }

            if (sec === 60) {
                min += 1;
                sec = 0;
            }
            if (min === 60) {
                hr += 1;
                min = 0;
            }
            stopWatch();
        }, 10);
    }
};

const stop = () => {
    clearInterval(interval);
    interval = null;
};

const reset = () => {
    clearInterval(interval);
    hr = 0;
    min = 0;
    sec = 0;
    miliSec = 0;
    stopWatch();
};
