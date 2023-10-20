"use strict";

//массив для формирования файла-конфигурации
let configArr = [];

//слуаштели событий
let createBtn = document.getElementById("createBtn");
createBtn.addEventListener('click', () => {rows.getValue(); createArrCfg("===========click===========", rows.value, rows.quaentity)});

document.getElementById("inpC03").addEventListener('click', () => {rows.getValue(); rows.setVisibility()});

document.getElementById("inpC04").addEventListener('click', () => {
    rows.getValue(); 
    if (rows.value[3] == 0) {
        document.getElementById("optC08par0").style.display = "contents";
    }
    else
    {
        document.getElementById("optC08par0").style.display = "none";
        rows.state[7].value = 1;
    }
    rows.getValue(); 
    rows.setVisibility();
});

document.getElementById("inpC05").addEventListener('click', function() {
    rows.getValue();
    if (rows.value[4] == 0) {
        document.getElementById("optC06par4").style.display = "contents";
        document.getElementById("optC06par5").style.display = "contents";
        document.getElementById("optC06par6").style.display = "contents";
        document.getElementById("optC06par7").style.display = "contents";
        document.getElementById("optC06par8").style.display = "contents";
         }
    else {
        document.getElementById("optC06par4").style.display = "none";
        document.getElementById("optC06par5").style.display = "none";
        document.getElementById("optC06par6").style.display = "none";
        document.getElementById("optC06par7").style.display = "none";
        document.getElementById("optC06par8").style.display = "none";
        if (rows.value[5] > 3) {
        rows.state[5].value = 3;
        }
    }
});

document.getElementById("inpC08").addEventListener('click', () => {rows.getValue(); rows.setVisibility()});

document.getElementById("inpC14").addEventListener('click', () => {rows.getValue(); rows.setVisibility()});




//получение div-ов для дальнейшего скрытия
let rows = {
    style : [], //стиль/видимость объекта 
    value : [], //конечное значение int
    state : [], //состояние элемента
    quaentity : 22, //нужно чтобы рассчитывалось

    getStyle() {
        for (let i = 1; i <= this.quaentity; i++) {
            rows.style[i - 1] = document.getElementById(i < 10 ? "divC0" + String(i) : "divC" + String(i));
        }
    },

    getValue() {
        for (let i = 1; i <= this.quaentity; i++) {
            rows.value[i - 1] = this.getElemStatus(i < 10 ? "inpC0" + String(i) : "inpC" + String(i));
        }
    },

    getState() {
    for (let i = 1; i <= this.quaentity; i++) {
        rows.state[i - 1] = document.getElementById(i < 10 ? "inpC0" + String(i) : "inpC" + String(i));
        }
    },    


    //функция получения значения input
    getElemStatus(elemId) {
        var elem = document.getElementById(elemId);
    
        if (elem.type == "select-one") {
        return elem.value ;
        }
        else if (elem.type == "checkbox") {
            return elem.checked? 1 : 0;
        }
        else {
            return "wrong type";
        }
    },

    //функция динамического отображения элементов и динамических значений
     setVisibility() {

        rows.getValue();                                       
        rows.value[2] > 0?                            rows.style[3].style.display = "flex" : rows.style[3].style.display = "none";
        rows.value[2] > 0 && rows.value[3] == 1?      rows.style[4].style.display = "flex" : rows.style[4].style.display = "none"; 
        rows.value[2] > 0 && rows.value[3] == 1?      rows.style[5].style.display = "flex" : rows.style[5].style.display = "none"; 
        rows.value[2] > 1?                            rows.style[6].style.display = "flex" : rows.style[6].style.display = "none"; 
        rows.value[2] > 1?                            rows.style[7].style.display = "flex" : rows.style[7].style.display = "none"; 
        rows.value[2] > 1 && rows.value[7] == 1?      rows.style[8].style.display = "flex" : rows.style[8].style.display = "none"; 
        rows.value[2] > 1 && rows.value[7] == 1?      rows.style[9].style.display = "flex" : rows.style[9].style.display = "none"; 
        rows.value[13] == 1?                          rows.style[14].style.display = "flex" : rows.style[14].style.display = "none"; 
    
    },
    
}
 
//prepare скрытие при загрузке страницы
rows.getStyle();
rows.getState();
rows.getValue();
rows.setVisibility();


//в будущем создание файла, сейчас просто чек массива
function createArrCfg(msg, arr, qua) {
    console.log(msg);
      for (let i = 1; i <= qua; i++) {
         console.log(`[${i-1}] = ${arr[i-1]}`);
    }
}

