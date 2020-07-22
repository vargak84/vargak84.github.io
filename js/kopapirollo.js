//Véletlenszám generátor
//minszam = 0;
//maxszam = 4;
//let veletlenszam = minszam + Math.floor( Math.random() * ( maxszam - minszam + 1 ) );
//console.log(veletlenszam);

//Szabályok
function szabalyok() {
    window.alert("Agymenők kő-papír-olló szabályai:\n\nAz olló elvágja a papírt.\nA papír bevonja a követ.\nA kő agyonüti a gyíkot.\nA gyík megmarja Spockot.\nSpock eltöri az ollót.\nAz olló lefejezi a gyíkot.\nA gyík megeszi a papírt.\nA papír cáfolja Spockot.\nSpock feloldja a követ.\nÉs mint általában, a kő eltöri az ollót.");
}

//Játék gomb
function koValaszt() {
    document.jatekosKep.src = document.vkokep.src;
    veletlenKep();
    kiNyer()
}

function papirValaszt() {
    document.jatekosKep.src = document.vpapirkep.src;
    veletlenKep()
}

function olloValaszt() {
    document.jatekosKep.src = document.vollokep.src;
    veletlenKep()
}

function gyikValaszt() {
    document.jatekosKep.src = document.vgyikkep.src;
    veletlenKep()
}

function spockValaszt() {
    document.jatekosKep.src = document.vspockkep.src;
    veletlenKep()
}

//Véletlenkép generátor
function veletlenKep() {
    let kep = new Array()
    kep[1]="../img/ko.jpg"
    kep[2]="../img/papir.jpg"
    kep[3]="../img/ollo.jpg"
    kep[4]="../img/gyik.jpg"
    kep[5]="../img/spock.jpg"
    
    let ry=Math.floor(Math.random()*kep.length)
    if (ry==0) 
    ry=1
    document.gepKep.src = kep[ry]
    }

function kiNyer() {
    if (document.gepKep.src == document.jatekosKep.src)
    console.log("döntetlen");
}