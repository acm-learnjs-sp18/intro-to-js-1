 

/****** BOILERPLATE CODE *****************************************************/

/**
 * Multiply a decimal (base 10) by 255, then convert it to its equivalent in hex (base 16). This function will be used to convert
 * hours, minutes, and seconds to Red, Green, and Blue values respectively. It always returns a two-character String.
 */
function dec2hex(d) {
    // Multiply d by 255
    d = parseInt(d * 255);
    // Convert d from a Number to a String
    var hex = Number(d).toString(16);

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