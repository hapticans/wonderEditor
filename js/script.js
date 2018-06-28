var i = 1;
var dragID;
var color = [];


addSqeunce = () =>{
    var sequName = prompt("Name für die Sequenz", `Sequenz ${i}`);

    if (sequName == null || sequName == "") {
    } else {
        i++;
        var ul = document.getElementById("squenceList");
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.draggable = true; 
        a.id = `sqE${i}`;
        a.appendChild(document.createTextNode(sequName));
        li.appendChild(a);
        li.onclick = function () { changeSequence(`sqS${i}`); };
        ul.appendChild(li);
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
    var data = ev.dataTransfer.getData("text");    
    $($(`#${data}`)["0"].parentNode).clone().appendTo(ev.path["0"].children[1]);
}

changeSequence = (sqID) =>{
    var sequenceSettings = $("#sqSettings")["0"].children;
    for (let i = 0; i < sequenceSettings.length; i++) {
        if(sequenceSettings[i].id != sqID)
        {
            sequenceSettings[i].style = "display:none";
        }else{
            sequenceSettings[i].style = "display:true";
        }
    }

}