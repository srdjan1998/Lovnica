var slike = [
    "../slike/lovnica1.jpg",
    "../slike/lovnica2.jpg",
    "../slike/lovnica3.jpg",
    "../slike/lovnica4.jpg",
    "../slike/lovnica5.jpg",
    "../slike/lovnica6.jpg",
]

var galerija = document.getElementById('galerija');

for (let i = 0; i < slike.length; i++) {
   galerija.innerHTML += "<img src="+slike[i]+" onclick='prikazSlike("+i+")'>";
}
// kroz petlju izlistamo slike, bitno je da svaka poziva istu funkciju (ovu ispod)
// a kao vrednost ulaznog parametra salje sopstveu poziciju u nizu


// ova funkcija prikazuje uvecano sliku, najpre prikaze sakriveni div
// koji prekriva celu stranicu koji je nevidljiv u startu
// zatim u unutrasnjem div(belom) upisuje x za izlaz 
// zatim strelice i sliku
// strelice pozivaju istu ovu funkciju, a kao ulazni parametar salju jednu napred
// ili jednu unazad poziciju u odnosu na pocetnu
// jedino se proverava da li je poslednja pozicija u nizu, ako jeste vraca na 0
// ako je nula onda ide na poslednju

function prikazSlike(pozicija) {
    document.getElementById("prikazSlikeSpolja").style.display = "block";
    var polje = document.getElementById("prikazSlikeUnutra");
    polje.innerHTML = '<div id="izlaz" onclick="izlaz()">x</div>'
    if (pozicija == 0) {
        polje.innerHTML += "<span onClick='prikazSlike("+(slike.length-1)+")'><</span>";
    } else {
        polje.innerHTML += "<span onClick='prikazSlike("+(pozicija-1)+")'><</span>";
    }
    polje.innerHTML += "<img src="+slike[pozicija]+">";
    if (pozicija == (slike.length - 1)) {
        polje.innerHTML += "<span onClick='prikazSlike("+0+")'>></span>";
    } else {
        polje.innerHTML += "<span onClick='prikazSlike("+(pozicija+1)+")'>></span>";
    }
}

function izlaz() {
    document.getElementById("prikazSlikeSpolja").style.display = "none";
}