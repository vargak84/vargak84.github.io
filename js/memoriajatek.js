function randomArrayShuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
let kepekTomb = [
    "/img/memoriajatek/beni1.png",
    "/img/memoriajatek/beni2.png",
    "/img/memoriajatek/dagobert1.png",
    "/img/memoriajatek/dagobert2.png",
    "/img/memoriajatek/freddy1.png",
    "/img/memoriajatek/freddy2.png",
    "/img/memoriajatek/jerry1.png",
    "/img/memoriajatek/jerry2.png",
    "/img/memoriajatek/mrsbeakley1.png",
    "/img/memoriajatek/mrsbeakley2.png",
    "/img/memoriajatek/nemo1.png",
    "/img/memoriajatek/nemo2.png",
    "/img/memoriajatek/scooby1.png",
    "/img/memoriajatek/scooby2.png",
    "/img/memoriajatek/senilla1.png",
    "/img/memoriajatek/senilla2.png",
    "/img/memoriajatek/shaggy1.png",
    "/img/memoriajatek/shaggy2.png",
    "/img/memoriajatek/tom1.png",
    "/img/memoriajatek/tom2.png"
];

let kep1 = document.querySelector("#kep1")
let kep2 = document.querySelector("#kep2")
let kep3 = document.querySelector("#kep3")
let kep4 = document.querySelector("#kep4")
let kep5 = document.querySelector("#kep5")
let kep6 = document.querySelector("#kep6")
let kep7 = document.querySelector("#kep7")
let kep8 = document.querySelector("#kep8")
let kep9 = document.querySelector("#kep9")
let kep10 = document.querySelector("#kep10")
let kep11 = document.querySelector("#kep11")
let kep12 = document.querySelector("#kep12")
let kep13 = document.querySelector("#kep13")
let kep14 = document.querySelector("#kep14")
let kep15 = document.querySelector("#kep15")
let kep16 = document.querySelector("#kep16")
let kep17 = document.querySelector("#kep17")
let kep18 = document.querySelector("#kep18")
let kep19 = document.querySelector("#kep19")
let kep20 = document.querySelector("#kep20")

if (window.innerWidth < 750) {
    kep1.style.height = "70px";
    kep1.style.width = "70px";
    kep2.style.height = "70px";
    kep2.style.width = "70px";
    kep3.style.height = "70px";
    kep3.style.width = "70px";
    kep4.style.height = "70px";
    kep4.style.width = "70px";
    kep5.style.height = "70px";
    kep5.style.width = "70px";
    kep6.style.height = "70px";
    kep6.style.width = "70px";
    kep7.style.height = "70px";
    kep7.style.width = "70px";
    kep8.style.height = "70px";
    kep8.style.width = "70px";
    kep9.style.height = "70px";
    kep9.style.width = "70px";
    kep10.style.height = "70px";
    kep10.style.width = "70px";
    kep11.style.height = "70px";
    kep11.style.width = "70px";
    kep12.style.height = "70px";
    kep12.style.width = "70px";
    kep13.style.height = "70px";
    kep13.style.width = "70px";
    kep14.style.height = "70px";
    kep14.style.width = "70px";
    kep15.style.height = "70px";
    kep15.style.width = "70px";
    kep16.style.height = "70px";
    kep16.style.width = "70px";
    kep17.style.height = "70px";
    kep17.style.width = "70px";
    kep18.style.height = "70px";
    kep18.style.width = "70px";
    kep19.style.height = "70px";
    kep19.style.width = "70px";
    kep20.style.height = "70px";
    kep20.style.width = "70px";
}

function kepInputbaTesz() {
    kep1.src = kepekTomb[0];
    kep2.src = kepekTomb[1];
    kep3.src = kepekTomb[2];
    kep4.src = kepekTomb[3];
    kep5.src = kepekTomb[4];
    kep6.src = kepekTomb[5];
    kep7.src = kepekTomb[6];
    kep8.src = kepekTomb[7];
    kep9.src = kepekTomb[8];
    kep10.src = kepekTomb[9];
    kep11.src = kepekTomb[10];
    kep12.src = kepekTomb[11];
    kep13.src = kepekTomb[12];
    kep14.src = kepekTomb[13];
    kep15.src = kepekTomb[14];
    kep16.src = kepekTomb[15];
    kep17.src = kepekTomb[16];
    kep18.src = kepekTomb[17];
    kep19.src = kepekTomb[18];
    kep20.src = kepekTomb[19];
}

