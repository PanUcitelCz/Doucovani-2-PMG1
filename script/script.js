let pole = [];
const seznam = [];
let cislo = 0;

function VypisDoTabulky() {
    let table = document.getElementById("studentTable");

    // Vymaž aktuální obsah tabulky
    table.innerHTML = '';
    let cislo = 1; // číslování
    for (let i = 0; i < seznam.length; i++) {
        let newRow = table.insertRow(table.rows.length);

        let tab_jmeno = newRow.insertCell(0);
        let tab_prijmeni = newRow.insertCell(1);
        let tab_rocnik = newRow.insertCell(2);
        let tab_id = newRow.insertCell(3);

        tab_jmeno.innerHTML = seznam[i].Jmeno;
        tab_prijmeni.innerHTML = seznam[i].Prijmeni;
        tab_rocnik.innerHTML = seznam[i].Rocnik;
        
        tab_id.innerHTML = cislo++; // Přiřazení pořadí id
    }
}

function Pridat() {
    let jmeno = document.getElementById("name");
    let prijmeni = document.getElementById("surname");
    let rocnik = document.getElementById("rocnik");

    if ((jmeno.value != "") && (isNaN(jmeno.value))) {

        if ((prijmeni.value != "") && (isNaN(prijmeni.value))) {

            if ((rocnik.value != "") && (!isNaN(rocnik.value)) && (rocnik.value > 0) && (rocnik.value < 10)) {
                seznam.push({ Jmeno: jmeno.value, Prijmeni: prijmeni.value, Rocnik: rocnik.value});
                VypisDoTabulky();
            }
            else{
                alert("Nezadal jsi pouze číslo");
            }
        }
        else{
            alert("Zadal jsi chybně příjmení");
        }
    } 
    else {
        alert("Jsi si jisty, že nejsi opilý?");
    }

    //console.log(seznam);
}

function Odebrat_posledni(){
    seznam.pop();
    console.log(seznam);

    VypisDoTabulky();
}

function Odebrat_prvni(){
    seznam.shift();
    console.log(seznam);

    VypisDoTabulky();
}

function Odebrat_pozici(){
    let vstup = document.getElementById("odstranit"); 

    
    if((!isNaN(vstup.value)) && (vstup.value != "") && (vstup.value>0) && (vstup.value<=seznam.length)){
        seznam.splice(vstup.value-1, 1); // (kde má začít(vstup-1), kolik prvků odstraní)
        console.log(seznam);

        VypisDoTabulky();
    }
    else{
        alert("Asi jsi zadal něco špatně");
    }
}