"use strict";   

var addRandom=()=>{
    var sqeuenceAnzahl = prompt("Anzahl der Sequenzen") * 1;
    if (sqeuenceAnzahl >= 9){
        alert("Bitte kleiner als 9")
        return null;
    }
    var buttonAnzahl = prompt("Anzahl der Buttons pro Squenz")*1;
    var knobProzent = prompt("Wahrscheinlichkeit für Drehknöpfe in %")*1;
    changeRandomOrder(true);
    changeRandomNumber($('#squenceList')["0"].children.length + sqeuenceAnzahl-1,true);
    for (let index = 0; index < sqeuenceAnzahl; index++) {
        addSequence(`sqE${$(`#sqSettings`)["0"].children.length + 1}`);
        addSequences(`sqE${$(`#sqSettings`)["0"].children.length}`);
        changeSequence(`sqS${$(`#sqSettings`)["0"].children.length}`);
        changeRandomOrder();
        changeRandomNumber(buttonAnzahl);
        for (let index = 0; index < buttonAnzahl; index++) {
            if (Math.floor(Math.random() * 101) > 100-knobProzent) {
                addRandomDreh();
            } else {
                addRandomButton();
            }   
        }
        changeSequence(`sqS1`);
    }
}

var changeRandomOrder = (home) =>{
    var order = false;
    if (Math.floor(Math.random() * 2) >= 1) {
        order = true;
        for (let i = 0; i < $(`#squenceList`)["0"].children.length; i++) {
            if ($(`#squenceList`)["0"].children[i].className == "active") {
                var sqEID = $(`#squenceList`)["0"].children[i].children["0"].id;
                for (let j = 0; j < $(`#sqSettings`)["0"].children.length; j++) {
                    if ($(`#sqSettings`)["0"].children[j].sequence == sqEID) {
                        if(home == true){
                            $(`#sqSettings`)["0"].children[j].children[1].children[0].children[0].children[0].children[0].checked = true;
                        }else{
                            $(`#sqSettings`)["0"].children[j].children[2].children[1].children[0].children[0].children[0].checked = true;
                        }
                    }
                }
            }
        }
    }
    changeOrder(order);
}

var changeRandomNumber = (buttonNumber, home) => {
    for (let i = 0; i < $(`#squenceList`)["0"].children.length; i++) {
        if ($(`#squenceList`)["0"].children[i].className == "active") {
            var sqEID = $(`#squenceList`)["0"].children[i].children["0"].id;
            for (let j = 0; j < $(`#sqSettings`)["0"].children.length; j++) {
                if ($(`#sqSettings`)["0"].children[j].sequence == sqEID) {
                    if(home == true){
                        $(`#sqSettings`)["0"].children[j].children[1].children[0].children[1].children[1].value  = buttonNumber;
                    }else{
                        $(`#sqSettings`)["0"].children[j].children[2].children[1].children[1].children[1].value = buttonNumber;
                    }
                }
            }
        }
    }
    changeNumberButtons(buttonNumber);
}

var addRandomDreh = () =>{
    var richtung = "links";
    var nummer = Math.floor(Math.random() * 14) + 1;;
    if (Math.floor(Math.random() * 2) >= 1) {
        richtung = "rechts";
    }
    var str = `{ "richtung":"${richtung}", "nummer":${nummer * 1}}`;
    addDreh(str);
}

var addRandomButton = () => {
    var nummer = Math.floor(Math.random() * 6) + 1;
    var farbe;
    switch (Math.floor(Math.random() * 4) + 1) {
        case 1:
            farbe = "blau";
            break;
        case 2:
            farbe = "rot";
            break;
        case 3:
            farbe = "gelb";
            break;
        case 4:
            farbe = "grün";
            break;
    }
    var str = `{ "farbe":"${farbe}", "konsole":${nummer * 1}}`;
    addButton(str);
}

var addSequences = (data) =>{
    var cloneNode = $($(`#${data}`)["0"].parentNode).clone();
    for (let i = 0; i < $(`#squenceList`)["0"].children.length; i++) {
        if ($(`#squenceList`)["0"].children[i].className == "active") {
            var sqEID = $(`#squenceList`)["0"].children[i].children["0"].id;
            for (let j = 0; j < $(`#sqSettings`)["0"].children.length; j++) {
                if ($(`#sqSettings`)["0"].children[j].sequence == sqEID) {
                    cloneNode["0"].wert = data;
                    cloneNode["0"].children["0"].style.backgroundColor = "black";
                    if (sqEID.slice(-1) * 1 < data.slice(-1) * 1) {
                        $(`#${$(`#sqSettings`)["0"].children[j].result}`)["0"].appendChild(cloneNode["0"]);
                        getList($(`#sqSettings`)["0"].children[j].id);
                    } else {
                        alert("Nur der Hierachy nach sortieren!")
                    }
                }
            }
        }
    }
}