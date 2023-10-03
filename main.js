const arrayIng = [];

function addRedBorder(id) {
    elment = document.querySelector("#" + id)
    elment.style.border = "5px solid green";
}

function highlightCard (selector){
    var element = document.querySelector(selector);
    
    element.classList.toggle("cardHighlight");
}

function selectCard(selector) {
    var element = document.querySelector(selector);
    element.classList.toggle("cardSelected");
    if (arrayIng.includes(selector)) arrayIng.pop(selector);
    else arrayIng.push(selector)
}

function showSelectedCards(){
    if (arrayIng.length > 0) alert ("Ingressos Selecionados para: " + arrayIng);
}