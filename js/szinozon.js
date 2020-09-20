// Kezdőoldal
let kep;
let ry;

function veletlenKep() {
    kep = new Array()
    kep[1] = "img/szinozon/piros.png"
    kep[2] = "img/szinozon/feher.png"
    kep[3] = "img/szinozon/kek.png"
    kep[4] = "img/szinozon/rozsaszin.png"
    kep[5] = "img/szinozon/narancs.png"
    kep[6] = "img/szinozon/lila.png"
    kep[7] = "img/szinozon/sarga.png"
    kep[8] = "img/szinozon/zold.png"

    ry = Math.floor(Math.random() * kep.length)
    if (ry == 0)
        ry = 1
};

veletlenKep();
let megoldasElsoGolyo = document.createElement("img");
megoldasElsoGolyo.src = kep[ry];
veletlenKep();
let megoldasMasodikGolyo = document.createElement("img");
megoldasMasodikGolyo.src = kep[ry];
veletlenKep();
let megoldasHarmadikGolyo = document.createElement("img");
megoldasHarmadikGolyo.src = kep[ry];
veletlenKep();
let megoldasNegyedikGolyo = document.createElement("img");
megoldasNegyedikGolyo.src = kep[ry];

let megoldasTomb = [
    megoldasElsoGolyo,
    megoldasMasodikGolyo,
    megoldasHarmadikGolyo,
    megoldasNegyedikGolyo
]

let megoldasElsoGolyoMezo = document.querySelector("#megoldasElsoGolyoMezo")
let megoldasMasodikGolyoMezo = document.querySelector("#megoldasMasodikGolyoMezo")
let megoldasHarmadikGolyoMezo = document.querySelector("#megoldasHarmadikGolyoMezo")
let megoldasNegyedikGolyoMezo = document.querySelector("#megoldasNegyedikGolyoMezo")

for (let i = 0; i < megoldasTomb.length; i++) {
    megoldasElsoGolyoMezo.appendChild(megoldasTomb[0]);
    megoldasElsoGolyo.hidden = true;
    megoldasMasodikGolyoMezo.appendChild(megoldasTomb[1]);
    megoldasMasodikGolyo.hidden = true;
    megoldasHarmadikGolyoMezo.appendChild(megoldasTomb[2]);
    megoldasHarmadikGolyo.hidden = true;
    megoldasNegyedikGolyoMezo.appendChild(megoldasTomb[3]);
    megoldasNegyedikGolyo.hidden = true;
}

let tableTbody = document.querySelector("#tableTbody");
let cellaId = 0;
ujTablaSor();



/* Játék */
let jatekosTomb = [];
let valasztottSzinTomb = [];

let pirosGolyo = document.querySelector("#pirosGolyo");
let feherGolyo = document.querySelector("#feherGolyo");
let kekGolyo = document.querySelector("#kekGolyo");
let rozsaGolyo = document.querySelector("#rozsaGolyo");
let narancsGolyo = document.querySelector("#narancsGolyo");
let lilaGolyo = document.querySelector("#lilaGolyo");
let sargaGolyo = document.querySelector("#sargaGolyo");
let zoldGolyo = document.querySelector("#zoldGolyo");

//Játékos golyó választás
function pirosGolyoValaszt() {
    let pirosgolyo = document.createElement("img");
    pirosgolyo.src = "img/szinozon/piros.png";
    jatekosTomb.push(pirosgolyo);
    valasztottSzinTomb.push(pirosgolyo);
    jatekosTombHosszEllenorzes()
    golyoCellabaTesz()
}

function feherGolyoValaszt() {
    let fehergolyo = document.createElement("img");
    fehergolyo.src = "img/szinozon/feher.png";
    jatekosTomb.push(fehergolyo);
    valasztottSzinTomb.push(fehergolyo);
    jatekosTombHosszEllenorzes()
    golyoCellabaTesz()
}

function kekGolyoValaszt() {
    let kekgolyo = document.createElement("img");
    kekgolyo.src = "img/szinozon/kek.png";
    jatekosTomb.push(kekgolyo);
    valasztottSzinTomb.push(kekgolyo);
    jatekosTombHosszEllenorzes()
    golyoCellabaTesz()
}

function rozsaGolyoValaszt() {
    let rozsagolyo = document.createElement("img");
    rozsagolyo.src = "img/szinozon/rozsaszin.png";
    jatekosTomb.push(rozsagolyo);
    valasztottSzinTomb.push(rozsagolyo);
    jatekosTombHosszEllenorzes()
    golyoCellabaTesz()
}

