var color = [
    ["grün", "#4CAF50"],
    ["blau", "#372db6"],
    ["gelb", "#c5ba1f"],
    ["rot", "#ca2a2a"]
];

var i = 1;

class sequence {
    constructor(name) {
        this.name = name;
        this.order = false;
        this.count = 1;
        this.list = [];
    }
}

buttonRename = (short) =>{
    var numb = short.replace(/^\D+/g, ''); // replace all leading non-digits with nothing
    console.log(numb);
    var color = short.slice(0, -numb.length);
    console.log(color);
    if(color == "rot"){
        color = "Rot";
    }else if(color == "blau"){
        color = "Blue";
    }else if(color == "gelb"){
        color = "Gelb";
    }else if(color == "grün"){
        color = "Gruen";
    }
    return `Konsole${numb}_${color}_Button`
}