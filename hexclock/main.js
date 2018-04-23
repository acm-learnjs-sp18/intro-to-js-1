let time = document.getElementById("clock");
let hex = document.getElementById("hex");
let body = document.getElementById("body");

function updateClock() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = "";

    var dateFormat = ['h', 'm', 's'];

    var color = time2color(dateFormat, hours, minutes, seconds);

    if (hours >= 12) {
        ampm = "PM";
    } else {
        ampm = "AM";
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (hours != 12) {
        hours %= 12;
    }

    time.innerHTML = hours + ":" + minutes + ":" + seconds + " " + ampm;

    hex.innerHTML = "#" + color;

    body.style.backgroundColor = color;
};
updateClock();
setInterval(updateClock, 1000);

function time2color(dateFormat, hours, minutes, seconds) {
    var result = [];
    for (var i=0; i < dateFormat.length; i++) {
        switch(dateFormat[i]) {
            case 'h':
                result.push(dec2hex(hours / 24));
                break;
            case 'm':
                result.push(dec2hex(minutes / 60));
                break;
            case 's':
                result.push(dec2hex(seconds / 60));
                break;
        }
    };
    return result.join('');
}

/****** BOILERPLATE CODE *****************************************************/

function dec2hex(d) {
    d = parseInt(d * 255);
    var hex = Number(d).toString(16);
    padding = typeof(padding) === "undefined" || padding === null ? padding = 2 : padding;
    while (hex.length < padding) {
        hex = "0" + hex;
    }
    return hex;
}