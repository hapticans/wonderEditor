allowDrop = (ev) => {
    ev.preventDefault();
}

drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
}

drop = (ev) => {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var cloneNode = $($(`#${data}`)["0"].parentNode).clone();
    console.log(cloneNode["0"].children["0"].id);   
    cloneNode.appendTo(ev.path["0"].children[1]);
}