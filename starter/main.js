

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

(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = 'https://preview.ibb.co/fn9Oic/LOGO.png';
    document.getElementsByTagName('head')[0].appendChild(link);
})();