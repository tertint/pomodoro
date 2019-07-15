let stopped = false;
let timerId = 0;
let _time = 60 * 25
const startTimer = (duration, display) => {
    if (stopped) return false;
    let timer = duration, minutes, seconds;
    timerId = setInterval(() => {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        _time = timer;
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
document.getElementById("start").onclick = () => {
    display = document.querySelector('#timer');
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