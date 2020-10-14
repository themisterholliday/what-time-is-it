import dayjs from 'dayjs'

const hourButton = document.getElementById("hour-change")

var hourFormat = 'hh'

function displayTime() {
    const dateString = dayjs().format(`${hourFormat}:mm:ss.SSS A`)
    document.getElementById("time").textContent = dateString;
}

function changeHourFormat() {
    if (hourFormat == 'hh') {
        hourFormat = 'HH'
        hourButton.textContent = '24-hour'
    } else {
        hourFormat = 'hh'
        hourButton.textContent = '12-hour'
    }
}

hourButton.addEventListener("click", changeHourFormat);

setInterval(displayTime, 100);
displayTime()
