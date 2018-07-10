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
    var color = short.slice(0, -numb.length);
    if(color == "rot"){
        color = "Rot";
        return `Konsole${numb}_${color}_Button`;
    }else if(color == "blau"){
        color = "Blue";
        return `Konsole${numb}_${color}_Button`;
    }else if(color == "gelb"){
        color = "Gelb";
        return `Konsole${numb}_${color}_Button`;
    }else if(color == "grün"){
        color = "Gruen";
        return `Konsole${numb}_${color}_Button`;
    }else if(color == "rechts"){
        color = "R";
        return `Knob_${numb}_${color}`;
    }else if(color == "links"){
        color = "L";
        return `Knob_${numb}_${color}`;
    }else{
        return short;
    }
}