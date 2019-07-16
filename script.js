let timerId = 0;
let _time = 60 * 25
$('.dropdown-toggle').dropdown()
const startTimer = (duration, display) => {
    let timer = duration;
    const countdown = () => {
        let minutes, seconds;
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        _time = timer;
        if (--timer < 0) {
            document.getElementById("timer").textContent = "This is the end";
            clearInterval(timerId);
        }
    }
    countdown()
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
};