function narancsGolyoValaszt() {
    let narancsgolyo = document.createElement("img");
    narancsgolyo.src = "img/szinozon/narancs.png";
    jatekosTomb.push(narancsgolyo);
    valasztottSzinTomb.push(narancsgolyo);
    jatekosTombHosszEllenorzes()
    golyoCellabaTesz()
}

function lilaGolyoValaszt() {
    let lilagolyo = document.createElement("img");
    lilagolyo.src = "img/szinozon/lila.png";
    jatekosTomb.push(lilagolyo);
    valasztottSzinTomb.push(lilagolyo);
    jatekosTombHosszEllenorzes()
    golyoCellabaTesz()
}

function sargaGolyoValaszt() {
    let sargagolyo = document.createElement("img");
    sargagolyo.src = "img/szinozon/sarga.png";
    jatekosTomb.push(sargagolyo);
    valasztottSzinTomb.push(sargagolyo);
    jatekosTombHosszEllenorzes()
    golyoCellabaTesz()
}

function zoldGolyoValaszt() {
    let zoldgolyo = document.createElement("img");
    zoldgolyo.src = "img/szinozon/zold.png";
    jatekosTomb.push(zoldgolyo);
    valasztottSzinTomb.push(zoldgolyo);
    jatekosTombHosszEllenorzes()
    golyoCellabaTesz()
}

let cellaIdValos = 1;
let aktivCella = document.getElementById(cellaIdValos);
let egeszszamVizsgalo = 0;




function ujTablaSor() {
    let rows = 1;
    var cols = 4;
    for (let r = 0; r < rows; r++) {
        let row = tableTbody.insertRow(-1);
        for (let c = 0; c < cols; c++) {
            let cell = row.insertCell(-1);
            cellaId += 1;
            cell.setAttribute('id', cellaId);
        }
    }
}

function jatekosTombHosszEllenorzes() {
    for (let i = 0; i < jatekosTomb.length; i++) {
        if (jatekosTomb.length > 4) {
            jatekosTomb.pop();
        }
    }
}

function golyoCellabaTesz() {
    for (let i = 0; i < valasztottSzinTomb.length; i++) {
        if (window.innerWidth < 750) {
            valasztottSzinTomb[0].style.width = "30px"
            valasztottSzinTomb[0].style.height = "30px"
        } else {
            valasztottSzinTomb[0].style.width = "50px"
            valasztottSzinTomb[0].style.height = "50px"
        }
        aktivCella.appendChild(valasztottSzinTomb[0]);
        valasztottSzinTomb[0].setAttribute("onclick", "golyoTorol()");
        /* aktivCellaValtoztat(); */
        /* valasztottSzinTomb = []; */
    }
    egeszszamVizsgalo = cellaIdValos / 4;
    if (Number.isInteger(egeszszamVizsgalo) == true) {
        /* ellenorzesGombKeszit() */
        rejt3.hidden = false;
    } else {
        cellaIdValos += 1;
        aktivCella = document.getElementById(cellaIdValos);
        valasztottSzinTomb = [];
    }
}

function golyoTorol() {
    if (jatekosTomb.length <= 3) {
        cellaIdValos -= 1;
        aktivCella = document.getElementById(cellaIdValos);
        aktivCella.innerHTML = "";
    } else {
        aktivCella.innerHTML = "";
        rejt3.hidden = true;
    }
    jatekosTomb.pop();
    console.log(jatekosTomb)
}

function removeAttribute() {
    cellaIdValos -= 4;
    aktivCella = document.getElementById(cellaIdValos);
    aktivCella.firstChild.removeAttribute("onclick")
    cellaIdValos += 1;
    aktivCella = document.getElementById(cellaIdValos);
    aktivCella.firstChild.removeAttribute("onclick")
    cellaIdValos += 1;
    aktivCella = document.getElementById(cellaIdValos);
    aktivCella.firstChild.removeAttribute("onclick")
    cellaIdValos += 1;
    aktivCella = document.getElementById(cellaIdValos);
    aktivCella.firstChild.removeAttribute("onclick")
    cellaIdValos += 1;
    aktivCella = document.getElementById(cellaIdValos);
}

/* function aktivCellaValtoztat() {
    cellaIdValos += 1;
    egeszszamVizsgalo = cellaIdValos / 4 - 0.25;
    if (Number.isInteger(egeszszamVizsgalo) == true) {
        ujTablaSor();
    }
    aktivCella = document.getElementById(cellaIdValos);
} */