function kepEltuntet() {
    kep1.src = "";
    kep1.disabled = false;
    kep2.src = "";
    kep2.disabled = false;
    kep3.src = "";
    kep3.disabled = false;
    kep4.src = "";
    kep4.disabled = false;
    kep5.src = "";
    kep5.disabled = false;
    kep6.src = "";
    kep6.disabled = false;
    kep7.src = "";
    kep7.disabled = false;
    kep8.src = "";
    kep8.disabled = false;
    kep9.src = "";
    kep9.disabled = false;
    kep10.src = "";
    kep10.disabled = false;
    kep11.src = "";
    kep11.disabled = false;
    kep12.src = "";
    kep12.disabled = false;
    kep13.src = "";
    kep13.disabled = false;
    kep14.src = "";
    kep14.disabled = false;
    kep15.src = "";
    kep15.disabled = false;
    kep16.src = "";
    kep16.disabled = false;
    kep17.src = "";
    kep17.disabled = false;
    kep18.src = "";
    kep18.disabled = false;
    kep19.src = "";
    kep19.disabled = false;
    kep20.src = "";
    kep20.disabled = false;
}

function kepEltuntetIdozito() {
    myvar = setTimeout(function () { kepEltuntet(); }, 5000);
}

let probDiv = document.querySelector(".probDiv")

function jatekStart() {
    let startGomb = document.querySelector("#startGombDiv");
    startGomb.hidden = true;
    probDiv.hidden = false;
    randomArrayShuffle(kepekTomb);
    kepInputbaTesz();
    kepEltuntetIdozito();
}

let valasztottInputSrc = [];
let valasztottInput = [];

let tombId = [kep1, kep2, kep3, kep4, kep5, kep6, kep7, kep8, kep9, kep10,
    kep11, kep12, kep13, kep14, kep15, kep16, kep17, kep18, kep19, kep20
]

function reply_click(clicked) {
    clicked.src = kepekTomb[clicked.id.match(/\d+/) - 1];
    valasztottInputSrc.push(clicked.src)
    valasztottInput.push(clicked)
    valasztottInputCiklus();
}

function tombIdTorol(item) {
    let x = valasztottInput[0];
    let y = valasztottInput[1];
    tombId = tombId.filter(function (item) {
        return item !== x;
    })
    tombId = tombId.filter(function (item) {
        return item !== y;
    })
}

function inputZar() {
    for (let i = 0; i < tombId.length; i++) {
        tombId[i].disabled = true;
    }
}

function inputFelold() {
    for (let i = 0; i < tombId.length; i++) {
        tombId[i].disabled = false;
    }
}

let szamlalo = 0;
let probSzam = document.querySelector("#probSzam");

function valasztottInputCiklus() {
    if (valasztottInput.length == 2) {
        szamlalo += 1;
        probSzam.value = szamlalo;
        hatterSzinValtoztat();
        inputZar();
        egyezesVizsgalat();
    }
}

function MutatJo() {
    tombIdTorol();
    valasztottInput[0].disabled = true;
    valasztottInput[1].disabled = true
    valasztottInputSrc = [];
    valasztottInput = [];
    inputFelold();
    vegJatek();
}

function MutatRossz() {
    myvar1 = setTimeout(function () { valasztottInput[0].src = ""; }, 2000);
    myvar2 = setTimeout(function () { valasztottInput[1].src = ""; }, 2000);
    myvar3 = setTimeout(function () { valasztottInput = []; }, 2100);
    myvar4 = setTimeout(function () { valasztottInputSrc = []; }, 2100);
    myvar5 = setTimeout(function () { inputFelold(); }, 2100);
}

