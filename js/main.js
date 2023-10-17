"use strict";

log();
log();

function log() {
    console.log('click');

        var obj = document.getElementById("divC01");
        if (obj.style.display !="flex") {
            obj.style.display = "flex";
        }
        else obj.style.display = "none";
    }


var createBtn = document.getElementById("createBtn");
createBtn.addEventListener('click', log);

