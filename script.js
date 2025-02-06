let now = undefined;

let hours = 0;
let minutes = 0;
let seconds = 0;

let timeString = ``;


// Function to add leading zeros to single digits
function padNumber(number) {
    return number.toString().padStart(2, '0');
}

function updateClock() {
    now = new Date();

    // Extract hours, minutes and seconds
    hours = padNumber(now.getHours());
    minutes = padNumber(now.getMinutes());
    seconds = padNumber(now.getSeconds());

    timeString = `${hours}:${minutes}:${seconds}`;

    document.getElementById('time').textContent = timeString;
}

updateClock();

setInterval(updateClock, 1000);