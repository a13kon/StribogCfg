"use strict";

//массив для формирования файла-конфигурации
let configArr = [];

//объект значений и div-ов
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
    
};

//prepare скрытие при загрузке страницы
rows.getStyle();
rows.getState();
rows.getValue();
rows.setVisibility();

//слуаштели событий
let createBtn = document.getElementById("createBtn");
createBtn.addEventListener('click', () => {rows.getValue(); createArrCfg("===========click===========", rows.value, rows.quaentity)});

document.getElementById("inpC03").addEventListener('click', () => {
    rows.getValue();
    rows.state[14].value = stepsVisibility(!(rows.value[2] == 2 && rows.value[6] == 1), rows.value[14], 1, "optC15par2");
    rows.state[17].checked = checkboxSetStatus(rows.value[2] > 0 && rows.value[3] == 0 || rows.value[2] > 1 && rows.value[7] == 0, rows.state[17].checked);
    rows.state[19].checked = checkboxSetStatus(rows.value[2] > 1 && rows.value[6] == 1, rows.state[19].checked);
    rows.setVisibility();
});

document.getElementById("inpC04").addEventListener('click', () => {
    rows.getValue();
    // доработать функцию stepsVisibility под это условие. Скрывается не с конца, а сначала 
    rows.state[17].checked = checkboxSetStatus(rows.value[2] > 0 && rows.value[3] == 0 || rows.value[2] > 1 && rows.value[7] == 0, rows.state[17].checked);
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
    rows.state[5].value = stepsVisibility(rows.value[4], rows.value[5], 3, "optC06par4", "optC06par5", "optC06par6", "optC06par7", "optC06par8");
});

document.getElementById("inpC07").addEventListener('click', () => {
    rows.getValue();
    rows.state[14].value = stepsVisibility(!(rows.value[2] == 2 && rows.value[6] == 1), rows.value[14], 1, "optC15par2");
    rows.state[19].checked = checkboxSetStatus(rows.value[2] > 1 && rows.value[6] == 1, rows.state[19].checked);
});

document.getElementById("inpC08").addEventListener('click', () => {
    rows.getValue();
    rows.state[17].checked = checkboxSetStatus(rows.value[2] > 0 && rows.value[3] == 0 || rows.value[2] > 1 && rows.value[7] == 0, rows.state[17].checked); 
    rows.setVisibility()
});

document.getElementById("inpC09").addEventListener('click', function() {
    rows.getValue();
    rows.state[9].value = stepsVisibility(rows.value[8], rows.value[9], 3, "optC10par4", "optC10par5", "optC10par6", "optC10par7", "optC10par8");
});

document.getElementById("inpC11").addEventListener('click', () => {
    rows.getValue();
    rows.state[18].checked = checkboxSetStatus(rows.value[10] || rows.value[11] > 0, rows.state[18].checked);
});

document.getElementById("inpC12").addEventListener('click', () => {
    rows.getValue();
    rows.state[18].checked = checkboxSetStatus(rows.value[10] || rows.value[11] > 0, rows.state[18].checked);
});

document.getElementById("inpC13").addEventListener('click', () => {
    rows.getValue();
    rows[20].checked = checkboxSetStatus(rows.value[12] == 1 || rows.value[13] == 1, rows.state[20].checked);
});

document.getElementById("inpC14").addEventListener('click', () => {
    rows.getValue();
    rows[20].checked = checkboxSetStatus(rows.value[12] == 1 || rows.value[13] == 1, rows.state[20].checked);
    rows.setVisibility();
});

document.getElementById("inpC18").addEventListener('click', () => {
    rows.getValue();
    rows.state[17].checked = checkboxSetStatus(rows.value[2] > 0 && rows.value[3] == 0 || rows.value[2] > 1 && rows.value[7] == 0, rows.state[17].checked);
});

document.getElementById("inpC19").addEventListener('click', () => {
    rows.getValue();
    rows.state[18].checked = checkboxSetStatus(rows.value[10] || rows.value[11] > 0, rows.state[18].checked);
});

document.getElementById("inpC20").addEventListener('click', () => {
    rows.getValue();
    rows.state[19].checked = checkboxSetStatus(rows.value[2] > 1 && rows.value[6] == 1, rows.state[19].checked);
});

document.getElementById("inpC21").addEventListener('click', () => {
    rows.getValue();
    rows[20].checked = checkboxSetStatus(rows.value[12] == 1 || rows.value[13] == 1, rows.state[20].checked);
});

function stepsVisibility (condition, value, defValue, ...option) {
    if (condition == false) { //!conditional не работает из-за сторог сравнения (===)
        for (let i = 0; i < option.length; i++){
            document.getElementById(String(option[i])).style.display = "contents";
        };
        return value;
    }
    else {
        for (let i = 0; i < option.length; i++){
            document.getElementById(String(option[i])).style.display = "none";
        };
        return value > defValue ? defValue : value;
    }
};

function checkboxSetStatus(condition, value) {
    return condition ? true : value;
}

//в будущем создание файла, сейчас просто чек массива
function createArrCfg(msg, arr, qua) {
    console.log(msg);
      for (let i = 1; i <= qua; i++) {
         console.log(`[${i-1}] = ${arr[i-1]}`);
    }
}