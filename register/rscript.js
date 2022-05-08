var leftColor = document.getElementsByClassName("LeftColor")[0];
var rightColor = document.getElementsByClassName("RightColor")[0];
var body = document.getElementsByTagName('body');

function Color() {
    document.body.style.background = "linear-gradient(to right, " 
    + leftColor.value 
    + " , " 
    + rightColor.value 
    + ")";

    // CSS.textContent = body.style.background + ";";
}

leftColor.addEventListener("input", Color);
rightColor.addEventListener('input', Color);
