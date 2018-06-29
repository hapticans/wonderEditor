var i = 1;
var dragID;
var color = [
    ["grün","#4CAF50"], 
    ["blau", "#372db6"], 
    ["gelb", "#c5ba1f"], 
    ["rot","#ca2a2a"]
];


class sequence {
    constructor() {
        this.order = false;
        this.count = 1;
        this.list = [];
    }
}

window.onload = () =>{
    $(`#sqS1`)["0"].sequence = "sqE1";
    $(`#sqS1`)["0"].result = "sqR1";
    var sqObject = new sequence();
    $(`#sqS1`)["0"].object = sqObject;
    //$($(`#sqE1`)["0"].parentNode).clone().appendTo($(`#resultList`)["0"]);
    $("#sqeuenceName")["0"].innerHTML = $("#sqE1")["0"].innerHTML;
    $("#sqeuenceSettingName")["0"].innerHTML = $("#sqE1")["0"].innerHTML;     
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
        var nextSequenceSetting = $(`#dummySquence`).clone();
        for (let i = 0; i < nextSequenceSetting["0"].children.length; i++) {
            if (nextSequenceSetting["0"].children[i].id == "sqeuenceSettingName"){
                nextSequenceSetting["0"].children[i].innerHTML = sequName;
            }
        }
        nextSequenceSetting["0"].sequence = `sqE${j}`;
        nextSequenceSetting["0"].result = `sqR${j}`;
        nextSequenceSetting["0"].id = `sqS${j}`;
        nextSequenceSetting["0"].style = `display:none`;
        var sqObject = new sequence();
        nextSequenceSetting["0"].object = sqObject;
        var nextSequenceResult = $(`#dummyResultList`).clone();
        nextSequenceResult["0"].id = `sqR${j}`;
        nextSequenceResult["0"].style = `display:none`;
        $(`#resultList`)["0"].appendChild(nextSequenceResult["0"]);
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
            $(`#${sequenceSettings[i].result}`)["0"].style = "display:none";
        }else{            
            sequenceSettings[i].style = "display:true";
            $("#sqeuenceName")["0"].innerHTML = $(`#${sequenceSettings[i].sequence}`)["0"].innerHTML;
            $("#sqeuenceSettingName")["0"].innerHTML = $(`#${sequenceSettings[i].sequence}`)["0"].innerHTML;
            $(`#${sequenceSettings[i].sequence}`)["0"].draggable = false;
            $(`#${sequenceSettings[i].sequence}`)["0"].parentNode.className = "active";
            $(`#${sequenceSettings[i].result}`)["0"].style = "display:true";
        }
    }    
}


changeOrder = (val) =>{
    for (let i = 0; i < $(`#squenceList`)["0"].children.length; i++) {
        if ($(`#squenceList`)["0"].children[i].className == "active") {
            var sqEID = $(`#squenceList`)["0"].children[i].children["0"].id;
            for (let j = 0; j < $(`#sqSettings`)["0"].children.length; j++) {
                if ($(`#sqSettings`)["0"].children[j].sequence == sqEID) {
                    $(`#sqSettings`)["0"].children[j].object.order = val;
                }
            }
        }
    }
}

changeNumberButtons = (val) => {
    for (let i = 0; i < $(`#squenceList`)["0"].children.length; i++) {
        if ($(`#squenceList`)["0"].children[i].className == "active") {
            var sqEID = $(`#squenceList`)["0"].children[i].children["0"].id;
            for (let j = 0; j < $(`#sqSettings`)["0"].children.length; j++) {
                if ($(`#sqSettings`)["0"].children[j].sequence == sqEID) {
                    $(`#sqSettings`)["0"].children[j].object.count = val;                    
                }
            }
        }
    }
}

addButton = (val) => {
    var value = JSON.parse(val);
    var elementFarbe;
    for (let i = 0; i < color.length; i++) {
        if (color[i][0] == value.farbe) {
            elementFarbe = color[i][1];  
        }
    }
    for (let i = 0; i < $(`#squenceList`)["0"].children.length; i++) {
        if ($(`#squenceList`)["0"].children[i].className == "active"){
            var sqEID = $(`#squenceList`)["0"].children[i].children["0"].id;            
            for (let j = 0; j < $(`#sqSettings`)["0"].children.length; j++) {
                if ($(`#sqSettings`)["0"].children[j].sequence == sqEID){
                    var li = document.createElement("li");
                    var a = document.createElement("a");
                    a.draggable = true;
                    a.appendChild(document.createTextNode(`Konsole ${value.konsole}`));
                    a.style = `background-color: ${elementFarbe}; color:black`;
                    li.appendChild(a);
                    $(`#${$(`#sqSettings`)["0"].children[j].result}`)["0"].appendChild(li);
                }
            }
            //$(`#${$(`#squenceList`)["0"].children[i].result}`)["0"].appendChild(document.createTextNode(val));
        }
    }
}

tester = () =>{
    console.log("hi");
}