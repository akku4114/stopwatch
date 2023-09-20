let startTime;
let running = false;
let interval;

function startStop() {
    if (running) {
        clearInterval(interval);
        document.getElementById("startStop").textContent = "Start";
    } else {
        startTime = startTime || Date.now();
        interval = setInterval(updateTime, 10);
        document.getElementById("startStop").textContent = "Stop";
    }
    running = !running;
}

function updateTime() {
    const currentTime = Date.now();
    const elapsedTime = new Date(currentTime - startTime);
    const minutes = String(elapsedTime.getMinutes()).padStart(2, '0');
    const seconds = String(elapsedTime.getSeconds()).padStart(2, '0');
    const milliseconds = String(elapsedTime.getMilliseconds()).padStart(3, '0');
    document.getElementById("display").textContent = `${minutes}:${seconds}:${milliseconds}`;
}

function reset() {
    clearInterval(interval);
    startTime = null;
    running = false;
    document.getElementById("startStop").textContent = "Start";
    document.getElementById("display").textContent = "00:00:00";
}

// Initial setup
reset();
