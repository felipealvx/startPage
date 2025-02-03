function startTime() {
    let today = new Date();
    let hours = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    
    let ampm = hours >= 12 ? 'PM' : 'AM'; // Determine AM/PM
    hours = hours % 12; // Convert hours to 12-hour format
    hours = hours ? hours : 12; // If hour is 0 (midnight), set it to 12
    min = checkTime(min);

    document.getElementById('txt').innerHTML = hours + ":" + min + " " + ampm;
    document.getElementById('seconds').innerHTML = sec;
    time = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

startTime();
