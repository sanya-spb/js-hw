"use strict";

function getTf() {
    let Tc = document.getElementById("tcel").value;
    Tc = parseInt(Tc);
    let Tf = (9 / 5) * Tc + 32;
    
    alert("Температура по Фаренгейту = " + Tf.toFixed(2) + " град.");
}

function adminAndName() {
    let admin;
    let name;

    admin = "Василий";
    name = admin;

    alert("admin = " + admin);
}

function checkSumm() {
    let result = 1000 + "108";
    alert("ответ: " + result);
}