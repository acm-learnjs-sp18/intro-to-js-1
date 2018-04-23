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

    if (hours > 12) {
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

    time.innerHTML = hours%12 + ":" + minutes + ":" + seconds + " " + ampm;

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
                result.push(dec2hex(parseInt((hours / 24) * 255)));
                break;
            case 'm':
                result.push(dec2hex(parseInt((minutes / 60) * 255)));
                break;
            case 's':
                result.push(dec2hex(parseInt((seconds / 60) * 255)));
                break;
        }
    };
    return result.join('');
}

/****** BOILERPLATE CODE *****************************************************/

function dec2hex(d) {
    var hex = Number(d).toString(16);
    padding = typeof(padding) === "undefined" || padding === null ? padding = 2 : padding;
    while (hex.length < padding) {
        hex = "0" + hex;
    }
    return hex;
}