//Véletlenszám generátor
//minszam = 0;
//maxszam = 4;
//let veletlenszam = minszam + Math.floor( Math.random() * ( maxszam - minszam + 1 ) );
//console.log(veletlenszam);

//Szabályok
function szabalyok() {
    window.alert("Agymenők kő-papír-olló szabályai:\n\nAz olló elvágja a papírt.\nA papír bevonja a követ.\nA kő agyonüti a gyíkot.\nA gyík megmarja Spockot.\nSpock eltöri az ollót.\nAz olló lefejezi a gyíkot.\nA gyík megeszi a papírt.\nA papír cáfolja Spockot.\nSpock feloldja a követ.\nÉs mint általában, a kő eltöri az ollót.");
}



//Játékos képe
let jatekosKep = document.querySelector("small[id='jatekosKep']");
let jatekosEredmeny = document.querySelector("small[id='jatekosEredmeny']");


//Gép képe
let gepKep = document.querySelector("small[id='gepKep']");
let gepEredmeny = document.querySelector("small[id='gepEredmeny']");

//Játék gomb
function koValaszt() {
    document.jatekosKep.src = document.vkokep.src;
    document.vkokep.src
}

function papirValaszt() {
    document.jatekosKep.src = document.vpapirkep.src;
}

function olloValaszt() {
    document.jatekosKep.src = document.vollokep.src;
}

function gyikValaszt() {
    document.jatekosKep.src = document.vgyikkep.src;
}

function spockValaszt() {
    document.jatekosKep.src = document.vspockkep.src;
}