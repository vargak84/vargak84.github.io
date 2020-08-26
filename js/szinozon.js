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
    jatekosTombHosszEllenorzes()
    golyoCellabaTesz()
}

function feherGolyoValaszt() {
    let fehergolyo = document.createElement("img");
    fehergolyo.src = "img/szinozon/feher.png";
    jatekosTomb.push(fehergolyo);
    jatekosTombHosszEllenorzes()
}

function kekGolyoValaszt() {
    let kekgolyo = document.createElement("img");
    kekgolyo.src = "img/szinozon/kek.png";
    jatekosTomb.push(kekgolyo);
    jatekosTombHosszEllenorzes()
}

function rozsaGolyoValaszt() {
    let rozsagolyo = document.createElement("img");
    rozsagolyo.src = "img/szinozon/rozsa.png";
    jatekosTomb.push(rozsagolyo);
    jatekosTombHosszEllenorzes()
}

function narancsGolyoValaszt() {
    let narancsgolyo = document.createElement("img");
    narancsgolyo.src = "img/szinozon/narancs.png";
    jatekosTomb.push(narancsgolyo);
    jatekosTombHosszEllenorzes()
}

function lilaGolyoValaszt() {
    let lilagolyo = document.createElement("img");
    lilagolyo.src = "img/szinozon/lila.png";
    jatekosTomb.push(lilagolyo);
    jatekosTombHosszEllenorzes()
}

function sargaGolyoValaszt() {
    let sargagolyo = document.createElement("img");
    sargagolyo.src = "img/szinozon/sarga.png";
    jatekosTomb.push(sargagolyo);
    jatekosTombHosszEllenorzes()
}

function zoldGolyoValaszt() {
    let zoldgolyo = document.createElement("img");
    zoldgolyo.src = "img/szinozon/zold.png";
    jatekosTomb.push(zoldgolyo);
    jatekosTombHosszEllenorzes()
}

let cellaIdValos = 1;
/* let cellaKivalasztas = document.querySelector("td[id = '1']"); */






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
        if (jatekosTomb.length > 4 ) {
            jatekosTomb.pop();

        };
    }
}

function golyoCellabaTesz() {
    for (let i = 0; i < jatekosTomb.length; i++) {
        console.log(cellaId);
    }
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
    let vesztettel = document.createElement("h3")
    vesztettel.innerHTML = "Vesztettél!";
    let ujJatekGomb = document.createElement("button");
    ujJatekGomb.className = "btn btn-primary";
    ujJatekGomb.innerHTML = "Új játék";
    ujJatekGomb.addEventListener("click", function () {
        location.reload();
    });
    hozzaad.appendChild(vesztettel)
    hozzaad.appendChild(ujJatekGomb)
    mutatGomb.hidden = true;
}