var i = 1;
var dragID;
var color = [];


class sequence {
    constructor() {

    }
}

window.onload = () =>{
    $(`#sqS1`)["0"].sequence = "sqE1"
    //$($(`#sqE1`)["0"].parentNode).clone().appendTo($(`#resultList`)["0"]);
    $("#sqeuenceName")["0"].innerHTML = $("#sqE1")["0"].innerHTML;
    var sequence1 = new sequence();
}

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
        var j = i;
        li.onclick = function () { changeSequence(`sqS${j}`); };
        ul.appendChild(li);
        var nextSequenceSetting = $(`#sqS1`).clone();
        nextSequenceSetting["0"].sequence = `sqE${j}`;
        nextSequenceSetting["0"].id = `sqS${j}`;
        nextSequenceSetting["0"].style = `display:none`;
        nextSequenceSetting["0"].innerHTML = "du";
        $(`#sqSettings`)["0"].appendChild(nextSequenceSetting["0"]);
    }
}

changeSequence = (sqID) =>{
    var sequenceSettings = $("#sqSettings")["0"].children;
    for (let i = 0; i < sequenceSettings.length; i++) {
        if(sequenceSettings[i].id != sqID)
        {
            sequenceSettings[i].style = "display:none";
            $(`#${sequenceSettings[i].sequence}`)["0"].parentNode.className = "";
            $(`#${sequenceSettings[i].sequence}`)["0"].draggable = true; 
        }else{
            sequenceSettings[i].style = "display:true";
            $("#sqeuenceName")["0"].innerHTML = $(`#${sequenceSettings[i].sequence}`)["0"].innerHTML;
            $(`#${sequenceSettings[i].sequence}`)["0"].draggable = false;
            $(`#${sequenceSettings[i].sequence}`)["0"].parentNode.className = "active";
        }
    }
}


createButtons = () =>{

}