let timerId = 0;
let _time = 5
const startTimer = (duration, display) => {
    let timer = duration, minutes, seconds;
    timerId = setInterval(() => {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        _time = timer;
        if (--timer < 0) {
            document.getElementById("timer").textContent = "This is the end";
            return false;
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