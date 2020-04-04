function provera() {
    var forma = document.forma;
    var ime = forma.ime;
    var email = forma.email;
    var poruka = forma.poruka;

    var obavestenje = document.getElementById("obavestenje");

    try {
        if (ime.value == "" ||
            email.value == "" ||
            poruka.value == "") {
                throw "Неопходно је попунити сва поља";
                // ukoliko se desi throw, onda se odmah skace na catch i ne
                // izvrsava se dalje kod u try bloku,
                // vrednost parametra error u catch-u postaje ono sto smo stavili nakon throw
        }
        else {
            if (ime.value.length < 4) {
                throw "Потпис мора садржати бар 4 карактера";
            } else if (ime.value.length > 10) {
                throw "Потпис не може садржати преко 10 карактера";
            } else if (proveraMaila(email.value) == false) {
                throw "Унос email-а није правилан"
            }
        }
        alert("Poruka uspesno poslata");
    } catch (error) {
        obavestenje.innerHTML = error;
    }

}

// proveraMaila prolazi kroz string koji je ulazni parametar
// uzima svaki karakter i gleda da li je '@', 
// ukoliko jeste promenljiva znak postaje true
// ukoliko ni jedan nije promenljiva znak ce ostati false

function proveraMaila(tekst) {
    var znak = false;
    for (var i = 0; i < tekst.length; i++) {
        if (tekst.charAt(i) == '@') {
           znak = true;
        }
    }
    return znak;
}
