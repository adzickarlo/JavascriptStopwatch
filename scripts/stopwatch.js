window.onload = function(){

    let seconds = 0;
    let miliseconds = 0;
    const addMiliseconds = document.getElementById("mili");
    const addSeconds = document.getElementById("seconds");
    const buttonStart = document.getElementById("start-button");
    const buttonStop = document.getElementById("stop-button");
    const buttonReset = document.getElementById("reset-button");
    let Interval;

    buttonStart.onclick = () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = () => {
        clearInterval(Interval);
    }

    buttonReset.onclick = () => {
        clearInterval(Interval);
        seconds = "00";
        miliseconds = "00";
        addMiliseconds.innerHTML = miliseconds;
        addSeconds.innerHTML = seconds;
    }

    startTimer = () => {
        miliseconds++;

        if(miliseconds <= 9){
            addMiliseconds.innerHTML = "0" + miliseconds;
        }

        if(miliseconds > 9){
            addMiliseconds.innerHTML = miliseconds;
        }

        if (miliseconds > 99) {
            seconds++;
            addSeconds.innerHTML = "0" + seconds;
            miliseconds = 0;
            addMiliseconds.innerHTML = "0" + 0;
          }
          
        if (seconds > 9){
            addSeconds.innerHTML = seconds;
        }
    }
}