/* function ellenorzesGombKeszit() {
    let jatekosDiv = document.querySelector("#hozzaad");
    let ellenorzesGomb = document.createElement("button");
    ellenorzesGomb.className = "btn btn-success";
    ellenorzesGomb.id = "ellenorzesGomb";
    ellenorzesGomb.setAttribute("onclick", "egyezesVizsgalat()");
    ellenorzesGomb.innerHTML = "Ellenőrzés";
    jatekosDiv.appendChild(ellenorzesGomb);
} */

function egyezesVizsgalat() {
    let eredmeny = new Array()

    for (let i = 0; i < jatekosTomb.length; i++) {

        let teljesEgyezes = false;
        let szinEgyezes = false;
        for (let j = 0; j < megoldasTomb.length; j++) {

            // szin egyezés
            let mgoAzonosSzinulElemekSzama = megoldasTomb.filter(elem => elem.src == megoldasTomb[j].src).length;
            let jtkAzonosSzinulElemekSzama = jatekosTomb.filter((elem, index) => elem.src == jatekosTomb[i].src && index <= i ).length
            if (megoldasTomb[j].src == jatekosTomb[i].src
                && jtkAzonosSzinulElemekSzama <= mgoAzonosSzinulElemekSzama) {
                szinEgyezes = true;

                // szin egyezésen belül még a hely is egyezik
                if (i == j) {
                    teljesEgyezes = true;
                }
            }
        }

        if (teljesEgyezes) { eredmeny[i] = "green"; }  // teljes egyezést
        else if (szinEgyezes) { eredmeny[i] = "red"; }  // szin egyezést
        else { eredmeny[i] = null; } // nincs egyezést

        /* console.clear();
        console.log(eredmeny);
        console.log(megoldasTomb);
        console.log(jatekosTomb); */

    } 

    let cellaMinNegy = document.getElementById(aktivCella.id - 3);
    cellaMinNegy.style.backgroundColor = eredmeny[0];
    let cellaMinHarom = document.getElementById(aktivCella.id - 2);
    cellaMinHarom.style.backgroundColor = eredmeny[1];
    let cellaMinKetto = document.getElementById(aktivCella.id - 1);
    cellaMinKetto.style.backgroundColor = eredmeny[2];
    let cellaMinEgy = document.getElementById(aktivCella.id);
    cellaMinEgy.style.backgroundColor = eredmeny[3];
    jatekosTomb = [];
    mindZold()
    if (eredmeny.every(mindZold) == true) {
        nyert();
    } else {
        ujTablaSor();
        cellaIdValos += 1;
        aktivCella = document.getElementById(cellaIdValos);
        valasztottSzinTomb = [];
        rejt3.hidden = true;
        removeAttribute()
    }
}

function mindZold(eredmeny) {
    return eredmeny == "green";
}




let rejt1 = document.querySelector(".table2");
let rejt2 = document.querySelector("#rejt2");
let rejt3 = document.querySelector("#ellenorzesGomb");
let hozzaad = document.querySelector("#hozzaad");
let mutatGomb = document.querySelector("#mutatGomb");

/* MutatGomb megnyomása */
function megoldasMutat() {
    megoldasElsoGolyo.hidden = false;
    megoldasMasodikGolyo.hidden = false;
    megoldasHarmadikGolyo.hidden = false;
    megoldasNegyedikGolyo.hidden = false;
    rejt1.hidden = true;
    rejt2.hidden = true;
    rejt3.hidden = true;
    let jatekvege = document.createElement("h3")
    jatekvege.innerHTML = "Ezt kellett volna kitalálni";
    let ujJatekGomb = document.createElement("button");
    ujJatekGomb.className = "btn btn-primary";
    ujJatekGomb.innerHTML = "Új játék";
    ujJatekGomb.addEventListener("click", function () {
        location.reload();
    });
    hozzaad.appendChild(jatekvege)
    hozzaad.appendChild(ujJatekGomb)
    mutatGomb.hidden = true;
}

function nyert() {
    megoldasElsoGolyo.hidden = false;
    megoldasMasodikGolyo.hidden = false;
    megoldasHarmadikGolyo.hidden = false;
    megoldasNegyedikGolyo.hidden = false;
    rejt1.hidden = true;
    rejt3.hidden = true;
    let jatekvege = document.createElement("h3")
    jatekvege.innerHTML = "Gratulálok!";
    let ujJatekGomb = document.createElement("button");
    ujJatekGomb.className = "btn btn-primary";
    ujJatekGomb.innerHTML = "Új játék";
    ujJatekGomb.addEventListener("click", function () {
        location.reload();
    });
    hozzaad.appendChild(jatekvege)
    hozzaad.appendChild(ujJatekGomb)
    mutatGomb.hidden = true;
}

