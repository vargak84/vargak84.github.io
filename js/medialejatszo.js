let video = document.querySelector("#my-video");
/* let source = document.getElementsByTagName("source"); */

let mediaFileokTeljes = [
    "/media/medialejatszo/TV_Maci.mp4",
    "/media/medialejatszo/TV_maci_a_hetvenes_évekből.mp4"
]

let mediaFileok = [
    "TV_Maci",
    "TV_maci_a_hetvenes_évekből"
]

let lejatszasiLista = document.querySelector("#inputGroupSelect03")

function lejatszasiListaLetrehozas() {
    let optionValue = 1;
    let option = document.createElement("option");
    option.value = optionValue;
    for (let i = 0; i < mediaFileok.length; i++) {
        option = document.createElement("option")
        optionValue += 1;
        lejatszasiLista.appendChild(option);
        option.innerHTML = mediaFileok[i];
    }
}

lejatszasiListaLetrehozas();

let kovezkezoszam = [];

function valtoztat() {
    for(let i = 0; i < mediaFileokTeljes.length; i++) {
        if(mediaFileokTeljes[i].indexOf(lejatszasiLista.value) >=0) {
            video.src = mediaFileokTeljes[i];
            kovetkezo();
        }
    }
    video.play()
}

let kovetkezoInput = document.querySelector("#kovetkezo");

function kovetkezo() {
    for(let i = 0; i < mediaFileok.length; i++) {
        if(mediaFileok[i].indexOf(lejatszasiLista.value) >=0) {
            kovetkezoInput.value = mediaFileok[i + 1];
        }
        
    }
}