"use strict";

var pole = [];
var seznam = [];

function VypisDoTabulky() {
  var table = document.getElementById("studentTable"); // Vymaž aktuální obsah tabulky

  table.innerHTML = '';

  for (var i = 0; i < seznam.length; i++) {
    var newRow = table.insertRow(table.rows.length);
    var tab_jmeno = newRow.insertCell(0);
    var tab_prijmeni = newRow.insertCell(1);
    var tab_rocnik = newRow.insertCell(2);
    var tab_id = newRow.insertCell(3);
    tab_jmeno.innerHTML = seznam[i].Jmeno;
    tab_prijmeni.innerHTML = seznam[i].Prijmeni;
    tab_rocnik.innerHTML = seznam[i].Rocnik;
    var cislo = seznam[i].Id;
    tab_id.innerHTML = cislo; // Opraveno přiřazení
  }
}

function Pridat() {
  var jmeno = document.getElementById("name");
  var prijmeni = document.getElementById("surname");
  var rocnik = document.getElementById("rocnik");

  if (jmeno.value !== "" && isNaN(jmeno.value)) {
    if (prijmeni.value !== "" && isNaN(prijmeni.value)) {
      if (rocnik.value !== "" && !isNaN(rocnik.value) && rocnik.value > 0 && rocnik.value < 10) {
        var cislo = "";

        for (var i = 0; i < 5; i++) {
          var Nahodne_cislo = Math.floor(Math.random() * 10);
          cislo += Nahodne_cislo;
        }

        seznam.push({
          Jmeno: jmeno.value,
          Prijmeni: prijmeni.value,
          Rocnik: rocnik.value,
          Id: cislo
        });
        VypisDoTabulky();
      }
    }
  } else {
    alert("Jsi si jisty, že nejsi opilý?");
  }

  console.log(seznam);
}