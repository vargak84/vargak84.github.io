let megoldasElsoGolyoMezo = document.querySelector("#megoldasElsoGolyoMezo")
let megoldasMasodikGolyoMezo = document.querySelector("#megoldasMasodikGolyoMezo")
let megoldasHarmadikGolyoMezo = document.querySelector("#megoldasHarmadikGolyoMezo")
let megoldasNegyedikGolyoMezo = document.querySelector("#megoldasNegyedikGolyoMezo")

let pirosGolyo = document.querySelector("#pirosGolyo");
let feherGolyo = document.querySelector("#feherGolyo");
let kekGolyo = document.querySelector("#kekGolyo");
let rozsaGolyo = document.querySelector("#rozsaGolyo");
let narancsGolyo = document.querySelector("#narancsGolyo");
let lilaGolyo = document.querySelector("#lilaGolyo");
let sargaGolyo = document.querySelector("#sargaGolyo");
let zoldGolyo = document.querySelector("#zoldGolyo");
let kep;
let ry;
let rejt1 = document.querySelector(".table2");
let rejt2 = document.querySelector("#rejt2");
let rejt3 = document.querySelector("#ellenorzesGomb");
let hozzaad = document.querySelector("#hozzaad");
let mutatGomb = document.querySelector("#mutatGomb");


//Véletlenkép generátor
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
}

veletlenKep();
let megoldasElsoGolyo = document.createElement("img");
megoldasElsoGolyo.src = kep[ry];
megoldasElsoGolyoMezo.appendChild(megoldasElsoGolyo);
megoldasElsoGolyo.hidden = true;
veletlenKep();
let megoldasMasodikGolyo = document.createElement("img");
megoldasMasodikGolyo.src = kep[ry];
megoldasMasodikGolyoMezo.appendChild(megoldasMasodikGolyo);
megoldasMasodikGolyo.hidden = true;
veletlenKep();
let megoldasHarmadikGolyo = document.createElement("img");
megoldasHarmadikGolyo.src = kep[ry];
megoldasHarmadikGolyoMezo.appendChild(megoldasHarmadikGolyo);
megoldasHarmadikGolyo.hidden = true;
veletlenKep();
let megoldasNegyedikGolyo = document.createElement("img");
megoldasNegyedikGolyo.src = kep[ry];
megoldasNegyedikGolyoMezo.appendChild(megoldasNegyedikGolyo);
megoldasNegyedikGolyo.hidden = true;

let megoldasTomb = [
    megoldasElsoGolyo.src,
    megoldasMasodikGolyo.src,
    megoldasHarmadikGolyo.src,
    megoldasNegyedikGolyo.src
]

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