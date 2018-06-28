var i = 1;

addSqeunce = () =>{
    var sequName = prompt("Name für die Sequenz", `Sequenz ${i}`);

    if (sequName == null || sequName == "") {
    } else {
        var ul = document.getElementById("squenceList");
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.appendChild(document.createTextNode(sequName))
        li.appendChild(a);
        ul.appendChild(li);
        i++;
    }
}

allowDrop = (ev) =>{
    ev.preventDefault();
}

drag = (ev) =>{
    ev.dataTransfer.setData("text", ev.target.id);
}

drop = (ev) =>{
    ev.preventDefault();
    $("#sq").clone().appendTo(ev.path["0"].children[1]);
}