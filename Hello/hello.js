/* When user presses submit button, change the greeting to include user's name. */

// get access to the button and set up a click even handler
var button = document.getElementById("submit");
button.onclick = changeGreeting;

function changeGreeting(){
    var greeting = document.getElementsByTagName("h1")[0];
    var input = document.getElementById("name").value;
    greeting.innerHTML = "Hello, " + input;
}