function debug() {
    megoldasElsoGolyo.hidden = false;
    megoldasMasodikGolyo.hidden = false;
    megoldasHarmadikGolyo.hidden = false;
    megoldasNegyedikGolyo.hidden = false;
}

let table1 = document.querySelector(".table1");
let table12 = document.querySelector(".table12");
let table2 = document.querySelector(".table2");


    if (window.innerWidth < 750) {
        table1.style.width = "80%"
        table12.style.width = "80%"
        table2.style.width = "80%"
        pirosGolyo.firstChild.style.width = "30px"
        feherGolyo.firstChild.style.width = "30px"
        kekGolyo.firstChild.style.width = "30px"
        rozsaGolyo.firstChild.style.width = "30px"
        narancsGolyo.firstChild.style.width = "30px"
        lilaGolyo.firstChild.style.width = "30px"
        sargaGolyo.firstChild.style.width = "30px"
        zoldGolyo.firstChild.style.width = "30px"
        megoldasElsoGolyoMezo.firstChild.width = 30;
        megoldasMasodikGolyoMezo.firstChild.width = 30;
        megoldasHarmadikGolyoMezo.firstChild.width = 30;
        megoldasNegyedikGolyoMezo.firstChild.width = 30;
    } else {
        pirosGolyo.firstChild.style.width = "50px"
        feherGolyo.firstChild.style.width = "50px"
        kekGolyo.firstChild.style.width = "50px"
        rozsaGolyo.firstChild.style.width = "50px"
        narancsGolyo.firstChild.style.width = "50px"
        lilaGolyo.firstChild.style.width = "50px"
        sargaGolyo.firstChild.style.width = "50px"
        zoldGolyo.firstChild.style.width = "50px"
        megoldasElsoGolyoMezo.firstChild.width = 50;
        megoldasMasodikGolyoMezo.firstChild.width = 50;
        megoldasHarmadikGolyoMezo.firstChild.width = 50;
        megoldasNegyedikGolyoMezo.firstChild.width = 50;
    }


/* function egyezesVizsgalat() {
    for (let i = 0; i < megoldasTomb.length; i++) {
        let szinEgyezes = false;
        let helyEgyezes = false;
        if (valasztottSzinTomb[0].src.indexOf("img/szinozon/piros.png") >= 0 && megoldasTomb[i].src.indexOf(("img/szinozon/piros.png")) >= 0) {
            szinEgyezes = true;
        }
        if (megoldasTomb[0].src = "img/szinozon/piros.png") {
            helyEgyezes = true;
        }
        console.log(helyEgyezes, szinEgyezes);
    }
} */

/* var b = 4;
var x = function () {return 12 * b};
document.getElementById("demo").innerHTML = x() */


/* function egyezesVizsgalat() {
    let eredmeny = new Array()

    for (let i = 0; i < megoldasTomb.length; i++) {
        let megoldasSzin = megoldasTomb[i];

        let teljesEgyezes = false;
        let szinEgyezes = false;
        for (let j = 0; j < jatekosTomb.length; j++) {

            // szin egyezés
            if (megoldasTomb[i].src == jatekosTomb[j].src) {
                szinEgyezes = true;

                // szin egyezésen belül még a hely is egyezik
                if (i == j) {
                    teljesEgyezes = true;
                }
            }
        }

        if (teljesEgyezes) { eredmeny[i] = "green"; }  // teljes egyezést
        else if (szinEgyezes) { eredmeny[i] = "red"; }  // szin egyezést
        else { eredmeny[i] = null; } // nincs egyezést

        console.clear();
        console.log(eredmeny);
        console.log(megoldasTomb);
        console.log(jatekosTomb);
    }

    let cellaMinNegy = document.getElementById(aktivCella.id - 4);
    cellaMinNegy.style.backgroundColor = eredmeny[0];
    let cellaMinHarom = document.getElementById(aktivCella.id - 3);
    cellaMinHarom.style.backgroundColor = eredmeny[1];
    let cellaMinKetto = document.getElementById(aktivCella.id - 2);
    cellaMinKetto.style.backgroundColor = eredmeny[2];
    let cellaMinEgy = document.getElementById(aktivCella.id - 1);
    cellaMinEgy.style.backgroundColor = eredmeny[3];
    jatekosTomb = [];
} */