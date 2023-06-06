function updateClockElement(id, value) {
    const element = document.getElementById(id);
    element.textContent = value < 10 ? `0${value}` : value;
}

function startClock() {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    updateClockElement("hours", hours);
    updateClockElement("minutes", minutes);
    updateClockElement("seconds", seconds);

    setTimeout(startClock, 1000);
}

window.onload = function() {
    startClock();
};
