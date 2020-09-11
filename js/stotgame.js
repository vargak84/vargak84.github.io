let veletlenIdoTomb = [];

//Véletlenidő generátor
function veletlenIdo() {
    minido = 1;
    maxido = 2;
    let veletlenido1 = (minido + Math.floor(Math.random() * (maxido - minido + 1))) * 1000;
    let veletlenido2 = (minido + Math.floor(Math.random() * (maxido - minido + 1) + 2)) * 1000;
    let veletlenido3 = (minido + Math.floor(Math.random() * (maxido - minido + 1) + 4)) * 1000;
    veletlenIdoTomb.push(veletlenido1);
    veletlenIdoTomb.push(veletlenido2);
    veletlenIdoTomb.push(veletlenido3);
}

//Kép 1
let kepTomb1 = [];

function veletlenKep1() {
    let kep = new Array()
    kep[1] = "img/slotgame/7.png"
    kep[2] = "img/slotgame/bar.png"
    kep[3] = "img/slotgame/citrom.png"
    kep[4] = "img/slotgame/cseri.png"
    kep[5] = "img/slotgame/dinnye.png"

    let ry = Math.floor(Math.random() * kep.length)
    if (ry == 0)
        ry = 1

    kepTomb1.push(kep[ry])
}

function kepTombokbeTesz1() {
    veletlenKep1()
    document.querySelector("#kep1").src = kepTomb1[0];
    kepTomb1 = [];
}

function kepTombeTeszIdoFuggveny1() {
    myvar11 = setTimeout(function () { kepTombeTeszFuggveny1(); }, 30);
}

function kepTombeTeszFuggveny1() {
    myvar12 = setTimeout(function () { kepTombokbeTesz1(); }, 30);
    kepTombeTeszIdoFuggveny1();
}

function ciklusStop1() {
    setTimeout(function () { clearTimeout(myvar11); }, veletlenIdoTomb[0]);
    setTimeout(function () { clearTimeout(myvar12); }, veletlenIdoTomb[0]);
}

//Kép 2

let kepTomb2 = [];

function veletlenKep2() {
    let kep = new Array()
    kep[1] = "img/slotgame/7.png"
    kep[2] = "img/slotgame/bar.png"
    kep[3] = "img/slotgame/citrom.png"
    kep[4] = "img/slotgame/cseri.png"
    kep[5] = "img/slotgame/dinnye.png"

    let ry = Math.floor(Math.random() * kep.length)
    if (ry == 0)
        ry = 1

    kepTomb2.push(kep[ry])
}

function kepTombokbeTesz2() {
    veletlenKep2()
    document.querySelector("#kep2").src = kepTomb2[0];
    kepTomb2 = [];
}

function kepTombeTeszIdoFuggveny2() {
    myvar21 = setTimeout(function () { kepTombeTeszFuggveny2(); }, 30);
}

function kepTombeTeszFuggveny2() {
    myvar22 = setTimeout(function () { kepTombokbeTesz2(); }, 30);
    kepTombeTeszIdoFuggveny2();
}

function ciklusStop2() {
    setTimeout(function () { clearTimeout(myvar21); }, veletlenIdoTomb[1]);
    setTimeout(function () { clearTimeout(myvar22); }, veletlenIdoTomb[1]);
}

//Kép 3
let kepTomb3 = [];

function veletlenKep3() {
    let kep = new Array()
    kep[1] = "img/slotgame/7.png"
    kep[2] = "img/slotgame/bar.png"
    kep[3] = "img/slotgame/citrom.png"
    kep[4] = "img/slotgame/cseri.png"
    kep[5] = "img/slotgame/dinnye.png"

    let ry = Math.floor(Math.random() * kep.length)
    if (ry == 0)
        ry = 1

    kepTomb3.push(kep[ry])
}

function kepTombokbeTesz3() {
    veletlenKep3()
    document.querySelector("#kep3").src = kepTomb3[0];
    kepTomb3 = [];
}

function kepTombeTeszIdoFuggveny3() {
    myvar31 = setTimeout(function () { kepTombeTeszFuggveny3(); }, 30);
}

function kepTombeTeszFuggveny3() {
    myvar32 = setTimeout(function () { kepTombokbeTesz3(); }, 30);
    kepTombeTeszIdoFuggveny3();
}

