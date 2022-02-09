/// O exercicio era pra mudar o style do html atravez de comandos java.

document.getElementById("container").style.backgroundColor = "grey";

document.getElementById("header-container").style.backgroundColor = "green";

document.querySelector(".emergency-tasks").style.backgroundColor = "orange";

for (let i = 0; i < 2; i +=1) {
    document.querySelectorAll(".emergency-tasks div h3")[i].style.backgroundColor = "purple";
}

document.querySelector(".no-emergency-tasks").style.backgroundColor =
    "yellow";

for (let i = 0; i < 2; i += 1) {
    document.querySelectorAll(".no-emergency-tasks div h3")[i].style.
    backgroundColor = "black";
}

document.querySelector("#footer-container").style.backgroundColor = "green";
