let timerId = 0;
let _time = 60 * 25;
// $('.dropdown-toggle').dropdown()

const startTimer = (duration, display) => {
    let timer = duration;
    const countdown = () => {
        let minutes, seconds;
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        let formatTime = minutes + ":" + seconds
        display.textContent = formatTime;
        _time = timer;

        document.title = formatTime;

        if (--timer < 0) {
            intervalTitle.start();
            document.title = "Time is over";
            document.getElementById("timer").textContent = "Time is over";
            clearInterval(timerId);
        }
    }
    countdown();
    timerId = setInterval(countdown, 1000);
}

document.getElementById("start").onclick = () => {
    clearInterval(timerId)
    let display = document.querySelector('#timer');
    startTimer(_time, display);
};
document.getElementById("pause").onclick = () => {
    clearInterval(timerId);
};
document.getElementById("stop").onclick = () => {
    clearInterval(timerId);
    _time = 60 * 25;
    document.getElementById("timer").textContent = "25:00"
};
document.getElementById("work").onclick = () => {
    clearInterval(timerId);
    _time = 60 * 25;
    document.getElementById("timer").textContent = "25:00"
    document.getElementById("dropdownMenuButton").textContent = "Work"
};
document.getElementById("break").onclick = () => {
    clearInterval(timerId);
    _time = 60 * 5;
    document.getElementById("dropdownMenuButton").textContent = "Break"
    document.getElementById("timer").textContent = "05:00"
};
document.getElementById("longbreak").onclick = () => {
    clearInterval(timerId);
    _time = 60 * 15;
    document.getElementById("dropdownMenuButton").textContent = "Long break"
    document.getElementById("timer").textContent = "15:00"
}

const changeTitle = function() { // функция для смены заголовка
    this.title = function () {
        let title = document.title;
        document.title = (title == "Pomodoro timer" ? "Time is over" : "Pomodoro timer");
    }
};

const intervalTitle = new changeTitle();

changeTitle.prototype.start = function() {
    this.interval = setInterval(this.title, 1000);
};
changeTitle.prototype.stop = function() {
    clearInterval(this.interval)
};
window.onfocus = function() {
    document.title = "Pomodoro timer"
    intervalTitle.stop();
};