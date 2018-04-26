var time = document.getElementById("clock");
var hex = document.getElementById("hex");
var body = document.getElementById("body");

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
        if (dateFormat[i] === 'h') {
            result.push(dec2hex(hours / 24));
        } else if (dateFormat[i] === 'm') {
            result.push(dec2hex(minutes / 60));
        } else if (dateFormat[i] === 's') {
            result.push(dec2hex(seconds / 60));
        }
    };
    return result.join('');
}

/****** BOILERPLATE CODE *****************************************************/

/**
 * Multiply a decimal (base 10) by 255, then convert it to its equivalent in hex (base 16). This function will be used to convert
 * hours, minutes, and seconds to Red, Green, and Blue values respectively. It always returns a two-character String.
 */
function dec2hex(d) {
    // Multiply d by 255
    d = parseInt(d * 255);
    // Convert d from a Number to a String
    var hex = d.toString(16);

    // If hex is less than two digits, pad it with zeros ("0") until it is.
    padding = typeof(padding) === "undefined" || padding === null ? padding = 2 : padding;
    while (hex.length < padding) {
        hex = "0" + hex;
    }

    return hex;
}

/**
 * A function that is immediately executed when the page loads. It displays our logo!
 */
(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = 'https://preview.ibb.co/fn9Oic/LOGO.png';
    document.getElementsByTagName('head')[0].appendChild(link);
})();