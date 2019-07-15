const startTimer = (duration, display) => {
    let timer = duration, minutes, seconds;
    setInterval(() => {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
document.getElementById("start").onclick = () => {
    let _time = 60 * 25,
        display = document.querySelector('#timer');
    startTimer(_time, display);
};

document.getElementById("start").onclick = () => {
    let _time = 60 * 25,
        display = document.querySelector('#timer');
    startTimer(_time, display);
};