let pole = [];
const seznam = [];

function VypisDoTabulky() {
    let table = document.getElementById("studentTable");

    // Vymaž aktuální obsah tabulky
    table.innerHTML = '';

    for (let i = 0; i < seznam.length; i++) {
        let newRow = table.insertRow(table.rows.length);

        let tab_jmeno = newRow.insertCell(0);
        let tab_prijmeni = newRow.insertCell(1);
        let tab_rocnik = newRow.insertCell(2);

        tab_jmeno.innerHTML = seznam[i].Jmeno;
        tab_prijmeni.innerHTML = seznam[i].Prijmeni;
        tab_rocnik.innerHTML = seznam[i].Rocnik;
    }
}

function Pridat(){
    let jmeno = document.getElementById("name");
    let prijmeni = document.getElementById("surname");
    let rocnik = document.getElementById("rocnik");

    if((jmeno.value != "") && (isNaN(jmeno.value))){
        
        if((prijmeni.value != "") && (isNaN(prijmeni.value))){

            if((rocnik.value != "") && (!isNaN(rocnik.value)) && (rocnik.value>0) && (rocnik.value<10)){
                
                seznam.push({Jmeno: jmeno.value, Prijmeni: prijmeni.value, Rocnik: rocnik.value});
                VypisDoTabulky();
            }
        }
    }
    else
    {
        alert("Jsi si jisty, že nejsi opilý?")
    }

    console.log(seznam);
}