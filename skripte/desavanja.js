var json = [
    {
        "naslov":"Ђурђевдан молитвено прослављен у Ловници",
        "opis": "Празник Светог великомученика и побједоносца Георгија - Ђурђевдан, молитвено је ..."
    }, {
        "naslov":"Христово Васкрсење свечано прослављено у Ловници",
        "opis": "Васкрсење Исуса Христа, празник над празницима, када је Господ устао из мртвих и..."
    }, {
        "naslov":"У Ловници скувана и офарбана васкршња јаја",
        "opis": "Јаја се уочи Васкрса фарбају у црвену боју, у спомен на то како је Марија Магдал..."
    }, {
        "naslov":"Празник Благовијести Пресвете Богородице молитвено прослављен у Ловници",
        "opis": "У четврту недељу Васкршњег поста - Средопосну, посвећену Светом Јовану Лествичн..."
    }
];
// niz objekata u json formatu/zapisu

function izlistavanje() {
    var polje = document.getElementById('desavanja');
    for (var i = 0; i < json.length; i++) {
        polje.innerHTML += "<div> <h2>"+json[i].naslov+"</h2>" +
        "<p>"+json[i].opis+"</p></div>";
    }
}
izlistavanje();

