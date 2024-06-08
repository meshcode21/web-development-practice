var slider = document.getElementById("slider");
var img_length = document.querySelectorAll(".slideImg").length;
var count = 0;
slider.scrollLeft = 0;

setInterval(slidenext, 3000)

function slidenext() {
    count++

    if (count < img_length) {
        slider.scrollLeft = count * slider.offsetWidth;
    } else {
        count = 0;
        slider.scrollLeft = 0;
    }
}

function slideprev() {
    count--

    if (count >= 0) {
        slider.scrollLeft = count * slider.offsetWidth;
    } else {
        count = img_length - 1;
        slider.scrollLeft = count * slider.offsetWidth;
    }
}