function ciklusStop3() {
    setTimeout(function () { clearTimeout(myvar31); }, veletlenIdoTomb[2]);
    setTimeout(function () { clearTimeout(myvar32); }, veletlenIdoTomb[2]);
    setTimeout(function () { porgetGomb.removeAttribute("disabled"); }, veletlenIdoTomb[2]);
    setTimeout(function () { nyeremenyTomb.push(document.querySelector("#kep1").src); }, veletlenIdoTomb[2]);
    setTimeout(function () { nyeremenyTomb.push(document.querySelector("#kep2").src); }, veletlenIdoTomb[2]);
    setTimeout(function () { nyeremenyTomb.push(document.querySelector("#kep3").src); }, veletlenIdoTomb[2]);
    setTimeout(function () { nyeremenyVizsgalat(); }, veletlenIdoTomb[2]);
}

let porgetGomb = document.querySelector("#porgetGomb")

function foFuggveny() {
    nyeremenyUzenet.hidden = true;
    veletlenIdo()
    kepTombeTeszIdoFuggveny1()
    kepTombeTeszIdoFuggveny2()
    kepTombeTeszIdoFuggveny3()
    ciklusStop1()
    ciklusStop2()
    ciklusStop3()
    veletlenIdoTomb = [];
    porgetGomb.setAttribute("disabled", true)
}

let jatekKeretMezo = document.querySelector("#jatekKeretMezo");
let tetMezo = document.querySelector("#tetMezo");

function tetVizsgalat() {
    let tetMezoErtek = Number.isInteger(tetMezo.valueAsNumber);
    if (tetMezoErtek == false || tetMezoErtek < 0) {
        alert("Csak pozitív egész számot adhatsz meg tétnek!")
    } else if (jatekKeretMezo.innerHTML - tetMezo.value < 0) {
        alert("Túl nagy a megadott tét!")
    } else {
        foFuggveny();
        jatekKeretetValtoztat()
    }
}

function jatekKeretetValtoztat() {
    let jatekKeret = jatekKeretMezo.innerHTML - tetMezo.value;
    jatekKeretMezo.innerHTML = jatekKeret;
}

let nyeremenyTomb = [];
let cseri = 0;
let citrom = 0;
let dinnye = 0;
let bar = 0;
let seven = 0;

function nyeremenyVizsgalat() {

    for (let i = 0; i < nyeremenyTomb.length; i++) {
        if (nyeremenyTomb[i].indexOf("cseri.png") > 0) {
            cseri += 1;
        }
        if (nyeremenyTomb[i].indexOf("citrom.png") > 0) {
            citrom += 1;
        }
        if (nyeremenyTomb[i].indexOf("dinnye.png") > 0) {
            dinnye += 1;
        }
        if (nyeremenyTomb[i].indexOf("bar.png") > 0) {
            bar += 1;
        }
        if (nyeremenyTomb[i].indexOf("7.png") > 0) {
            seven += 1;
        }
    }
    szorzoVizsgalat()
    jatekKeretNull()
    nyeremenyTomb = [];
}

let nyeremenyUzenet = document.querySelector("#nyeremenyUzenet");
let onNyert = document.querySelector("#onNyert");

function szorzoVizsgalat() {
    let tetMezoErtek = parseInt(tetMezo.value);
    let nyeremeny = 0;
    if (cseri == 2) {
        nyeremeny = tetMezoErtek;
    }
    if (cseri == 3) {
        nyeremeny = tetMezoErtek * 2;
    }
    if (citrom == 2) {
        nyeremeny = tetMezoErtek;
    }
    if (citrom == 3) {
        nyeremeny = tetMezoErtek * 2;
    }
    if (dinnye == 2) {
        nyeremeny = tetMezoErtek;
    }
    if (dinnye == 3) {
        nyeremeny = tetMezoErtek * 2;
    }
    if (bar == 2) {
        nyeremeny = tetMezoErtek * 5;
    }
    if (bar == 3) {
        nyeremeny = tetMezoErtek * 15;
    }
    if (seven == 2) {
        nyeremeny = tetMezoErtek * 10;
    }
    if (seven == 3) {
        nyeremeny = tetMezoErtek * 100;
    }

    let jatekKeretErtek = parseInt(jatekKeretMezo.innerHTML);
    let ujJatekKeret = jatekKeretErtek + nyeremeny;
    jatekKeretMezo.innerHTML = ujJatekKeret;
    onNyert.innerHTML = nyeremeny;
    nyeremenyUzenet.hidden = false;

    cseri = 0;
    citrom = 0;
    dinnye = 0;
    bar = 0;
    seven = 0;
}

function jatekKeretNull() {
    if(parseInt(jatekKeretMezo.innerHTML) == 0) {
        $("#exampleModalCenter2").modal()
    }
}