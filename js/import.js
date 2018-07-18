var seqArray; //initializing Array
var filecontent; //initializing String
var PointArray = []; //initializing Array
var ResultArray = []; //initializing Array
var ResultStr; //initalizing String

/**
* @desc main function;
 *      reads txt input into a string (filecontent) and calls the self defined functions to build a polyline
* @see Learnweb
* @param event OpenFile event
*/
var ReadFile = function (event) {

    var input = event.target;
    var reader = new FileReader();


    reader.onload = function () {

        filecontent = reader.result; //coordinate data saved to this variable

        BuildArray();

    };
    reader.readAsText(input.files[0]);
};

/**
 * @desc transforms input String into Point Array
 */
function BuildArray() {
    seqArray = filecontent.split(";"); // using the whitespaces to split String into an array
    var homeSequence = seqArray[0].split(":")[1].split(",");
    changeImportOrder(homeSequence[1],true);
    
    changeImportNumber(homeSequence[0],true)
    for (let i = 1; i < seqArray.length-1; i++) {
        var seqName = seqArray[i].split(":")[0];
        addSequence(seqName);
        addSequences(seqName);
        changeSequence(seqName.replace("E","S"));
        var squence = seqArray[i].split(":")[1].split(",");
        changeImportOrder(squence[1],false);
        changeImportNumber(squence[0]*1,false);
        for (let i = 2; i < squence.length; i++) {
            addImportButton(squence[i]);
        }
        changeSequence("sqS1");
    }
}

var changeImportOrder = (order,home) => {
    if(order == "true"){
        for (let i = 0; i < $(`#squenceList`)["0"].children.length; i++) {
            if ($(`#squenceList`)["0"].children[i].className == "active") {
                var sqEID = $(`#squenceList`)["0"].children[i].children["0"].id;
                for (let j = 0; j < $(`#sqSettings`)["0"].children.length; j++) {
                    if ($(`#sqSettings`)["0"].children[j].sequence == sqEID) {
                        if (home == true) {
                            $(`#sqSettings`)["0"].children[j].children[1].children[0].children[0].children[0].children[0].checked = true;
                        } else {
                            $(`#sqSettings`)["0"].children[j].children[2].children[1].children[0].children[0].children[0].checked = true;
                        }
                    }
                }
            }
        }
        changeOrder(true);
    }
}

var changeImportNumber = (buttonNumber, home) => {
    for (let i = 0; i < $(`#squenceList`)["0"].children.length; i++) {
        if ($(`#squenceList`)["0"].children[i].className == "active") {
            var sqEID = $(`#squenceList`)["0"].children[i].children["0"].id;
            for (let j = 0; j < $(`#sqSettings`)["0"].children.length; j++) {
                if ($(`#sqSettings`)["0"].children[j].sequence == sqEID) {
                    if (home == true) {
                        $(`#sqSettings`)["0"].children[j].children[1].children[0].children[1].children[1].value = buttonNumber;
                    } else {
                        $(`#sqSettings`)["0"].children[j].children[2].children[1].children[1].children[1].value = buttonNumber;
                    }
                }
            }
        }
    }
    changeNumberButtons(buttonNumber);
}

var addImportButton = (buttonString) =>{
    buttonString = buttonString.split("_");
    if (buttonString[2] == "Button") {
        var farbe;
        switch (buttonString[1]) {
            case "Blue":
                farbe = "blau";
                break;
            case "Rot":
                farbe = "rot";
                break;
            case "Gelb":
                farbe = "gelb";
                break;
            case "Gruen":
                farbe = "grün";
                break;
        }
        var nummer = buttonString[0].split("Konsole")[1];
        var str = `{ "farbe":"${farbe}", "konsole":${nummer * 1}}`;
        addButton(str);
    }else{
        var richtung = "rechts";
        if(buttonString[2] == "L"){
            richtung = "links";
        }
        var nummer = buttonString[1];
        var str = `{ "richtung":"${richtung}", "nummer":${nummer * 1}}`;
        addDreh(str);
    }
}