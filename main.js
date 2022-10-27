let scrol = document.getElementById('scrolling');


// button Scroll UP
window.onscroll = _ => {
    if (window.scrollY >= 800) {
        scrol.style.opacity = '1';
        scrol.style.pointerEvents = 'all';
    } else {
        scrol.style.opacity = '0';
    }
}

scrol.onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}


// Timer
let parentTime = document.getElementById('timer'),
days = document.getElementById('days').firstElementChild,
hours = document.getElementById('hours').firstElementChild,
minutes = document.getElementById('minutes').firstElementChild,
seconds = document.getElementById('seconds').firstElementChild;

// The End year
let endYear = new Date('Dec 31 2022 23:59:59').getTime();

let counter = setInterval(()=>{
    // Get Date Now
    let dateNow = new Date().getTime();

    // Find The Difference Between Now And Countdown Date
    let dateDiff = endYear - dateNow;

    let countDays = Math.floor(dateDiff / (1000 * 60 * 60 * 24)),
    countHours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    countMinutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60)),
    countSeconds = Math.floor((dateDiff % (1000 * 60)) / (1000));

    days.textContent = countDays < 10 ? `0${countDays}` : countDays;
    hours.textContent = countHours < 10 ? `0${countHours}` : countHours;
    minutes.textContent = countMinutes < 10 ? '0' + countMinutes : countMinutes;
    seconds.textContent = countSeconds < 10 ? '0'+ countSeconds: countSeconds;


},1000);