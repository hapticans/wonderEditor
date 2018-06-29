var i = 1;
var dragID;
var color = [];


class sequence {
    constructor() {
        this.order = false;
        this.count = 1;
        this.list = null;
    }
}

window.onload = () =>{
    $(`#sqS1`)["0"].sequence = "sqE1";
    $(`#sqS1`)["0"].result = "sqR1";
    var sqObject = new sequence();
    $(`#sqS1`)["0"].object = sqObject;
    //$($(`#sqE1`)["0"].parentNode).clone().appendTo($(`#resultList`)["0"]);
    $("#sqeuenceName")["0"].innerHTML = $("#sqE1")["0"].innerHTML;
}

addSequence = () =>{
    var sequName = prompt("Name für die Sequenz:", `Sequenz ${i}`);

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
        nextSequenceSetting["0"].result = `sqR${j}`;
        nextSequenceSetting["0"].id = `sqS${j}`;
        nextSequenceSetting["0"].style = `display:none`;
        nextSequenceSetting["0"].innerHTML = "du";
        nextSequenceSetting["0"].object = sqObject;
        var nextSequenceResult = $(`#dummyResultList`).clone();
        nextSequenceResult["0"].id = `sqR${j}`;
        nextSequenceResult["0"].style = `display:none`;
        $(`#resultList`)["0"].appendChild(nextSequenceResult["0"]);
        $(`#sqSettings`)["0"].appendChild(nextSequenceSetting["0"]);
    }
}

changeSequence = (sqID) =>{
    console.log($(`#${sqID}`    )["0"].object.order);
    var sequenceSettings = $("#sqSettings")["0"].children;
    for (let i = 0; i < sequenceSettings.length; i++) {
        if(sequenceSettings[i].id != sqID)
        {
            sequenceSettings[i].style = "display:none";
            $(`#${sequenceSettings[i].sequence}`)["0"].parentNode.className = "";
            $(`#${sequenceSettings[i].sequence}`)["0"].draggable = true;
            $(`#${sequenceSettings[i].result}`)["0"].style = "display:none";
        }else{            
            sequenceSettings[i].style = "display:true";
            $("#sqeuenceName")["0"].innerHTML = $(`#${sequenceSettings[i].sequence}`)["0"].innerHTML;
            $(`#${sequenceSettings[i].sequence}`)["0"].draggable = false;
            $(`#${sequenceSettings[i].sequence}`)["0"].parentNode.className = "active";
            $(`#${sequenceSettings[i].result}`)["0"].style = "display:true";
        }
    }    
}


createButtons = () =>{

}