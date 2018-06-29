allowDrop = (ev) => {
    ev.preventDefault();
}

drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
}

dragDel = (ev) => {
    ev.dataTransfer.setData("delText", ev.target.id);
}

drop = (ev) => {
    ev.preventDefault();
    try {
        var data = ev.dataTransfer.getData("text");
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
    } catch (error) {
        
    }
}

del = (ev) =>{
    ev.preventDefault();
    var data = ev.dataTransfer.getData("delText");
    if(data != ""){
        for (let i = 0; i < $(`#squenceList`)["0"].children.length; i++) {
            if ($(`#squenceList`)["0"].children[i].className == "active") {
                var sqEID = $(`#squenceList`)["0"].children[i].children["0"].id;
                for (let j = 0; j < $(`#sqSettings`)["0"].children.length; j++) {
                    if ($(`#sqSettings`)["0"].children[j].sequence == sqEID) {
                        var sqRID = $(`#sqSettings`)["0"].children[j].result;
                        for (let k = 1; k < $(`#resultList`)["0"].children.length; k++) {
                            if ($(`#resultList`)["0"].children[k].id == sqRID){
                                for (let l = 0; l < $(`#resultList`)["0"].children[k].children.length; l++) {
                                    if ($(`#resultList`)["0"].children[k].children[l].children["0"].id == data){
                                        $(`#resultList`)["0"].children[k].removeChild($(`#resultList`)["0"].children[k].children[l]);
                                        getList($(`#sqSettings`)["0"].children[j].id);
                                    }                                       
                                }
                            }   
                        }
                    }
                }
            }
        }
    }
}