let video = document.querySelector("#my-video");
/* let source = document.getElementsByTagName("source"); */

let zeneSzamok = [
    "/media/medialejatszo/TV_Maci.mp4",
    "/media/medialejatszo/TV_maci_a_hetvenes_évekből.mp4"
]



let lejatszasiLista = document.querySelector("#inputGroupSelect03")

function lejatszasiListaLetrehozas() {
    let optionValue = 1;
    let option = document.createElement("option");
    option.value = optionValue;
    for (let i = 0; i < zeneSzamok.length; i++) {
        option = document.createElement("option")
        optionValue += 1;
        lejatszasiLista.appendChild(option);
        option.innerHTML = zeneSzamok[i];
    }
}

lejatszasiListaLetrehozas();

let kovezkezoszam = [];

function valtoztat() {
    video.src = lejatszasiLista.value;
    video.play()
}
