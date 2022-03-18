var startbutton = document.getElementById("startbtn").onclick = start ;
var resetbutton = document.getElementById("reset").onclick = restart;
var realnum = Math.floor((Math.random() * 10) + 1);
var good = "Well done you win!!!!!"

function start(){
    var ans = window.prompt("pick a number: ");
    if (ans < realnum){
        alert("Too low");
        start();
    }else if (ans > realnum){
        alert("too high");
        start();
    }else{
      var win = document.getElementById("you win").innerHTML = good;
    }
}
 function restart(){
    location.reload();
    }

