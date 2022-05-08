var button = document.getElementsByTagName("button")[2];
var ul = document.getElementsByClassName('litss')[0];
var input = document.getElementById('userinput');

function AddListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function InputLength() {
    return input.value.length;
}

function AddListAfterClick() {
    if(InputLength()>0) AddListElement();
}

function AddListAfterKeypress(event) {
    if(InputLength()>0 && event.keyCode == 13) {
        AddListElement();
    }
}

button.addEventListener("click",AddListAfterClick);
input.addEventListener("keypress",AddListAfterKeypress);
