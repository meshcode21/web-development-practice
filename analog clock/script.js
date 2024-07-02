let hour_dial = document.getElementById('hour_dial');
let min_dial = document.getElementById('min_dial');
let sec_dial = document.getElementById('sec_dial');

let hour_angle = 0,
    min_angle = 0,
    sec_angle = 0;

let hour = 0,
    min = 0,
    sec = 0;

(function() {
    const time = new Date();
    sec = time.getSeconds();
    min = time.getMinutes() + sec / 60;
    hour = (time.getHours() % 12) + min / 60;


    init_dials()
})();

function init_dials() {
    sec_angle = sec * 6;
    min_angle = (min * 6);
    hour_angle = (hour * 30);

    sec_dial.style.transform = `translate(-24.6%, -58%) rotate(${sec_angle-90}deg)`;
    min_dial.style.transform = `translate(-7.3%, -58%) rotate(${min_angle-90}deg)`;
    hour_dial.style.transform = `translate(-9.5%, -56%) rotate(${hour_angle-90}deg)`;
}

setInterval(() => {
    sec = (sec + 1) % 60;
    min = min + 1 / 60;
    hour = hour + 1 / 3600;
    init_dials();
}, 1000);