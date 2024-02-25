/*Init seconds, minutes and hours to zero*/
let [seconds, minutes, hours] = [0, 0, 0];
/*Init displayTime with id element from HTML*/
let displayTime = document.getElementById("displayTime");
/*Init timer var to null*/
let timer = null;

/*Stopwatch function*/
function stopwatch() {
    /*Increase seconds*/
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        /*Increase minutes*/
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            /*Increase hours*/
            hours++;
        }
    }

    /*Add zero before digit if under ten*/
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    /*Display time*/
    displayTime.innerHTML = h + ":" + m + ":" + s; 
}

/*WatchStart function*/
function watchStart() {
    if (timer !== null) {
        clearInterval(timer);
    }
    /*Increase time every 1000 ms*/
    timer = setInterval(stopwatch, 1000);
}

/*WatchStop function*/
function watchStop() {
    clearInterval(timer);
}

/*Reset function*/
function watchReset() {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    displayTime.innerHTML = "00:00:00";
}