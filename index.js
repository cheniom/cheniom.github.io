const greeting = document.getElementById("greeting");

greeting.style.textAlign = "center";
greeting.style.marginTop = "50px";
const username = window.prompt("Please enter your name?", "Jane")
greeting.innerHTML = "Welcome to my website, " + username + "!"

