console.log("helo world")

var input = document.getElementById("input");
var li = document.getElementsByTagName("ul");

document.getElementById("add_todo").onclick = function(){
    let el = document.createElement("li");
    el.innerText = input.value;
    input.value = "";
    li[0].appendChild(el);

    console.log(input.value);
}
