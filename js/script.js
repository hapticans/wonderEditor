var i = 1;

addSqeunce = () =>{
    var ul = document.getElementById("squenceList");
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.appendChild(document.createTextNode("hallo"))
    li.appendChild(a);
    ul.appendChild(li);
    i++;
}

allowDrop = (ev) =>{
    ev.preventDefault();
}

drag = (ev) =>{
    ev.dataTransfer.setData("text", ev.target.id);
}

drop = (ev) =>{
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}