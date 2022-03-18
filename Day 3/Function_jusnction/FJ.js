var trainSpeed = 250;
var trainPosition = 0;
var animation;

var startbutton = document.getElementById("train").onclick = speedUp;
document.getElementById("startbutton").addEventListener("click", speedUp);

var stopButton = document.getElementById("Stopbutton").onclick = stopTrain;
document.getElementById("Stopbutton").addEventListener("click", stopTrain);

var resetbutton = document.getElementById("resetbutton").onclick = resetTrain;
document.getElementById("resetbutton").addEventListener("click", resetTrain);

function speedUp() {
    if (trainSpeed > 10) {
        trainSpeed -= 10;
    }
    console.log("train speed: " + trainSpeed);

    clearInterval(animation);
    animation = setInterval(frame, trainSpeed);


    function frame() {
        trainPosition += 2;
        train.style.left = trainPosition + 'px';
        console.log(trainPosition);
        checkPosition(trainPosition);
    }
}

function checkPosition(currentPosition) {
    if (currentPosition === 690) {
        alert(":O!");
        console.log("Crash!");
        clearInterval(animation);
    }
}

function stopTrain() {
    if (trainPosition < 580) {
        clearInterval(animation);
        console.log("Whew! That was close!");
    }
}

function resetTrain(){
    reset = setInterval(frame, trainSpeed--);
    trainSpeed = 0
    console.log("Train reset")
    clearInterval(animation);
    animation = setInterval(frame, trainSpeed--)
}