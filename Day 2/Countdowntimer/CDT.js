var timeleft = 1000;
var elem = document.getElementById("countdown");
var timeID = setInterval(countdown, 1000);

function countdown(){
    if (timeleft === -1){
        clearInterval(timeID);

    }else {
        elem.innerHTML = timeleft;
        timeleft--;

    }
}