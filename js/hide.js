var tempSequenceName;

var hide = () =>{
    $(`#hidebar`)["0"].style.display="none";
    $(`#sqSettings`)["0"].style.display = "none";
    $(`#hidecenter`)["0"].style.display = "none";
    $(`#showcenter`)["0"].style.display = "";
    $(`#body`)["0"].style.backgroundColor = "#f1f1f1";
    tempSequenceName = $(`#sqeuenceName`)["0"].innerHTML;
    $(`#sqeuenceName`)["0"].innerHTML = "Sequenz";    
}

var show = () => {
    $(`#hidebar`)["0"].style.display = "";
    $(`#sqSettings`)["0"].style.display = "";
    $(`#hidecenter`)["0"].style.display = "";
    $(`#showcenter`)["0"].style.display = "none";
    $(`#body`)["0"].style.backgroundColor = "white";
    $(`#sqeuenceName`)["0"].innerHTML = tempSequenceName;
}