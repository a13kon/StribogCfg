"use strict";

//получение всех div-ов для дальнейшего скрытия
var divC01 = document.getElementById("divC01");
var divC02 = document.getElementById("divC02");
var divC03 = document.getElementById("divC03");
var divC04 = document.getElementById("divC04");
var divC05 = document.getElementById("divC05");
var divC06 = document.getElementById("divC06");
var divC07 = document.getElementById("divC07");
var divC08 = document.getElementById("divC08");
var divC09 = document.getElementById("divC09");
var divC10 = document.getElementById("divC10");
 
//prepare скрытие при загрузке страницы
setVisibility();

//массив для формирования файла-конфигурации
var configArr = [];

//слуаштели событий
var createBtn = document.getElementById("createBtn");
createBtn.addEventListener('click', () => createArrCfg("===========click===========", configArr));

document.getElementById("inpC03").addEventListener('click', setVisibility);
document.getElementById("inpC04").addEventListener('click', setVisibility);
document.getElementById("inpC08").addEventListener('click', setVisibility);

// var obj = document.getElementById("divC01");
// if (obj.style.display !="flex") {
//     obj.style.display = "flex";
// }
// else obj.style.display = "none";

//функция динамического отображения элементов и динамических значений
function setVisibility() {

    if (getElemStatus("inpC03") > 0) {
        divC04.style.display = "flex";
        if (getElemStatus("inpC04") == 1){
            divC05.style.display = "flex";
            divC06.style.display = "flex";
        }
        else {
            divC05.style.display = "none";
            divC06.style.display = "none";
        }
    }
    else {
        divC04.style.display = "none";
        divC05.style.display = "none";
        divC06.style.display = "none";
    }

    // getElemStatus("inpC03") > 0?                                    divC04.style.display = "flex" : divC04.style.display = "none";
    // getElemStatus("inpC03") > 0 && getElemStatus("inpC04") == 1?    divC05.style.display = "flex" : divC05.style.display = "none";
    // getElemStatus("inpC03") > 0 && getElemStatus("inpC04") == 1?    divC06.style.display = "flex" : divC06.style.display = "none";
    getElemStatus("inpC03") > 1?                                    divC07.style.display = "flex" : divC07.style.display = "none";
    getElemStatus("inpC03") > 1?                                    divC08.style.display = "flex" : divC08.style.display = "none";
    getElemStatus("inpC03") > 1 && getElemStatus("inpC08") == 1?    divC09.style.display = "flex" : divC09.style.display = "none";
    getElemStatus("inpC03") > 1 && getElemStatus("inpC08") == 1?    divC10.style.display = "flex" : divC10.style.display = "none";

}

//функция получения значения input
function getElemStatus(elemId) {
    var elem = document.getElementById(elemId);

    if (elem.type == "select-one") {
    return elem.value ;
    }
    else if (elem.type == "checkbox") {
        return elem.checked;
    }
    else {
        return "wrong type";
    }
}

//заполнение массива
function createArrCfg(msg, arr) {
    console.log(msg); 
      
    for (let i = 1; i <= 22; i++) {
         arr[i-1] = getElemStatus(i < 10 ? "inpC0" + String(i) : "inpC" + String(i));
         console.log(`[${i-1}] = ${arr[i-1]}`);
    }
}

