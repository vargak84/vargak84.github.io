let kep1Tomb = [];
let kep2Tomb = [];
let kep3Tomb = [];
let kepTomb = [];

function veletlenKep() {
    let kep = new Array()
    kep[1] = "img/slotgame/7.png"
    kep[2] = "img/slotgame/bar.png"
    kep[3] = "img/slotgame/citrom.png"
    kep[4] = "img/slotgame/cseri.png"
    kep[5] = "img/slotgame/dinnye.png"

    let ry = Math.floor(Math.random() * kep.length)
    if (ry == 0)
        ry = 1

        kepTomb.push(kep[ry])
}

function kepTombokbeTesz() {
    veletlenKep()
    veletlenKep()
    veletlenKep()
    document.querySelector("#kep1").src = kepTomb[0];
    document.querySelector("#kep2").src = kepTomb[1];
    document.querySelector("#kep3").src = kepTomb[2];
    kepTomb = [];
}


function porget() {
    myvar = setTimeout(function() { kepTombokbeTesz(); }, 30);
    ciklusfuggveny();
}

function ciklusfuggveny() {
    myvar2 = setTimeout(function() { porget(); }, 30);
}


function ciklusStop() {
    setTimeout(function() { clearTimeout(myvar); }, 3000);
    setTimeout(function() { clearTimeout(myvar2); }, 3000);
}