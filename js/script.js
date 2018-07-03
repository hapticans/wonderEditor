window.onload = () =>{
    $(`#sqS1`)["0"].sequence = "sqE1";
    $(`#sqS1`)["0"].result = "sqR1";
    var sqObject = new sequence("sqE1");
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
        var sqObject = new sequence(`sqE${j}`);
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
    var sqSID = null;
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
                    sqSID = $(`#sqSettings`)["0"].children[j].id;
                    var li = document.createElement("li");
                    var a = document.createElement("a");
                    a.draggable = true;
                    a.id = value.farbe + "" + value.konsole;
                    a.appendChild(document.createTextNode(`Konsole ${value.konsole}`));
                    a.style = `background-color: ${elementFarbe}; color:black`;
                    li.appendChild(a);
                    li.wert = value.farbe+""+ value.konsole;
                    $(`#${$(`#sqSettings`)["0"].children[j].result}`)["0"].appendChild(li);
                }
            }
            //$(`#${$(`#squenceList`)["0"].children[i].result}`)["0"].appendChild(document.createTextNode(val));
        }
    }
    if(sqSID != null){
        getList(sqSID);
    }
}

addDreh = (val) => {
    var value = JSON.parse(val);
    console.log(value.richtung);
    
    var elementFarbe = "purple";
    var sqSID = null;
    for (let i = 0; i < $(`#squenceList`)["0"].children.length; i++) {
        if ($(`#squenceList`)["0"].children[i].className == "active") {
            var sqEID = $(`#squenceList`)["0"].children[i].children["0"].id;
            for (let j = 0; j < $(`#sqSettings`)["0"].children.length; j++) {
                if ($(`#sqSettings`)["0"].children[j].sequence == sqEID) {
                    sqSID = $(`#sqSettings`)["0"].children[j].id;
                    var li = document.createElement("li");
                    var a = document.createElement("a");
                    a.draggable = true;
                    a.id = value.richtung + "" + value.nummer;
                    a.appendChild(document.createTextNode(`Drehknopf # ${value.nummer} - ${value.richtung}`));
                    a.style = `background-color: ${elementFarbe}; color:white`;
                    li.appendChild(a);
                    li.wert = value.richtung + "" + value.nummer;
                    $(`#${$(`#sqSettings`)["0"].children[j].result}`)["0"].appendChild(li);
                }
            }
            //$(`#${$(`#squenceList`)["0"].children[i].result}`)["0"].appendChild(document.createTextNode(val));
        }
    }
    if (sqSID != null) {
        getList(sqSID);
    }
}

changeDreh = (val, id) =>{
    var value = JSON.parse(val);
    if(value.richtung == "rechts"){
        value.richtung = "links";
        for (let i = 0; i < $(`#squenceList`)["0"].children.length; i++) {
            if ($(`#squenceList`)["0"].children[i].className == "active") {
                var sqEID = $(`#squenceList`)["0"].children[i].children["0"].id;
                for (let j = 0; j < $(`#sqSettings`)["0"].children.length; j++) {
                    if ($(`#sqSettings`)["0"].children[j].sequence == sqEID) {
                        sqSID = $(`#sqSettings`)["0"].children[j].id;
                        var drehArray = $(`#${sqSID}`).find($(`.dreh`));
                        for (let index = 0; index < drehArray.length; index++) {
                            if (drehArray[index].id == id) {
                                drehArray[index].value = JSON.stringify(value);
                                drehArray[index].innerHTML = `L${value.nummer}`;
                            }   
                        }
                    }
                }
            }
        }
    }else{
        value.richtung = "rechts";
        for (let i = 0; i < $(`#squenceList`)["0"].children.length; i++) {
            if ($(`#squenceList`)["0"].children[i].className == "active") {
                var sqEID = $(`#squenceList`)["0"].children[i].children["0"].id;
                for (let j = 0; j < $(`#sqSettings`)["0"].children.length; j++) {
                    if ($(`#sqSettings`)["0"].children[j].sequence == sqEID) {
                        sqSID = $(`#sqSettings`)["0"].children[j].id;
                        var drehArray = $(`#${sqSID}`).find($(`.dreh`));
                        for (let index = 0; index < drehArray.length; index++) {
                            if (drehArray[index].id == id) {
                                drehArray[index].value = JSON.stringify(value);
                                drehArray[index].innerHTML = `R${value.nummer}`;
                            }
                        }
                    }
                }
            }
        }
    }
}


getList = (sqSID) =>{
    for (let i = 1; i < $(`#resultList`)["0"].children.length; i++) {
        if ($(`#resultList`)["0"].children[i].style.display != "none"){
            for (let j = 0; j < $(`#resultList`)["0"].children[i].children.length; j++) {
                if(j==0){
                    $(`#${sqSID}`)["0"].object.list = [];    
                }
                $(`#${sqSID}`)["0"].object.list.push($(`#resultList`)["0"].children[i].children[j].wert);
                console.log($(`#${sqSID}`)["0"].object.list);
                
            }
            if ($(`#resultList`)["0"].children[i].children.length == 0){
                $(`#${sqSID}`)["0"].object.list = [];
            }
        }
    }
}


createFile = () =>{
    var str = "";
    for (let i = 0; i < $(`#sqSettings`)["0"].children.length; i++) {
        str = str + createLine(i)+"\n";
    }
    
    if(str.includes(null)){
        return false;
    }

    var name = "sequence.txt";
    download(name,str);
}

createLine = (i) =>{
    var obj = $(`#sqSettings`)["0"].children[i].object;
    var str = `${obj.name}:${obj.count},${obj.order}`;
    console.log(obj);
    
    for (let i = 0; i < obj.list.length; i++) {
        str = `${str},${buttonRename(obj.list[i])}`;
    }
    if(obj.count > obj.list.length){        
        alert(`In ${$(`#${obj.name}`)["0"].innerHTML} wird mehr gefordert, als vorhanden ist.`)
        return null;
    }
    str = `${str};`;
    return str;
}

download = (filename, text) => {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}