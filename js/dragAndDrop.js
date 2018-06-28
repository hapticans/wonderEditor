allowDrop = (ev) => {
    ev.preventDefault();
}

drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
}

drop = (ev) => {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    $($(`#${data}`)["0"].parentNode).clone().appendTo(ev.path["0"].children[1]);
}