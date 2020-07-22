//Véletlenszám generátor
//minszam = 0;
//maxszam = 4;
//let veletlenszam = minszam + Math.floor( Math.random() * ( maxszam - minszam + 1 ) );
//console.log(veletlenszam);

let eredmeny = document.querySelector("small[id='eredmeny']");
let szam1 = 0;
let szam2 = 0;
let jatekosEredmeny = document.querySelector("small[id='jatekosEredmeny']");
jatekosEredmeny.innerHTML = szam1;
let gepEredmeny = document.querySelector("small[id = 'gepEredmeny']");
gepEredmeny.innerHTML = szam2;

//Szabályok
function szabalyok() {
    window.alert("Agymenők kő-papír-olló szabályai:\n\nAz olló elvágja a papírt.\nA papír bevonja a követ.\nA kő agyonüti a gyíkot.\nA gyík megmarja Spockot.\nSpock eltöri az ollót.\nAz olló lefejezi a gyíkot.\nA gyík megeszi a papírt.\nA papír cáfolja Spockot.\nSpock feloldja a követ.\nÉs mint általában, a kő eltöri az ollót.");
}

//Játék gomb
function koValaszt() {
    document.jatekosKep.src = "img/ko.jpg";
    veletlenKep();
    kiNyer()
}

function papirValaszt() {
    document.jatekosKep.src = document.vpapirkep.src;
    veletlenKep()
    kiNyer()
}

function olloValaszt() {
    document.jatekosKep.src = document.vollokep.src;
    veletlenKep()
    kiNyer()
}

function gyikValaszt() {
    document.jatekosKep.src = document.vgyikkep.src;
    veletlenKep()
    kiNyer()
}

function spockValaszt() {
    document.jatekosKep.src = document.vspockkep.src;
    veletlenKep()
    kiNyer()
}

//Véletlenkép generátor
function veletlenKep() {
    let kep = new Array()
    kep[1]="img/ko.jpg"
    kep[2]="img/papir.jpg"
    kep[3]="img/ollo.jpg"
    kep[4]="img/gyik.jpg"
    kep[5]="img/spock.jpg"
    
    let ry=Math.floor(Math.random()*kep.length)
    if (ry==0) 
    ry=1
    document.gepKep.src = kep[ry]
    }

function kiNyer() {
    if (document.jatekosKep.src == document.gepKep.src) {
        eredmeny.innerHTML = "Döntetlen"
        } else if
            (document.jatekosKep.src.indexOf("/img/ollo.jpg") >= 0 && document.gepKep.src.indexOf("/img/papir.jpg") >= 0) {
            eredmeny.innerHTML = "Nyert"
            szam1 += 1
            jatekosEredmeny.innerHTML = szam1
        } else if
            (document.jatekosKep.src.indexOf("/img/papir.jpg") >= 0 && document.gepKep.src.indexOf("/img/ko.jpg") >= 0) {
            eredmeny.innerHTML = "Nyert"
            szam1 += 1
            jatekosEredmeny.innerHTML = szam1
        } else if
            (document.jatekosKep.src.indexOf("/img/ko.jpg") >= 0 && document.gepKep.src.indexOf("/img/gyik.jpg") >= 0) {
            eredmeny.innerHTML = "Nyert"
            szam1 += 1
            jatekosEredmeny.innerHTML = szam1
        } else if
            (document.jatekosKep.src.indexOf("/img/gyik.jpg") >= 0 && document.gepKep.src.indexOf("/img/spock.jpg") >= 0) {
            eredmeny.innerHTML = "Nyert"
            szam1 += 1
            jatekosEredmeny.innerHTML = szam1
        } else if
            (document.jatekosKep.src.indexOf("/img/spock.jpg") >= 0 && document.gepKep.src.indexOf("/img/ollo.jpg") >= 0) {
            eredmeny.innerHTML = "Nyert"
            szam1 += 1
            jatekosEredmeny.innerHTML = szam1
        } else if
            (document.jatekosKep.src.indexOf("/img/ollo.jpg") >= 0 && document.gepKep.src.indexOf("/img/gyik.jpg") >= 0) {
            eredmeny.innerHTML = "Nyert"
            szam1 += 1
            jatekosEredmeny.innerHTML = szam1
        } else if
            (document.jatekosKep.src.indexOf("/img/gyik.jpg") >= 0 && document.gepKep.src.indexOf("/img/papir.jpg") >= 0) {
            eredmeny.innerHTML = "Nyert"
            szam1 += 1
            jatekosEredmeny.innerHTML = szam1
        } else if
            (document.jatekosKep.src.indexOf("/img/papir.jpg") >= 0 && document.gepKep.src.indexOf("/img/spock.jpg") >= 0) {
            eredmeny.innerHTML = "Nyert"
            szam1 += 1
            jatekosEredmeny.innerHTML = szam1
        } else if
            (document.jatekosKep.src.indexOf("/img/spock.jpg") >= 0 && document.gepKep.src.indexOf("/img/ko.jpg") >= 0) {
            eredmeny.innerHTML = "Nyert"
            szam1 += 1
            jatekosEredmeny.innerHTML = szam1
        } else if
            (document.jatekosKep.src.indexOf("/img/ko.jpg") >= 0 && document.gepKep.src.indexOf("/img/ollo.jpg") >= 0) {
            eredmeny.innerHTML = "Nyert"
            szam1 += 1
            jatekosEredmeny.innerHTML = szam1
        } else {
            eredmeny.innerHTML = "Vesztett"
            szam2 += 1
            gepEredmeny.innerHTML = szam2
        }
//        if (szam1 == 1 || szam2 == 1) {
//            console.log("Vége a játéknak!")
//        }
}