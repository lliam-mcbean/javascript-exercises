

let clock = function() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let currentTime = hours + ":" + minutes + ":" + seconds;
    let france = document.createElement('h1');
    let germany = document.createTextNode(currentTime);

    let spain = france.appendChild(germany);
    document.body.appendChild(spain);
}

let eraseClock = function() {
    document.body.removeChild();
}

setInterval(clock, 1000);
setInterval(eraseClock, 1000);

