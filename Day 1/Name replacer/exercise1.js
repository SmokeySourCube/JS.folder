var name1;
var surname1;
var email1;

document.getElementById("submit_button").onclick = userInput;

function userInput(){
    name1 = document.getElementById("name").value;
    surname1 = document.getElementById("surname").value;
    email1 = document.getElementById("email").value;
    displayInfo()
}

function displayInfo(){
    document.getElementById("outputname").innerHTML = name1;
    document.getElementById("outputsurname").innerHTML = surname1;
    document.getElementById("outputemail").innerHTML = email1;
    resetInput();
}

function resetInput(){
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("email").value = "";

}