function egyezesVizsgalat() {
    if (valasztottInput[0].src.indexOf("beni1") >= 0 && valasztottInput[1].src.indexOf("beni2") >= 0 || valasztottInput[1].src.indexOf("beni1") >= 0 && valasztottInput[0].src.indexOf("beni2") >= 0) {
        MutatJo();
    } else if (valasztottInput[0].src.indexOf("dagobert1") >= 0 && valasztottInput[1].src.indexOf("dagobert2") >= 0 || valasztottInput[1].src.indexOf("dagobert1") >= 0 && valasztottInput[0].src.indexOf("dagobert2") >= 0) {
        MutatJo();
    } else if (valasztottInput[0].src.indexOf("freddy1") >= 0 && valasztottInput[1].src.indexOf("freddy2") >= 0 || valasztottInput[1].src.indexOf("freddy1") >= 0 && valasztottInput[0].src.indexOf("freddy2") >= 0) {
        MutatJo();
    } else if (valasztottInput[0].src.indexOf("jerry1") >= 0 && valasztottInput[1].src.indexOf("jerry2") >= 0 || valasztottInput[1].src.indexOf("jerry1") >= 0 && valasztottInput[0].src.indexOf("jerry2") >= 0) {
        MutatJo();
    } else if (valasztottInput[0].src.indexOf("nemo1") >= 0 && valasztottInput[1].src.indexOf("nemo2") >= 0 || valasztottInput[1].src.indexOf("nemo1") >= 0 && valasztottInput[0].src.indexOf("nemo2") >= 0) {
        MutatJo();
    } else if (valasztottInput[0].src.indexOf("scooby1") >= 0 && valasztottInput[1].src.indexOf("scooby2") >= 0 || valasztottInput[1].src.indexOf("scooby1") >= 0 && valasztottInput[0].src.indexOf("scooby2") >= 0) {
        MutatJo();
    } else if (valasztottInput[0].src.indexOf("senilla1") >= 0 && valasztottInput[1].src.indexOf("senilla2") >= 0 || valasztottInput[1].src.indexOf("senilla1") >= 0 && valasztottInput[0].src.indexOf("senilla2") >= 0) {
        MutatJo();
    } else if (valasztottInput[0].src.indexOf("shaggy1") >= 0 && valasztottInput[1].src.indexOf("shaggy2") >= 0 || valasztottInput[1].src.indexOf("shaggy1") >= 0 && valasztottInput[0].src.indexOf("shaggy2") >= 0) {
        MutatJo();
    } else if (valasztottInput[0].src.indexOf("mrsbeakley1") >= 0 && valasztottInput[1].src.indexOf("mrsbeakley2") >= 0 || valasztottInput[1].src.indexOf("mrsbeakley1") >= 0 && valasztottInput[0].src.indexOf("mrsbeakley2") >= 0) {
        MutatJo();
    } else if (valasztottInput[0].src.indexOf("tom1") >= 0 && valasztottInput[1].src.indexOf("tom2") >= 0 || valasztottInput[1].src.indexOf("tom1") >= 0 && valasztottInput[0].src.indexOf("tom2") >= 0) {
        MutatJo();
    } else {
        MutatRossz();
    }
}

let vegjatekSmall = document.querySelector("#modalSmall");

function hatterSzinValtoztat() {
    if (szamlalo <= 15) {
        vegjatekSmall.innerHTML = "Profi vagy!";
    }

    if (szamlalo >= 15 && szamlalo <= 22) {
        document.body.style.backgroundColor = "rgb(219, 178, 11)";
        vegjatekSmall.innerHTML = "Haladó! Alakul ez.";
    }
    if (szamlalo >= 23 && szamlalo <= 29) {
        document.body.style.backgroundColor = "rgb(134, 109, 7)";
        vegjatekSmall.innerHTML = "Közepes! Gyakorolj még egy kicsit, hogy kevesebb menjen mellé.";
    }
    if (szamlalo >= 30) {
        document.body.style.backgroundColor = "rgb(78, 63, 4)";
        vegjatekSmall.innerHTML = "Nem volt rossz! Gyakorlás teszi a mestert.";
    }
}

let probSzamModal = document.querySelector("#probSzamModal");

function vegJatek() {
    if (tombId.length == 0) {
        $("#exampleModalCenter").modal();
        probSzamModal.innerHTML = szamlalo;
    }
}

function ujJatek() {
    location.reload();
}