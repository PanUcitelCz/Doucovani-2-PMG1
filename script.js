let jmeno = "Petr";
let prijmeni = "Breit";
let rocnik = "1.";


let pole = ["Petr", "Breit", "1."];
let seznam = [
    {Jmeno: "Petr", Prijmeni: "Breit", Rocnik: "1."},
    {Jmeno: "Vašek", Prijmeni: "Kvěch", Rocnik: "2."}
];

console.log(seznam[0].Jmeno);

while(seznam[0].Jmeno == "Petr"){

    seznam[0].Jmeno = "Josef";
}

for(let i = 0; i<seznam.length; i++){

    vypis += seznam[i].Jmeno + "<br>";

}
